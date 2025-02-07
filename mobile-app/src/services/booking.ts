// src/services/booking.ts
import { supabase } from './supabase';

export const bookingService = {
  async createBooking(vehicleId: string, startDate: Date, endDate: Date) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('bookings')
      .insert({
        vehicle_id: vehicleId,
        user_id: user.id,
        start_date: startDate,
        end_date: endDate,
        status: 'pending',
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getUserBookings() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('bookings')
      .select(`
        *,
        vehicle:vehicles(*)
      `)
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },
};
