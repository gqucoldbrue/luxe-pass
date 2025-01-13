'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function MembershipPage() {
  const [selectedTier, setSelectedTier] = useState(null);
  
  const tiers = [
    {
      name: 'Silver',
      price: 299,
      features: [
        'Access to luxury vehicle fleet',
        '2 bookings per month',
        'Standard vehicle selection',
        'Basic concierge support'
      ]
    },
    {
      name: 'Gold',
      price: 599,
      features: [
        'Premium vehicle access',
        '4 bookings per month',
        'Priority vehicle selection',
        'Premium concierge support',
        'Exclusive event invitations'
      ]
    },
    {
      name: 'Platinum',
      price: 999,
      features: [
        'Full fleet access including exotic cars',
        'Unlimited bookings',
        'Priority booking window',
        'Dedicated concierge',
        'VIP event access',
        'Door-to-door delivery'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16">Choose Your Experience</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`p-8 rounded-lg border ${
                selectedTier === tier.name 
                  ? 'border-white' 
                  : 'border-gray-800'
              } hover:border-white transition-all`}
              onClick={() => setSelectedTier(tier.name)}
            >
              <h2 className="text-2xl font-bold mb-4">{tier.name}</h2>
              <p className="text-4xl font-bold mb-8">
                ${tier.price}
                <span className="text-lg font-normal text-gray-400">/month</span>
              </p>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={`/join/personal?tier=${tier.name.toLowerCase()}`}
                className="block w-full py-3 px-4 text-center rounded-lg bg-white text-black hover:bg-gray-100 transition-colors"
              >
                Select {tier.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}