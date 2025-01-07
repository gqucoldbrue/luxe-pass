'use client'
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function Security() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <Link 
            href="/account/settings"
            className="flex items-center space-x-2 text-gray-400 hover:text-white mb-8"
          >
            <ChevronLeft size={20} />
            <span>Back to Settings</span>
          </Link>

          <h1 className="text-3xl font-light mb-8">Security Settings</h1>
          
          <div className="space-y-6">
            <div className="luxury-blur p-6">
              <h2 className="text-xl font-light mb-6">Change Password</h2>
              <div className="space-y-4">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full bg-black/50 border border-white/10 p-3"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full bg-black/50 border border-white/10 p-3"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full bg-black/50 border border-white/10 p-3"
                />
                <button className="w-full bg-white text-black py-3 hover:bg-gray-100 transition-colors">
                  UPDATE PASSWORD
                </button>
              </div>
            </div>

            <div className="luxury-blur p-6">
              <h2 className="text-xl font-light mb-6">Two-Factor Authentication</h2>
              <p className="text-gray-400 mb-4">
                Add an extra layer of security to your account
              </p>
              <button className="border px-6 py-2 hover:bg-white hover:text-black transition-colors">
                ENABLE 2FA
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}