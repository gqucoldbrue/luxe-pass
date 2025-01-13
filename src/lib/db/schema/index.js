// src/lib/db/schema/index.js
export const schema = {
    vehicles: {
      id: 'uuid',
      make: 'text',
      model: 'text',
      year: 'integer',
      vin: 'text',
      status: 'text', // available, booked, maintenance
      location_id: 'uuid',
      rfid_tag: 'text',
      created_at: 'timestamp',
      updated_at: 'timestamp'
    },
  
    locations: {
      id: 'uuid',
      name: 'text',
      address: 'text',
      latitude: 'float8',
      longitude: 'float8',
      access_code: 'text',
      is_active: 'boolean',
      created_at: 'timestamp'
    },
  
    bookings: {
      id: 'uuid',
      user_id: 'uuid',
      vehicle_id: 'uuid',
      start_time: 'timestamp',
      end_time: 'timestamp',
      status: 'text', // pending, active, completed, cancelled
      pickup_location_id: 'uuid',
      dropoff_location_id: 'uuid',
      created_at: 'timestamp'
    },
  
    access_cards: {
      id: 'uuid',
      user_id: 'uuid',
      card_number: 'text',
      rfid_id: 'text',
      status: 'text', // active, disabled, lost
      issued_at: 'timestamp',
      expires_at: 'timestamp'
    },
  
    memberships: {
      id: 'uuid',
      user_id: 'uuid',
      tier: 'text', // silver, gold, platinum
      status: 'text', // active, suspended, cancelled
      start_date: 'timestamp',
      end_date: 'timestamp',
      payment_status: 'text'
    }
  };
  
  export const createTables = async (supabase) => {
    // Implementation for creating tables
    for (const [table, fields] of Object.entries(schema)) {
      const query = generateCreateTableQuery(table, fields);
      await supabase.query(query);
    }
  };