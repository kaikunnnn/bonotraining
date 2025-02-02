create table if not exists stripe_customers (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null,
    stripe_customer_id varchar(255) not null,
    created_at timestamptz default now() not null,
    updated_at timestamptz default now() not null,
    foreign key (user_id) references auth.users(id)
);

create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
return new;
end;
$$ language plpgsql;

create trigger update_stripe_customers_updated_at
    before update on stripe_customers
    for each row
    execute function update_updated_at_column();
