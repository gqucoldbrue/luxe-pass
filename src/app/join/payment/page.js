// src/app/join/payment/page.js
'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/app/components/Navigation';
import SignUpProgress from '@/app/components/SignUpProgress';
import { validatePaymentDetails } from '@/utils/payment'; // Import the utility function

export default function PaymentPage() {
  const router = useRouter();
  const [paymentData, setPaymentData] = useState({
    amount: 0, // Amount to charge
    cardDetails: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    },
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({});

  useEffect(() => {
    // Retrieve booking info from session storage
    const storedBookingInfo = sessionStorage.getItem('bookingInfo');
    if (storedBookingInfo) {
      setBookingInfo(JSON.parse(storedBookingInfo));
      // Set the amount based on booking details
      setPaymentData(prev => ({
        ...prev,
        amount: calculateAmount(JSON.parse(storedBookingInfo)), // Implement this function based on your logic
      }));
    } else {
      // Redirect if no booking info is found
      router.push('/join/personal');
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({
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

    // Validate payment details using the imported function
    if (!validatePaymentDetails(paymentData.cardDetails)) {
      setErrors(prev => ({ ...prev, payment: 'Invalid payment details.' }));
      setIsSubmitting(false);
      return;
    }

    try {
      // Here you would typically call your payment processing API
      // await processPayment(paymentData);

      // Clear session storage after successful payment
      sessionStorage.clear();
      
      // Redirect to confirmation page
      router.push('/payment/confirmation');
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        submit: 'There was an error processing your payment. Please try again.',
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
          <SignUpProgress currentStep={4} />
          <div className="max-w-3xl mx-auto">
            <div className="luxury-blur p-12 rounded-lg">
              <h1 className="text-3xl font-light mb-8 gradient-text">Payment</h1>
              {errors.submit && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg mb-6">
                  {errors.submit}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="block text-sm text-gray-300">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={paymentData.cardDetails.cardNumber}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 luxury-transition rounded"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-300">Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={paymentData.cardDetails.expiryDate}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 luxury-transition rounded"
                      required
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-300">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={paymentData.cardDetails.cvv}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 luxury-transition rounded"
                      required
                    />
                  </div>
                </div>
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 bg-white text-black hover:bg-gray-100 luxury-transition rounded flex items-center justify-center
                      ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Processing...' : 'Complete Payment'}
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

// Helper functions
const calculateAmount = (bookingInfo) => {
  // Implement your logic to calculate the amount based on bookingInfo
  return 100; // Example amount
};