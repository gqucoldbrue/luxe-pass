'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';

const steps = [
  'personalInfo',
  'verification',
  'financialCheck',
  'membershipSelection',
  'payment'
];

export default function JoinProcess() {
  const [currentStep, setCurrentStep] = useState('personalInfo');
  
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          {/* Progress Indicator */}
          <div className="flex justify-between mb-12">
            {steps.map((step, index) => (
              <div 
                key={step}
                className={`flex items-center ${
                  steps.indexOf(currentStep) >= index ? 'text-white' : 'text-gray-500'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  steps.indexOf(currentStep) >= index ? 'bg-white text-black' : 'bg-gray-800'
                }`}>
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-full h-0.5 ${
                    steps.indexOf(currentStep) > index ? 'bg-white' : 'bg-gray-800'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          {currentStep === 'personalInfo' && (
            <PersonalInfoForm onNext={() => setCurrentStep('verification')} />
          )}
          {currentStep === 'verification' && (
            <VerificationForm onNext={() => setCurrentStep('financialCheck')} />
          )}
          {currentStep === 'financialCheck' && (
            <FinancialCheckForm onNext={() => setCurrentStep('membershipSelection')} />
          )}
          {currentStep === 'membershipSelection' && (
            <MembershipSelection onNext={() => setCurrentStep('payment')} />
          )}
          {currentStep === 'payment' && (
            <PaymentForm />
          )}
        </motion.div>
      </div>
    </div>
  );
}

// Form Components
function PersonalInfoForm({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="luxury-blur p-8"
    >
      <h2 className="text-2xl font-light mb-6">Personal Information</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Full Legal Name</label>
          <input
            type="text"
            className="w-full bg-black/50 border border-white/10 p-3"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Date of Birth</label>
          <input
            type="date"
            className="w-full bg-black/50 border border-white/10 p-3"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
          <input
            type="tel"
            className="w-full bg-black/50 border border-white/10 p-3"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Email</label>
          <input
            type="email"
            className="w-full bg-black/50 border border-white/10 p-3"
            required
          />
        </div>
        <button
          onClick={onNext}
          className="w-full bg-white text-black py-3 hover:bg-gray-100 transition-colors"
        >
          CONTINUE
        </button>
      </form>
    </motion.div>
  );
}