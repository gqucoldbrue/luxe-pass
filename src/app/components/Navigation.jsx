'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'EXPERIENCES', href: '/experiences' },
  { name: 'MEMBERSHIP', href: '/membership' },
  { name: 'CONCIERGE', href: '/concierge' },
  { name: 'ABOUT', href: '/about' },
  { name: 'RESERVE', href: '/reservations' },
  { name: 'SIGN IN', href: '/sign-in' }
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-900 to-zinc-800 border-t border-zinc-700/50 backdrop-blur-sm z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-light z-50">
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="relative z-50 block"
              >
                <motion.div
                  className="px-4 py-2 text-sm font-medium uppercase tracking-wide hover:text-gray-300 cursor-pointer"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #FFFFFF 0%, #A1A1AA 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 2px 2px rgba(0,0,0,0.5)',
                      pointerEvents: 'auto'
                    }}
                  >
                    {item.name}
                  </span>
                </motion.div>
              </Link>
            ))}

            {/* Account Menu */}
            <div className="relative z-50">
              <button
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className="flex items-center space-x-2 hover:text-gray-300 luxury-transition"
              >
                <User size={20} />
                <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {isAccountOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 luxury-blur py-2"
                  >
                    <Link href="/account/profile" className="block px-4 py-2 hover:bg-white/10">
                      Profile
                    </Link>
                    <Link href="/account/settings" className="block px-4 py-2 hover:bg-white/10">
                      Settings
                    </Link>
                    <button className="block w-full text-left px-4 py-2 hover:bg-white/10">
                      Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden luxury-blur"
          >
            <div className="container mx-auto px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 hover:text-gray-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}