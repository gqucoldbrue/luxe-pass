'use client'
import Navigation from './components/Navigation'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'; // Import SessionProvider
import { Toaster } from "@/app/components/ui/toaster";
// Remove metadata export as it's not compatible with 'use client'
// Create a separate metadata.js file if needed

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <SessionProvider> {/* Wrap children with SessionProvider */}
          <Navigation />
          <main>
            {children}
          </main>
          <Toaster position="top-right" />
        </SessionProvider>
      </body>
    </html>
  );
}