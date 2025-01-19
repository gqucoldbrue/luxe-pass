'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import { CreditCard } from './components/CreditCard';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="relative">
      <section className="relative min-h-screen flex items-center pb-20">
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
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
              className="mt-8"
            >
              <CreditCard />
            </motion.div>

            {!session && (
              <div className="mt-8">
                <Link href="/sign-in">
                  
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      <Navigation />
    </main>
  );
}