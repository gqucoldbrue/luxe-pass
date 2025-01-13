import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/middleware';
import { db } from '@/lib/db';

export async function PUT(req) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const data = await req.json();
    
    // Update profile in database
    const updatedProfile = await db.profile.update({
      where: { userId: session.user.id },
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