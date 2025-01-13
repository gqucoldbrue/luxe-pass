// src/app/api/payments/route.js
import { NextResponse } from 'next/server';
import { createPaymentIntent } from '@/utils/payment'; // Import the utility function to create a payment intent

export const config = {
  api: {
    bodyParser: true, // Enable body parsing for JSON
  },
};

export default async function handler(req) {
  if (req.method === 'POST') {
    const { amount, currency } = req.body; // Extract amount and currency from the request body

    try {
      // Create a payment intent using the utility function
      const paymentIntent = await createPaymentIntent(amount, currency);

      return NextResponse.json({ 
        success: true, 
        clientSecret: paymentIntent.client_secret // Return the client secret for the payment
      });
    } catch (error) {
      console.error('Error creating payment intent:', error);
      return NextResponse.json({ 
        error: 'Failed to create payment intent.' 
      }, { status: 500 });
    }
  } else {
    return NextResponse.json({ 
      error: 'Method not allowed' 
    }, { status: 405 });
  }
}