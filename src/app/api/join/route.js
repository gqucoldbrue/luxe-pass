import { NextResponse } from 'next/server';
import supabase from '@/lib/db';
import { createCustomer } from '@/lib/payments/utils';
import { encryptData } from '@/lib/security/encryption';

export async function POST(req) {
  try {
    const { personalInfo, paymentMethod, membershipTier } = await req.json();

    // Create Stripe customer
    const customer = await createCustomer(personalInfo.email, paymentMethod);

    // Encrypt sensitive data before storing
    const encryptedPersonalInfo = encryptData(personalInfo);

    // Create application record with encrypted data
    const { data: application, error } = await supabase
      .from('applications')
      .insert({
        personal_info: encryptedPersonalInfo,
        stripe_customer_id: customer.id,
        membership_tier: membershipTier,
        status: 'pending'
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ 
      success: true, 
      applicationId: application.id 
    });
  } catch (error) {
    console.error('Join process error:', error);
    return NextResponse.json(
      { error: 'Failed to process application' }, 
      { status: 500 }
    );
  }
}