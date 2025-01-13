import { supabase } from '@/lib/supabase';

export async function POST(request) {
  const { fullName, email, phone, date, specialRequests, experienceId } = await request.json();

  const { error } = await supabase
    .from('reservations')
    .insert([
      {
        experience_id: experienceId,
        full_name: fullName,
        email,
        phone,
        date,
        special_requests: specialRequests,
        status: 'pending',
        created_at: new Date().toISOString()
      }
    ]);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }

  return new Response(JSON.stringify({ message: 'Reservation successful!' }), { status: 200 });
}