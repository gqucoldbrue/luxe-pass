'use client'
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-7xl font-light mb-6 gradient-text">
              Luxepass
            </h1>
            <p className="text-2xl text-gray-300 mb-12">
              Your Luxury Portal to Perfectly Tailored Experiences
            </p>
            <div className="space-x-6">
              <Link 
                href="/experiences"
                className="inline-block bg-white text-black px-8 py-3 hover:bg-gray-100 luxury-transition"
              >
                EXPLORE EXPERIENCES
              </Link>
              <Link 
                href="/membership"
                className="inline-block border px-8 py-3 hover:bg-white hover:text-black luxury-transition"
              >
                LEARN MORE
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Video Play Button */}
        <button className="absolute bottom-12 right-12 luxury-blur p-4 rounded-full hover:bg-white/10 transition-colors">
          <Play size={24} />
        </button>
      </section>

      {/* Experience Categories */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Automotive Couture', 'Racing Elegance', 'Connoisseur Collection'].map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.02 }}
                className="luxury-blur p-8 group cursor-pointer"
              >
                <h3 className="text-2xl font-light mb-4">{category}</h3>
                <p className="text-gray-400 mb-6">Premium Vehicle Experiences</p>
                <span className="text-sm text-white/70 group-hover:text-white luxury-transition">
                  Discover More →
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}