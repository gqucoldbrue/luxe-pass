'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import { CreditCard } from './components/CreditCard'; // Ensure this is still imported
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* ... existing background code ... */}

        {/* Updated Content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 4, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-light mb-6 gradient-text">
              Luxury Automotive Service
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              
            </p>
            
            {/* Added CreditCard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0. }} // Slight delay for the CreditCard
              className="mt-8" // Add margin for spacing
            >
              <CreditCard />
            </motion.div>

            {!session && (
              <div className="mt-8">
                <Link 
                  href="/sign-in"
                  
                >
                  
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ... rest of the code ... */}
    </main>
  );
}