'use client'
import { motion } from 'framer-motion'
import Navigation from '@/app/components/Navigation'

export default function Privacy() {
  return (
    <main className="relative min-h-screen bg-zinc-900">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-light mb-8 gradient-text">Privacy Policy</h1>
          <div className="prose prose-invert">
            <p className="text-gray-300">
              This is a development privacy policy for testing purposes. This page outlines how we handle user data
              during the development and testing phase of our luxury automotive service platform.
            </p>
            <h2 className="text-2xl font-light mt-8 mb-4 gradient-text">Data Collection</h2>
            <p className="text-gray-300">
              During development, we collect basic user authentication data through Google OAuth2 for testing purposes.
              No sensitive information is stored or processed beyond authentication testing.
            </p>
          </div>
        </motion.div>
      </div>
      <Navigation />
    </main>
  )
}
