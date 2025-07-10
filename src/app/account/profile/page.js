'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { supabase } from '@/lib/supabase'; // Ensure this path is correct
// import { useRouter } from 'next/navigation'; // Optional for redirect

export default function Profile() {
  const [profile, setProfile] = useState({
    full_name: '',
    email: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false); // for form submit
  const [isFetching, setIsFetching] = useState(true); // for initial load
  const [user, setUser] = useState(null);
  // const router = useRouter(); // Optional if you want redirect

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      setIsFetching(true);

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) throw userError || new Error('No user found');

      setUser(user);

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      if (data) setProfile(data);
    } catch (error) {
      toast.error('Error loading profile');
      console.error('Error loading profile:', error);
    } finally {
      setIsFetching(false);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          full_name: profile.full_name,
          email: profile.email,
          phone: profile.phone,
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;
      toast.success('Profile updated successfully');

      // Optional: redirect
      // router.push('/dashboard');
    } catch (error) {
      toast.error('Error updating profile');
      console.error('Error updating profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto luxury-blur p-8"
        >
          <h1 className="text-3xl font-light mb-8">Profile</h1>

          {isFetching ? (
            <p className="text-gray-400">Loading profile...</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="full_name"
                  className="w-full bg-black/50 border border-white/10 p-3"
                  value={profile.full_name || ''}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-black/50 border border-white/10 p-3"
                  value={profile.email || ''}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full bg-black/50 border border-white/10 p-3"
                  value={profile.phone || ''}
                  onChange={handleChange}
                />
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-black py-3 hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                {isLoading ? 'SAVING...' : 'SAVE CHANGES'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}