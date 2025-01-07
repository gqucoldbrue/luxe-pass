'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Clock, MapPin, Calendar, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

// This would typically come from your database or CMS
const experiences = {
  'ferrari-f8-tributo': {
    title: 'Ferrari F8 Tributo',
    category: 'Automotive Couture',
    description: 'Experience the pinnacle of Ferrari engineering with the F8 Tributo, a car that represents the highest expression of the Prancing Horse's classic two-seater berlinetta.',
    mainImage: '/ferrari-f8-main.jpg',
    galleryImages: [
      '/ferrari-f8-1.jpg',
      '/ferrari-f8-2.jpg',
      '/ferrari-f8-3.jpg',
    ],
    details: {
      duration: '48 Hours',
      location: 'Los Angeles',
      dates: 'Available Year-Round',
      type: 'Premium Experience',
      includes: [
        'Professional Driver Introduction',
        'Unlimited Mileage',
        'Insurance Coverage',
        'Concierge Support',
        'Luxury Hotel Partnership',
        'Custom Route Planning'
      ],
      specifications: {
        engine: '3.9L V8 Twin-Turbo',
        power: '710 HP',
        acceleration: '0-60 mph in 2.9s',
        topSpeed: '211 mph'
      }
    }
  },
  // Add more experiences here
};

export default function ExperienceDetail() {
  const params = useParams();
  const experience = experiences[params.slug];

  if (!experience) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Experience not found</h1>
          <Link href="/experiences" className="text-gray-400 hover:text-white">
            Return to Experiences
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Back Button */}
      <Link 
        href="/experiences"
        className="fixed top-24 left-8 z-10 luxury-blur p-2 hover:bg-white/10 transition-colors rounded-full"
      >
        <ChevronLeft className="w-6 h-6" />
      </Link>

      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <Image
          src={experience.mainImage}
          alt={experience.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-0 right-0 p-12"
        >
          <div className="container mx-auto">
            <div className="text-sm text-gray-300 mb-2">{experience.category}</div>
            <h1 className="text-5xl font-light mb-4">{experience.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl">{experience.description}</p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="luxury-blur p-6"
          >
            <Clock className="w-6 h-6 mb-4" />
            <div className="text-sm text-gray-400">Duration</div>
            <div className="text-lg">{experience.details.duration}</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="luxury-blur p-6"
          >
            <MapPin className="w-6 h-6 mb-4" />
            <div className="text-sm text-gray-400">Location</div>
            <div className="text-lg">{experience.details.location}</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="luxury-blur p-6"
          >
            <Calendar className="w-6 h-6 mb-4" />
            <div className="text-sm text-gray-400">Availability</div>
            <div className="text-lg">{experience.details.dates}</div>
          </motion.div>
        </div>

        {/* Specifications */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="luxury-blur p-8 mb-16"
        >
          <h2 className="text-2xl font-light mb-8">Vehicle Specifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(experience.details.specifications).map(([key, value]) => (
              <div key={key}>
                <div className="text-sm text-gray-400 mb-2">{key}</div>
                <div className="text-lg">{value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What's Included */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="luxury-blur p-8 mb-16"
        >
          <h2 className="text-2xl font-light mb-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experience.details.includes.map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {experience.galleryImages.map((image, index) => (
            <div key={index} className="relative h-64 luxury-blur overflow-hidden">
              <Image
                src={image}
                alt={`${experience.title} gallery image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>

        {/* Book Now Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <button className="bg-white text-black px-12 py-4 text-lg hover:bg-gray-100 transition-colors">
            RESERVE THIS EXPERIENCE
          </button>
        </motion.div>
      </div>
    </div>
  );
}