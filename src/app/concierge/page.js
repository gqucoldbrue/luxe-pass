'use client'
import { useState } from 'react'; // Import useState
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Clock } from 'lucide-react';

export default function Concierge() {
  const [messageSent, setMessageSent] = useState(false); // State to manage message visibility

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setMessageSent(true); // Set message sent state to true
    // Optionally, you can also reset the form fields here if needed
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-light mb-6 gradient-text">
            Personal Concierge Service
          </h1>
          <p className="text-xl text-gray-300">
            Your dedicated team for curating exceptional experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <MessageSquare className="w-8 h-8" />,
              title: '24/7 Support',
              description: 'Direct access to your personal concierge team'
            },
            {
              icon: <Calendar className="w-8 h-8" />,
              title: 'Custom Scheduling',
              description: 'Flexible booking and modification options'
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: 'Quick Response',
              description: 'Priority assistance within minutes'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="luxury-blur p-8 text-center"
            >
              <div className="inline-block mb-4">{feature.icon}</div>
              <h3 className="text-xl font-light mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="luxury-blur p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-light mb-6 text-center">
            Contact Your Concierge
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/50 border border-white/10 p-3"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black/50 border border-white/10 p-3"
            />
            <textarea
              placeholder="How can we assist you?"
              rows={4}
              className="w-full bg-black/50 border border-white/10 p-3"
            />
            <button type="submit" className="w-full bg-white text-black py-3 hover:bg-gray-100 transition-colors">
              SEND MESSAGE
            </button>
          </form>
          {messageSent && ( // Conditionally render the message
            <p className="mt-4 text-green-500 text-center">Message received!</p>
          )}
        </div>
      </div>
    </div>
  );
}