'use client'
import Navigation from './components/Navigation'
import './globals.css'
import { Toaster } from 'react-hot-toast'

// Remove metadata export as it's not compatible with 'use client'
// Create a separate metadata.js file if needed

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-black text-white">
        <Navigation />
        <main>
          {children}
        </main>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}