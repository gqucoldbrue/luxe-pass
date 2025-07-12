import { NextResponse } from 'next/server';
import { buffer } from 'micro'; // Only if needed -- might be required for Stripe
import { stripe } from '@/lib/payments/stripe'; // Your Stripe instance

export const runtime = 'nodejs'; // ✅ Replaces deprecated config export

export async function POST(request) {
  const rawBody = await request.text(); // or buffer if Stripe needs it raw
  const signature = request.headers.get('stripe-signature');

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    // Handle the event
    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object;
      console.log('Payment succeeded:', paymentIntent.id);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error('Webhook error:', err.message);
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 });
  }
}