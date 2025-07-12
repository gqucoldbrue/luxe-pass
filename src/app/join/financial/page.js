// src/app/join/financial/page.js
'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/app/components/Navigation';
import SignUpProgress from '@/app/components/SignUpProgress';

export default function FinancialVerification() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    income: '',
    employment: '',
    creditScore: '',
    bankAccount: '',
    routingNumber: '',
    accountNumber: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({});

  useEffect(() => {
    // Retrieve personal info from session storage
    const storedPersonalInfo = sessionStorage.getItem('personalInfo');
    if (storedPersonalInfo) {
      setPersonalInfo(JSON.parse(storedPersonalInfo));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Combine personal info with financial data
      const completeApplication = {
        ...personalInfo,
        ...formData
      };

      // Here you would typically submit the complete application to your API
      // await submitApplication(completeApplication);

      // Clear session storage
      sessionStorage.clear();
      
      // Redirect to MemberInterfaces component
      router.push('/src/app/MemberInterfaces');
    } catch (error) {
      setErrors(prev => ({ 
        ...prev, 
        submit: 'There was an error processing your application. Please try again.' 
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <section className="relative min-h-screen pt-20">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>
        <div className="container mx-auto px-6 relative z-10 py-20">
          <SignUpProgress currentStep={3} />
          <div className="max-w-3xl mx-auto">
            <div className="luxury-blur p-12 rounded-lg">
              <h1 className="text-3xl font-light mb-8 gradient-text">Financial Verification</h1>
              {errors.submit && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg mb-6">
                  {errors.submit}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Financial fields here */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}