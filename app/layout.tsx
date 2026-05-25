import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rivexis - Automate Your Business, Not Your Budget',
  description: 'Get a custom AI system that eliminates repetitive work, qualifies leads 24/7, and scales your operations. Free 14-day trial.',
  openGraph: {
    title: 'Rivexis - Automate Your Business, Not Your Budget',
    description: 'Custom AI automation for your business',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-black to-[#0A1B3F]">
        {children}
      </body>
    </html>
  )
}
