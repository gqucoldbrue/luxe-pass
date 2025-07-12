// src/app/join/verification/page.js
'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/app/components/Navigation';
import SignUpProgress import SignUpProgress from '../components/SignUpProgress';

export default function VerificationPage() {
  const router = useRouter();
  const [verificationData, setVerificationData] = useState({
    verificationCode: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if payment was successful and retrieve necessary data
    const paymentStatus = sessionStorage.getItem('paymentStatus');
    if (paymentStatus !== 'success') {
      // Redirect if payment was not successful
      router.push('/join/payment');
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVerificationData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when field is modified
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    // Validate verification code (implement your validation logic)
    if (!verificationData.verificationCode) {
      setErrors(prev => ({ ...prev, verification: 'Verification code is required.' }));
      setIsSubmitting(false);
      return;
    }

    try {
      // Here you would typically call your verification API
      // await verifyCode(verificationData.verificationCode);

      // Clear session storage after successful verification
      sessionStorage.clear();
      
      // Redirect to the final confirmation page
      router.push('/join/confirmation');
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        submit: 'There was an error verifying your code. Please try again.',
      }));
    } finally {
      setIsSubmitting(false);
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
          <SignUpProgress currentStep={5} />
          <div className="max-w-3xl mx-auto">
            <div className="luxury-blur p-12 rounded-lg">
              <h1 className="text-3xl font-light mb-8 gradient-text">Verification</h1>
              {errors.submit && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg mb-6">
                  {errors.submit}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="block text-sm text-gray-300">Verification Code</label>
                  <input
                    type="text"
                    name="verificationCode"
                    value={verificationData.verificationCode}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 luxury-transition rounded"
                    required
                  />
                </div>
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 bg-white text-black hover:bg-gray-100 luxury-transition rounded flex items-center justify-center
                      ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Verifying...' : 'Verify Code'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}