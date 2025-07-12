'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { Calendar } from "@/app/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../components/ui/button";
import { toast } from '../components/ui/use-toast';
import { supabase } from '@/lib/supabase';

const getImageUrl = (imagePath) => {
  if (!imagePath) return '/placeholder-car.jpg';
  if (imagePath.startsWith('http')) return imagePath;
  
  const { data: { publicUrl } } = supabase
    .storage
    .from('cars')
    .getPublicUrl(imagePath);
    
  return publicUrl;
};

export default function ReservationPage() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCars();
  }, []);

  async function fetchCars() {
    try {
      const { data, error } = await supabase
        .from('cars')
        .select('*')
        .order('name');
      
      if (error) throw error;
      
      const carsWithImages = data.map(car => ({
        ...car,
        image_url: getImageUrl(car.image_url)
      }));
      
      setCars(carsWithImages);
    } catch (error) {
      console.error('Error fetching cars:', error);
      toast({
        title: "Error loading vehicles",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleCarSelect = (car) => {
    setSelectedCar(car);
    setShowDialog(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedCar || !name || !email || !phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('reservations')
        .insert([
          {
            car_id: selectedCar.id,
            reservation_date: selectedDate,
            customer_name: name,
            customer_email: email,
            customer_phone: phone,
            status: 'pending'
          }
        ]);

      if (error) throw error;

      toast({
        title: "Reservation Confirmed",
        description: `Your ${selectedCar.name} is reserved for ${format(selectedDate, 'MMMM dd, yyyy')}`,
      });
      
      setShowDialog(false);
      setSelectedCar(null);
      setSelectedDate(null);
      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('Error creating reservation:', error);
      toast({
        title: "Error",
        description: "Failed to create reservation. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-white font-light tracking-[0.3em] uppercase"
        >
          Loading
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif mb-8">Available Vehicles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {cars.map((car) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="group cursor-pointer"
                onClick={() => handleCarSelect(car)}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={car.image_url}
                    alt={car.name}
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = '/placeholder-car.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h2 className="text-2xl font-serif mb-2">{car.name}</h2>
                    <p className="text-sm text-gray-200 line-clamp-2">{car.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-black/95 text-white border-white/20 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif mb-4">
              Reserve {selectedCar?.name}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6">
            <img
              src={selectedCar?.image_url}
              alt={selectedCar?.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-gray-300">{selectedCar?.description}</p>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>
              
              <div>
                <Label>Select Date</Label>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="bg-transparent text-white rounded-lg border border-white/20"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || !selectedDate}
              className="w-full py-6 bg-white text-black font-light tracking-wider hover:bg-white/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Processing...' : 'Confirm Reservation'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}