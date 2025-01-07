import Navigation from './components/Navigation'
import './globals.css'

export const metadata = {
  title: 'Luxepass - Premium Experiences',
  description: 'Your Luxury Portal to Perfectly Tailored Experiences',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navigation />
        {children}
      </body>
    </html>
  )
}