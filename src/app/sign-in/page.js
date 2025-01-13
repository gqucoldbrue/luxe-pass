'use client'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { supabase } from '@/lib/supabase'; // Ensure this path is correct
import Link from 'next/link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error('Error signing in: ' + error.message);
    } else {
      toast.success('Signed in successfully!');
      // Redirect or perform additional actions
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <form onSubmit={handleSignIn} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2 mb-4 w-full"
        />
        <button type="submit" disabled={isLoading} className="bg-blue-500 text-white p-2 w-full">
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
        <p className="mt-4">
          Don't have an account? <Link href="/sign-up" className="text-blue-500">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}