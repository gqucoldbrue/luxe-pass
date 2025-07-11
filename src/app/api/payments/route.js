// src/app/api/payments/route.js
import { NextResponse } from 'next/server';
import { createPaymentIntent } from '@/utils/payment';

export async function POST(request) {
  try {
    const { amount, currency } = await request.json(); // ✅ App Router uses request.json()

    const paymentIntent = await createPaymentIntent(amount, currency);

    return NextResponse.json({
      success: true,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json(
      { error: 'Failed to create payment intent.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}