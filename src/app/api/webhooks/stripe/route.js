import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import stripe from '@/lib/payments/stripe';
import { handleStripeWebhook } from '@/lib/payments/webhooks';

export async function POST(req) {
  try {
    const body = await req.text();
    const signature = headers().get('stripe-signature');

    // Verify webhook signature
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    // Handle the webhook event
    await handleStripeWebhook(event);

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' }, 
      { status: 400 }
    );
  }
}