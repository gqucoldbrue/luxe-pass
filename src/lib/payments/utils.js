import stripe from './stripe';

export async function createPaymentIntent(amount, currency = 'usd') {
  return await stripe.paymentIntents.create({
    amount,
    currency,
    automatic_payment_methods: {
      enabled: true,
    },
  });
}

export async function createCustomer(email, paymentMethod) {
  return await stripe.customers.create({
    email,
    payment_method: paymentMethod,
    invoice_settings: {
      default_payment_method: paymentMethod,
    },
  });
}