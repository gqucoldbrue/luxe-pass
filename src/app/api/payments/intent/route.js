import { NextResponse } from 'next/server';
import { createPaymentIntent } from '@/utils/payment';

export const runtime = 'nodejs'; // ✅ Replaces deprecated config

export async function POST(request) {
  try {
    const { amount, currency } = await request.json(); // Uses new App Router API

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