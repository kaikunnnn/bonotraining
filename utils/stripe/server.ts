'use server';

import getStripe from '@/utils/stripe/client';
import { Stripe } from 'stripe';
import { User } from '@supabase/supabase-js';
import { createClient } from '@/utils/supabase/server';

export async function createCheckoutSession(
    stripePriceId: string,
    // customerId?: string
): Promise<Stripe.Checkout.Session> {
    const stripe = getStripe();
    // リリース時に本番用のURLに変更する
    const APP_BASE_URL = process.env.TEST_APP_BASE_URL;
    if (!APP_BASE_URL) {
        throw new Error('APP_BASE_URL を取得できませんでした。');
    }

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ['card'],
        line_items: [{ price: stripePriceId, quantity: 1 }],
        mode: 'subscription',
        success_url: `${APP_BASE_URL}`,
        cancel_url: `${APP_BASE_URL}`,
    };

    // if (customerId) {
    //     sessionParams.customer = customerId;
    // }

    return stripe.checkout.sessions.create(sessionParams);
}

// export async function createOrUpdateStripeCustomer(
//     user: User
// ): Promise<string> {
//     const supabase = createClient();
//
//     const { data: existingCustomer, error: customerError } = await supabase
//         .from('stripe_customers')
//         .select('stripe_customer_id')
//         .eq('user_id', user.id)
//         .single();
//
//     if (customerError || !existingCustomer) {
//         const stripe = getStripe();
//         const newStripeCustomer = await stripe.customers.create({
//             email: user.email,
//         });
//
//         const { error: insertError } = await supabase
//             .from('stripe_customers')
//             .insert({
//                 user_id: user.id,
//                 stripe_customer_id: newStripeCustomer.id,
//             });
//
//         if (insertError) {
//             throw new Error('Failed to insert new Stripe customer.');
//         }
//
//         return newStripeCustomer.id;
//     } else {
//         return existingCustomer.stripe_customer_id;
//     }
// }
