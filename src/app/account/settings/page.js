'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Settings() {
  const [notifications, setNotifications] = useState({
    email: false,
    sms: false
  });

  const handleToggle = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-3xl font-light mb-8">Settings</h1>
          
          <div className="space-y-4">
            <Link href="/account/settings/security">
              <div className="luxury-blur p-6 hover:border-white/30 transition-all">
                <h2 className="text-xl font-light mb-2">Security</h2>
                <p className="text-gray-400">
                  Manage your password and security preferences
                </p>
              </div>
            </Link>

            <div className="luxury-blur p-6">
              <h2 className="text-xl font-light mb-2">Notifications</h2>
              <p className="text-gray-400 mb-4">
                Choose what notifications you receive
              </p>
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={notifications.email}
                    onChange={() => handleToggle('email')}
                  />
                  <span>Email notifications</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={notifications.sms}
                    onChange={() => handleToggle('sms')}
                  />
                  <span>SMS notifications</span>
                </label>
              </div>
            </div>

            <div className="luxury-blur p-6">
              <h2 className="text-xl font-light mb-2">Privacy</h2>
              <p className="text-gray-400 mb-4">
                Manage your privacy settings
              </p>
              <button className="text-gray-400 hover:text-white transition-colors">
                View Privacy Policy
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}