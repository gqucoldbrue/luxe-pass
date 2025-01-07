'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const experiences = [
  {
    slug: 'ferrari-f8-tributo',
    title: 'Ferrari F8 Tributo',
    category: 'Automotive Couture',
    description: 'Experience the pinnacle of Ferrari engineering',
    image: '/Ferrari-F8-Tributo.jpg', // You'll need to add these images to your public folder
    details: {
      duration: '48 Hours',
      location: 'Los Angeles',
      type: 'Premium Experience'
    }
  },
  {
    slug: 'racing-elegance-monaco',
    title: 'Monaco Grand Prix',
    category: 'Racing Elegance',
    description: 'Exclusive access to the world\'s most prestigious racing event',
    image: '/Monaco-Grand-Prix.jpg',
    details: {
      duration: '3 Days',
      location: 'Monte Carlo',
      type: 'Elite Experience'
    }
  },
  // Add more experiences as needed
];

export default function ExperienceCatalog() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-light mb-6 gradient-text">
            Curated Experiences
          </h1>
          <p className="text-xl text-gray-300">
            Discover our collection of exceptional automotive adventures
          </p>
        </motion.div>

        {/* Filter Section */}
        <div className="luxury-blur mb-12 p-6 flex justify-center space-x-8">
          <button className="text-white/70 hover:text-white luxury-transition">
            All Experiences
          </button>
          <button className="text-white/70 hover:text-white luxury-transition">
            Automotive Couture
          </button>
          <button className="text-white/70 hover:text-white luxury-transition">
            Racing Elegance
          </button>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/experiences/${experience.slug}`}>
                <div className="luxury-blur group cursor-pointer overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="text-sm text-gray-400 mb-2">
                      {experience.category}
                    </div>
                    <h2 className="text-2xl font-light mb-4">
                      {experience.title}
                    </h2>
                    <p className="text-gray-300 mb-6">
                      {experience.description}
                    </p>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>{experience.details.duration}</span>
                      <span>{experience.details.location}</span>
                      <span>{experience.details.type}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}