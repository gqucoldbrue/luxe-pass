// components/SignUpProgress.js
import React from 'react';

export default function SignUpProgress({ currentStep }) {
  const steps = [
    { id: 1, name: 'Account Creation' },
    { id: 2, name: 'Personal Information' },
    { id: 3, name: 'Financial Verification' }
  ];

  return (
    <div className="mb-12">
      <div className="flex justify-center items-center space-x-4">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                ${currentStep >= step.id ? 'border-white bg-white text-black' : 'border-gray-500 text-gray-500'}`}>
                {step.id}
              </div>
              <span className={`text-sm mt-2 ${currentStep >= step.id ? 'text-white' : 'text-gray-500'}`}>
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-20 h-0.5 ${currentStep > step.id ? 'bg-white' : 'bg-gray-500'}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}