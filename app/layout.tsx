import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TrayReturn - Smart Tray Return System | Earn Rewards',
  description: 'Return trays easily and earn rewards at local cafes. Simple, clean, and rewarding tray return system for cafeterias and food courts.',
  keywords: 'tray return, cafeteria rewards, smart trolley, food court, student discounts, employee benefits',
  authors: [{ name: 'TrayReturn Team' }],
  openGraph: {
    title: 'TrayReturn - Smart Tray Return System',
    description: 'Return trays easily and earn rewards at local cafes. Simple, clean, and rewarding tray return system.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrayReturn - Smart Tray Return System',
    description: 'Return trays easily and earn rewards at local cafes. Simple, clean, and rewarding tray return system.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
