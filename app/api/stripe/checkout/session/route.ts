import {
    createCheckoutSession,
    // createOrUpdateStripeCustomer,
} from '@/utils/stripe/server';
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function POST(request: NextRequest) {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect('/sign-in');
    }

    // const stripeCustomerId = await createOrUpdateStripeCustomer(user);

    const body = await request.json();
    const stripeCheckoutSession = await createCheckoutSession(
        body.priceId,
        // stripeCustomerId
    );
    if (!stripeCheckoutSession.url) {
        throw new Error('Stripe Checkout セッションを作成できませんでした。');
    }
    return NextResponse.json({ url: stripeCheckoutSession.url });
}
