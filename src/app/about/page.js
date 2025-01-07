'use client'
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-5xl font-light mb-6 gradient-text">
            Our Vision
          </h1>
          <p className="text-xl text-gray-300">
            Creating the premier digital gateway for curated luxury experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="luxury-blur p-8"
          >
            <h2 className="text-2xl font-light mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded on the principle that exceptional experiences should be 
              accessible to those who appreciate them most. We've curated a 
              collection of the world's finest vehicles and experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="luxury-blur p-8"
          >
            <h2 className="text-2xl font-light mb-6">Our Promise</h2>
            <p className="text-gray-300 mb-4">
              We deliver unparalleled access to extraordinary vehicles and 
              experiences, backed by personalized service and attention to detail 
              that exceeds expectations.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}