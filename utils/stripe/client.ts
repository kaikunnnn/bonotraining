'use server';

import Stripe from 'stripe';

let stripe: Stripe;

const getStripe = () => {
    if (!stripe) {
        const secretKey = process.env.STRIPE_SECRET_KEY;
        if (!secretKey) {
            throw new Error('STRIPE_SECRET_KEY env is not set');
        }
        const apiVersion = '2024-12-18.acacia';
        stripe = new Stripe(secretKey, { apiVersion });
    }

    return stripe;
};

export default getStripe;
