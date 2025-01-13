'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { format } from 'date-fns'
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from '@/components/ui/use-toast'
import { supabase } from '@/lib/supabase'

export default function LuxuryCarShowcase() {
  const [cars, setCars] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCar, setSelectedCar] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showBookingDialog, setShowBookingDialog] = useState(false)

  useEffect(() => {
    fetchCars()
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cars.length)
    }, 5000) // Auto advance every 5 seconds
    return () => clearInterval(interval)
  }, [cars.length])

  async function fetchCars() {
    try {
      let { data: cars, error } = await supabase
        .from('cars')
        .select('*')
        .order('name')
      
      if (error) throw error
      
      // Add error handling for images
      const carsWithValidImages = cars.map(car => ({
        ...car,
        image_url: car.image_url || '/placeholder-car.jpg' // Fallback image
      }))
      
      setCars(carsWithValidImages)
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: "Error loading vehicles",
        description: "Please try again later",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  async function handleBooking() {
    if (!selectedCar || !selectedDate) return

    try {
      // Add booking to database
      const { data, error } = await supabase
        .from('bookings')
        .insert([
          {
            car_id: selectedCar.id,
            date: selectedDate,
            status: 'pending'
          }
        ])

      if (error) throw error

      // Send confirmation email
      await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          carName: selectedCar.name,
          date: format(selectedDate, 'MMMM dd, yyyy'),
          email: 'user@example.com' // Replace with actual user email
        })
      })

      toast({
        title: "Booking Confirmed",
        description: `Your ${selectedCar.name} is reserved for ${format(selectedDate, 'MMMM dd, yyyy')}`,
      })

      setShowBookingDialog(false)
      setSelectedCar(null)
      setSelectedDate(null)
    } catch (error) {
      console.error('Booking error:', error)
      toast({
        title: "Booking failed",
        description: "Please try again later",
        variant: "destructive"
      })
    }
  }

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
    )
  }

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        {/* Main showcase */}
        <div className="relative h-[70vh] overflow-hidden">
          <AnimatePresence mode="wait">
            {cars.map((car, idx) => (
              idx === currentIndex && (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute inset-0"
                >
                  <div className="relative h-full group cursor-pointer"
                       onClick={() => {
                         setSelectedCar(car)
                         setShowBookingDialog(true)
                       }}>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                    <img
                      src={car.image_url}
                      alt={car.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/placeholder-car.jpg'
                      }}
                    />
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent"
                    >
                      <h2 className="font-serif text-4xl mb-2" style={{ fontFamily: 'Cormorant Garamond' }}>
                        {car.name}
                      </h2>
                      <p className="font-light tracking-wide text-gray-200" style={{ fontFamily: 'Optima, sans-serif' }}>
                        {car.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Custom navigation dots */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {cars.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'bg-white w-6' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Booking Dialog */}
        <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
          <DialogContent className="bg-black/95 text-white border-white/20">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif mb-4" style={{ fontFamily: 'Cormorant Garamond' }}>
                Reserve Your Experience
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="bg-transparent text-white"
              />
              <button
                onClick={handleBooking}
                disabled={!selectedDate}
                className="w-full py-3 px-4 bg-white text-black font-light tracking-wider hover:bg-white/90 transition-colors disabled:opacity-50"
              >
                Confirm Reservation
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  )
}