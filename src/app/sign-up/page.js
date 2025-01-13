'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/app/components/Navigation';

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      // Here you would typically:
      // 1. Send credentials to your auth API
      // 2. Create the user account
      // 3. Log the user in
      
      // Store basic info in session storage
      sessionStorage.setItem('accountInfo', JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email
      }));
      
      // Proceed to personal information collection
      router.push('/join/personal');
    } catch (error) {
      console.error('Sign up error:', error);
      alert('There was an error creating your account. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      <section className="relative min-h-screen pt-20">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-4xl font-light mb-6 gradient-text text-center">
              Experience Automotive Excellence
            </h1>
            <p className="text-xl text-gray-300 mb-12 text-center">
              Join LUXEPASS
            </p>

            <div className="luxury-blur p-12 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-300">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 luxury-transition rounded"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-300">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 luxury-transition rounded"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-gray-300">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 luxury-transition rounded"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-gray-300">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 luxury-transition rounded"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-gray-300">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 luxury-transition rounded"
                    required
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-white text-black hover:bg-gray-100 luxury-transition rounded"
                  >
                    Create Account
                  </button>
                </div>

                <div className="pt-6">
                  <p className="text-center text-sm text-gray-400">
                    Already have an account?{' '}
                    <Link href="/sign-in" className="text-white hover:text-gray-300 luxury-transition">
                      Sign In
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}