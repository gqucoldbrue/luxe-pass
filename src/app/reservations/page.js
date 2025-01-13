'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { supabase } from '@/lib/supabase';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Add the helper function at the top of the file, after imports
const getImageUrl = (imagePath) => {
  if (!imagePath) return '/placeholder-car.jpg';
  
  if (imagePath.startsWith('http')) return imagePath;
  
  const { data: { publicUrl } } = supabase
    .storage
    .from('cars') // Replace 'cars' with your actual bucket name
    .getPublicUrl(imagePath);
    
  return publicUrl;
};

const styles = {
  // ... your existing styles ...
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

  // Update the fetchCars function to use getImageUrl
  async function fetchCars() {
    try {
      const { data, error } = await supabase
        .from('cars')
        .select('*')
        .order('name');
      
      if (error) throw error;
      
      // Transform the data to include proper image URLs
      const carsWithImages = data.map(car => ({
        ...car,
        image_url: getImageUrl(car.image_url)
      }));
      
      setCars(carsWithImages);
      console.log('Fetched cars with images:', carsWithImages); // Debug log
    } catch (error) {
      console.error('Error fetching cars:', error);
      toast.error('Failed to load available cars');
    } finally {
      setIsLoading(false);
    }
  }

  // ... rest of your component code ...

  return (
    <div className={styles.pageContainer}>
      <div className={styles.carGrid}>
        <AnimatePresence>
          {cars.map((car) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`${styles.carCard} group`}
              onClick={() => handleCarSelect(car)}
            >
              <img
                src={car.image_url}
                alt={car.name}
                className="w-full h-[300px] object-cover rounded-xl"
                onError={(e) => {
                  console.log('Image failed to load:', car.image_url); // Debug log
                  e.target.src = '/placeholder-car.jpg';
                }}
              />
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <h2 className="text-2xl font-bold mb-2">{car.name}</h2>
                <p className="text-sm text-gray-200">{car.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ... rest of your component JSX ... */}
    </div>
  );
}