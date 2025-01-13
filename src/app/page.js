'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import SignIn from './sign-in/page';

export default function Home() {
  return (
    
    <main>
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >

            <h1 className="text-5xl font-light mb-6 gradient-text">
              Automotive Couture
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Premium Vehicle Experiences
            </p>
            <div className="luxury-blur inline-block p-1">
              <Link 
                href="/membership"
                className="inline-block px-8 py-4 bg-white text-black hover:bg-gray-100 luxury-transition"
              >
                Explore Membership
              </Link>
            </div>
          </motion.div>
        </div>
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

      {/* Additional sections... */}
    </main>
  );
}