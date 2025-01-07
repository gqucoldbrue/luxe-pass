'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const menuItems = [
    { title: 'EXPERIENCES', href: '/experiences' },
    { title: 'MEMBERSHIP', href: '/membership' },
    { title: 'CONCIERGE', href: '/concierge' },
    { title: 'ABOUT', href: '/about' },
  ];

  return (
    <nav className="fixed w-full z-50 luxury-blur">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-light">
            LUXEPASS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="hover:text-gray-300 luxury-transition"
              >
                {item.title}
              </Link>
            ))}
            
            {/* Account Menu */}
            <div className="relative">
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
            className="md:hidden"
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
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block py-2 hover:text-gray-300"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}