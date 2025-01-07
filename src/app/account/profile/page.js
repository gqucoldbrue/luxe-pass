'use client'
import { motion } from 'framer-motion';

export default function Profile() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto luxury-blur p-8"
        >
          <h1 className="text-3xl font-light mb-8">Profile</h1>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-black/50 border border-white/10 p-3"
                defaultValue="Alexander Pierce"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-black/50 border border-white/10 p-3"
                defaultValue="alexander@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Phone
              </label>
              <input
                type="tel"
                className="w-full bg-black/50 border border-white/10 p-3"
                defaultValue="+1 (555) 123-4567"
              />
            </div>

            <button className="w-full bg-white text-black py-3 hover:bg-gray-100 transition-colors">
              SAVE CHANGES
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}