'use client'
import { motion } from 'framer-motion';
import Link from 'next/link'; // Add this import

const tiers = [
  {
    name: 'Silver',
    price: '299',
    features: [
      'Access to Select Vehicles',
      '2 Experiences per Month',
      'Basic Concierge Support',
      'Weekend Availability'
    ]
  },
  {
    name: 'Gold',
    price: '599',
    features: [
      'Extended Vehicle Selection',
      '4 Experiences per Month',
      'Priority Concierge',
      'Weekday & Weekend Access'
    ]
  },
  {
    name: 'Platinum',
    price: '999',
    features: [
      'Full Fleet Access',
      'Unlimited Experiences',
      'Dedicated Concierge',
      'Priority Booking & Events'
    ]
  }
];

export default function Membership() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-light text-center mb-16 gradient-text"
        >
          Choose Your Experience Level
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="luxury-blur p-8 border border-white/10 hover:border-white/30 transition-all"
            >
              <h2 className="text-2xl font-light mb-4">{tier.name}</h2>
              <div className="text-3xl mb-8">
                ${tier.price}
                <span className="text-sm text-gray-400">/month</span>
              </div>
              <ul className="space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="text-gray-300">
                    • {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href={`/membership/${tier.name.toLowerCase()}`}
                className="block w-full mt-8 bg-white text-black py-3 hover:bg-gray-100 transition-colors text-center"
              >
                SELECT PLAN
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}