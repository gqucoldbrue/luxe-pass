'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useParams } from 'next/navigation';

const tierDetails = {
  silver: {
    name: 'Silver',
    price: '299',
    monthlyAllocation: 2,
    vehicleTypes: ['Sports Cars', 'Luxury Sedans'],
    maxDaysPerMonth: 4,
    availableLocations: ['Downtown', 'Marina District'],
    features: [
      'Access to Select Vehicles',
      '2 Experiences per Month',
      'Basic Concierge Support',
      'Weekend Availability',
      '48-Hour Advance Booking',
      'Basic Insurance Coverage'
    ],
    availableVehicles: [
      { name: 'BMW M3', availability: '80%' },
      { name: 'Mercedes-AMG C63', availability: '75%' },
      { name: 'Porsche Cayman', availability: '70%' }
    ]
  },
  gold: {
    name: 'Gold',
    price: '599',
    monthlyAllocation: 4,
    vehicleTypes: ['Sports Cars', 'Luxury Sedans', 'Exotic Cars'],
    maxDaysPerMonth: 8,
    availableLocations: ['Downtown', 'Marina District', 'Airport', 'Beverly Hills'],
    features: [
      'Extended Vehicle Selection',
      '4 Experiences per Month',
      'Priority Concierge',
      'Weekday & Weekend Access',
      '24-Hour Advance Booking',
      'Premium Insurance Coverage'
    ],
    availableVehicles: [
      { name: 'Porsche 911', availability: '85%' },
      { name: 'Audi R8', availability: '80%' },
      { name: 'Mercedes-AMG GT', availability: '75%' }
    ]
  },
  platinum: {
    name: 'Platinum',
    price: '999',
    monthlyAllocation: 'Unlimited',
    vehicleTypes: ['Sports Cars', 'Luxury Sedans', 'Exotic Cars', 'Limited Editions'],
    maxDaysPerMonth: 'Unlimited',
    availableLocations: ['All Locations', 'Custom Pickup Available'],
    features: [
      'Full Fleet Access',
      'Unlimited Experiences',
      'Dedicated Concierge',
      'Priority Booking & Events',
      'Instant Booking',
      'Comprehensive Insurance',
      'VIP Events Access'
    ],
    availableVehicles: [
      { name: 'Ferrari F8 Tributo', availability: '90%' },
      { name: 'Lamborghini Huracán', availability: '85%' },
      { name: 'McLaren 720S', availability: '80%' }
    ]
  }
};

export default function MembershipTier() {
  const params = useParams();
  const tier = tierDetails[params.tier.toLowerCase()];

  if (!tier) {
    return (
      <div className="min-h-screen bg-black pt-24">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-2xl mb-4">Membership tier not found</h1>
          <Link href="/membership" className="text-gray-400 hover:text-white">
            Return to Membership Options
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-6 py-12">
        <Link 
          href="/membership"
          className="flex items-center space-x-2 text-gray-400 hover:text-white mb-8"
        >
          <ChevronLeft size={20} />
          <span>Back to Membership Options</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl font-light mb-4 gradient-text">{tier.name} Membership</h1>
            <p className="text-3xl mb-4">${tier.price}<span className="text-sm text-gray-400">/month</span></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="luxury-blur p-8">
              <h2 className="text-2xl font-light mb-6">Membership Benefits</h2>
              <ul className="space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="luxury-blur p-8">
              <h2 className="text-2xl font-light mb-6">Access Details</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">Monthly Allocation</p>
                  <p className="text-xl">{tier.monthlyAllocation} Experiences</p>
                </div>
                <div>
                  <p className="text-gray-400">Vehicle Categories</p>
                  <p className="text-xl">{tier.vehicleTypes.join(', ')}</p>
                </div>
                <div>
                  <p className="text-gray-400">Available Locations</p>
                  <p className="text-xl">{tier.availableLocations.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="luxury-blur p-8 mb-12">
            <h2 className="text-2xl font-light mb-6">Available Vehicles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tier.availableVehicles.map((vehicle) => (
                <div key={vehicle.name} className="text-center p-4 border border-white/10">
                  <p className="text-xl mb-2">{vehicle.name}</p>
                  <p className="text-gray-400">Availability: {vehicle.availability}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button className="bg-white text-black px-12 py-4 text-lg hover:bg-gray-100 transition-colors">
              JOIN {tier.name.toUpperCase()} MEMBERSHIP
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}