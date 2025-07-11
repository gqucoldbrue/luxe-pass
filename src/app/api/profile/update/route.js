// File: src/app/api/profile/update/route.js
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import { db } from '@/lib/db';

export async function POST(req) {
  try {
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const data = await req.json();

    const updatedProfile = await db.profile.update({
      where: { userId: user.id },
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
      },
    });

    return NextResponse.json(updatedProfile);
  } catch (error) {
    console.error('Profile update error:', error);
    return NextResponse.json(
      { error: 'Failed to update profile' },
      { status: 500 }
    );
  }
}