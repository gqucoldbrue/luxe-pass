import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/supabase';

const ROTATION_RADIUS = 800; // Radius of the circular path
const ROTATION_SPEED = 20000; // Time in ms for one full rotation

export default function LuxuryCarShowcase() {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [rotation, setRotation] = useState(0);
  const rotationRef = useRef(null);

  useEffect(() => {
    fetchCars();
    startRotation();
    return () => {
      if (rotationRef.current) {
        cancelAnimationFrame(rotationRef.current);
      }
    };
  }, []);

  const startRotation = () => {
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) % ROTATION_SPEED;
      const newRotation = (progress / ROTATION_SPEED) * 360;
      setRotation(newRotation);
      rotationRef.current = requestAnimationFrame(animate);
    };
    rotationRef.current = requestAnimationFrame(animate);
  };

  async function fetchCars() {
    try {
      let { data: cars, error } = await supabase
        .from('cars')
        .select('*')
        .order('name');
      
      if (error) throw error;
      
      const carsWithValidImages = cars.map(car => ({
        ...car,
        image_url: car.image_url || '/placeholder-car.jpg'
      }));
      
      setCars(carsWithValidImages);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error loading vehicles",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  }

  const calculateCarPosition = (index) => {
    const angleStep = 360 / cars.length;
    const angle = ((rotation + (index * angleStep)) * Math.PI) / 180;
    const x = Math.cos(angle) * ROTATION_RADIUS;
    const z = Math.sin(angle) * ROTATION_RADIUS;
    const scale = (z + ROTATION_RADIUS) / (2 * ROTATION_RADIUS);
    return { x, z, scale };
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
    <div className="min-h-screen bg-black text-white">
      <div className="h-screen relative overflow-hidden perspective-1000">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full" style={{ transform: 'translateZ(-800px)' }}>
            {cars.map((car, index) => {
              const { x, z, scale } = calculateCarPosition(index);
              return (
                <motion.div
                  key={car.id}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    x,
                    zIndex: Math.round(z),
                    scale: scale * 0.8 + 0.2,
                    opacity: scale * 0.5 + 0.5
                  }}
                  whileHover={{ scale: scale * 1.1 }}
                  onClick={() => {
                    if (scale > 0.7) {
                      setSelectedCar(car);
                      setShowBookingDialog(true);
                    }
                  }}
                >
                  <div className="relative group cursor-pointer">
                    <img
                      src={car.image_url}
                      alt={car.name}
                      className="w-96 h-64 object-cover rounded-lg shadow-2xl transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = '/placeholder-car.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 rounded-lg" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                      <h2 className="font-serif text-2xl mb-1">{car.name}</h2>
                      <p className="font-light text-sm text-gray-200 line-clamp-2">
                        {car.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
        <DialogContent className="bg-black/95 text-white border-white/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif mb-4">
              {selectedCar?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <img
              src={selectedCar?.image_url}
              alt={selectedCar?.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-gray-300">{selectedCar?.description}</p>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="bg-transparent text-white"
            />
            <button
              onClick={() => {
                toast({
                  title: "Booking Confirmed",
                  description: `Your ${selectedCar?.name} is reserved for ${format(selectedDate, 'MMMM dd, yyyy')}`,
                });
                setShowBookingDialog(false);
              }}
              disabled={!selectedDate}
              className="w-full py-3 px-4 bg-white text-black font-light tracking-wider hover:bg-white/90 transition-colors disabled:opacity-50"
            >
              Confirm Reservation
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}