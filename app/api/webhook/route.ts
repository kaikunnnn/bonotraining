import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import getStripe from '@/utils/stripe/client';
import { createClient } from '@/utils/supabase/server';

export async function POST(request: NextRequest) {
  const signature = request.headers.get('stripe-signature');
  if (signature == null) {
    return NextResponse.json({ message: 'Signature missing' }, { status: 401 });
  }
  const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
  if (!STRIPE_WEBHOOK_SECRET) {
    throw new Error('STRIPE_WEBHOOK_SECRET environment variable is not set.');
  }

  const stripe = getStripe();
  const body = await request.text();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return NextResponse.json({ message: 'Webhook Error' }, { status: 400 });
  }

  if (event.type === 'invoice.payment_succeeded') {
    return NextResponse.json(await handlePaymentSucceededEvent(event));
  } else {
    console.log(`Unhandled event type: ${event.type}`);
    return NextResponse.json(
      { message: 'Ignored event type' },
      { status: 200 }
    );
  }
}

async function handlePaymentSucceededEvent(event: Stripe.Event) {
  const invoice = event.data.object as Stripe.Invoice;
  const stripeSubscriptionId = invoice.subscription as string;
  const stripeCustomerId = invoice.customer as string;

  const supabase = await createClient();

  const { data: userRows, error: userError } = await supabase
    .from('stripe_customers')
    .select('user_id')
    .eq('stripe_customer_id', stripeCustomerId)
    .limit(1);

  if (userError || !userRows || userRows.length === 0) {
    console.error('User not found for Stripe Customer ID:', stripeCustomerId);
    return { status: 404, message: 'User not found' };
  }

  const userId = userRows[0].user_id;

  try {
    const { error: insertError } = await supabase.from('subscriptions').insert([
      {
        user_id: userId,
        stripe_subscription_id: stripeSubscriptionId,
        stripe_invoice_id: invoice.id,
        start_timestamp: new Date(
          invoice.lines.data[0].period.start * 1000
        ).toISOString(),
        end_timestamp: new Date(
          invoice.lines.data[0].period.end * 1000
        ).toISOString(),
      },
    ]);

    if (insertError) {
      throw insertError;
    }

    return { status: 200, message: 'Subscription record created' };
  } catch (err) {
    console.error('Error inserting subscription record:', err);
    return { status: 500, message: 'Internal Server Error' };
  }
}
