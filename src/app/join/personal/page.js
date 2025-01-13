// src/app/join/personal/page.js
'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/app/components/Navigation';
import SignUpProgress from '@/components/SignUpProgress';
import { validatePhone } from '@/utils/validation';
import 'react-datepicker/dist/react-datepicker.css';

export default function PersonalInfoForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    province: '',
    country: '',
    postalOrZipCode: '', // Unified field for postal/ZIP code
    driverLicense: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    // Validate phone
    const phoneErrors = validatePhone(formData.phone);
    if (phoneErrors.length > 0) {
      setErrors(prev => ({ ...prev, phone: phoneErrors }));
      setIsSubmitting(false);
      return;
    }

    try {
      // Store in session storage
      sessionStorage.setItem('personalInfo', JSON.stringify(formData));
      
      // Here you would typically make an API call to save the data
      // await savePersonalInfo(formData);
      
      // Proceed to financial verification
      router.push('/join/financial');
    } catch (error) {
      setErrors(prev => ({ 
        ...prev, 
        submit: 'There was an error saving your information. Please try again.' 
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
    // Clear error when field is modified
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
          <SignUpProgress currentStep={2} />
          
          <div className="max-w-3xl mx-auto">
            <div className="luxury-blur p-12 rounded-lg">
              <h1 className="text-3xl font-light mb-8 gradient-text">Personal Information</h1>
              
              {errors.submit && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg mb-6">
                  {errors.submit}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-300">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 luxury-transition rounded"
                      required
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm">{errors.phone[0]}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-300">Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 luxury-transition rounded"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-gray-300">Driver's License Number</label>
                  <input
                    type="text"
                    name="driverLicense"
                    value={formData.driverLicense}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 luxury-transition rounded"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-gray-300">Street Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 luxury-transition rounded"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-300">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 luxury-transition rounded"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-300">Province</label>
                    <input
                      type="text"
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 luxury-transition rounded"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm text-gray-300">Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 luxury-transition rounded"
                      required
                    >
                      <option value="">Select your country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      {/* Add more countries as needed */}
                    </select>
                  </div>

                  {formData.country === 'US' && (
                    <div className="space-y-2">
                      <label className="block text-sm text-gray-300">ZIP Code</label>
                      <input
                        type="text"
                        name="postalOrZipCode"
                        value={formData.postalOrZipCode}
                        onChange={handleChange}
                        className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 luxury-transition rounded"
                        required
                      />
                    </div>
                  )}

                  {formData.country === 'CA' && (
                    <div className="space-y-2">
                      <label className="block text-sm text-gray-300">Postal Code</label>
                      <input
                        type="text"
                        name="postalOrZipCode"
                        value={formData.postalOrZipCode}
                        onChange={handleChange}
                        className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 luxury-transition rounded"
                        required
                      />
                    </div>
                  )}
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 bg-white text-black hover:bg-gray-100 luxury-transition rounded flex items-center justify-center
                      ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Processing...' : 'Continue to Verification'}
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