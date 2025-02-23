create table subscriptions (
    id uuid primary key default gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES auth.users(id),
    stripe_subscription_id VARCHAR(255) NOT NULL,
    stripe_invoice_id VARCHAR(255) UNIQUE,
    start_timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    end_timestamp TIMESTAMP WITH TIME ZONE NOT NULL
);