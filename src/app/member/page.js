// src/app/member/page.js
'use client'
import { useState, useEffect } from 'react';
import { Map } from 'lucide-react';
import { supabase } from '@/lib/supabase'; // Import the Supabase client

export default function VehicleBooking() {
  const [vehicles, setVehicles] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  // Fetch vehicle data from Supabase
  const fetchVehicles = async () => {
    const { data, error } = await supabase
      .from('vehicles') // Replace with your actual table name
      .select('*'); // Adjust the fields as necessary

    if (error) {
      console.error('Error fetching vehicles:', error);
    } else {
      setVehicles(data);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, [selectedDate, selectedLocation]);

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Available Vehicles</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setSelectedLocation(null)}
              className="flex items-center px-4 py-2 rounded-lg border border-gray-800"
            >
              <Map className="w-5 h-5 mr-2" />
              View Map
            </button>
            <input
              type="date"
              className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-800"
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="rounded-lg overflow-hidden border border-gray-800 hover:border-white transition-all"
            >
              <img
                src={vehicle.images[0]} // Ensure your Supabase table has an 'images' field
                alt={`${vehicle.make} ${vehicle.model}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </h3>
                <p className="text-gray-400 mb-4">{vehicle.location}</p>
                <button
                  onClick={() => router.push(`/member/booking/${vehicle.id}`)}
                  className="w-full py-3 px-4 text-center rounded-lg bg-white text-black hover:bg-gray-100 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}