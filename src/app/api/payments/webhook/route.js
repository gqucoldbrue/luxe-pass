// src/app/api/payments/webhook/route.js
import { NextResponse } from 'next/server';
import { buffer } from 'micro';
import { verifySignature } from '@/utils/payment'; // Utility function to verify webhook signature

export const config = {
  api: {
    bodyParser: false, // Disable body parsing to handle raw body
  },
};

export default async function handler(req) {
  if (req.method === 'POST') {
    const rawBody = await buffer(req);
    const signature = req.headers['stripe-signature']; // Adjust based on your payment processor

    try {
      // Verify the webhook signature
      const event = verifySignature(rawBody, signature);

      // Handle the event based on its type
      switch (event.type) {
        case 'payment_intent.succeeded':
          // Handle successful payment
          console.log('PaymentIntent was successful!');
          // Implement your logic to update the database or notify the user
          break;
        case 'payment_intent.payment_failed':
          // Handle failed payment
          console.log('PaymentIntent failed.');
          // Implement your logic to notify the user
          break;
        // Add more cases for other event types as needed
        default:
          console.log(`Unhandled event type: ${event.type}`);
      }

      return NextResponse.json({ received: true });
    } catch (error) {
      console.error('Webhook error:', error);
      return NextResponse.json({ error: 'Webhook error' }, { status: 400 });
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
}