'use client'
import { motion } from 'framer-motion'
import Navigation from '@/app/components/Navigation'

export default function Terms() {
  return (
    <main className="relative min-h-screen bg-zinc-900">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-light mb-8 gradient-text">Terms of Service</h1>
          <div className="prose prose-invert">
            <p className="text-gray-300">
              This is a development terms of service document for testing purposes. These terms govern the use
              of our luxury automotive service platform during its development and testing phase.
            </p>
            <h2 className="text-2xl font-light mt-8 mb-4 gradient-text">Usage Terms</h2>
            <p className="text-gray-300">
              This application is currently in development and testing. Access is limited to authorized test users
              only. Features and functionality may change without notice during this phase.
            </p>
          </div>
        </motion.div>
      </div>
      <Navigation />
    </main>
  )
}
