// src/utils/payment.js
import Stripe from '@/libstripe';
import { validatePaymentDetails, createPaymentIntent } from '@/utils/payment';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Initialize Stripe with your secret key

// Function to validate payment details
export const validatePaymentDetails = (cardDetails) => {
  const { cardNumber, expiryDate, cvv } = cardDetails;

  // Basic validation logic
  const isValidCardNumber = /^\d{16}$/.test(cardNumber); // Example: 16 digits
  const isValidExpiryDate = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate); // MM/YY format
  const isValidCVV = /^\d{3}$/.test(cvv); // Example: 3 digits

  return isValidCardNumber && isValidExpiryDate && isValidCVV;
};

// Function to create a payment intent
export const createPaymentIntent = async (amount, currency) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      // Add any additional options here, such as payment method types
    });
    return paymentIntent;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw new Error('Failed to create payment intent');
  }
};