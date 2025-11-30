import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Test Isa Martini - Professional Solutions',
  description: 'Discover innovative solutions tailored to your needs. Transform your business with our expert services and cutting-edge technology.',
  keywords: 'business solutions, professional services, innovation, technology',
  authors: [{ name: 'Test Isa Martini' }],
  openGraph: {
    title: 'Test Isa Martini - Professional Solutions',
    description: 'Discover innovative solutions tailored to your needs.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Isa Martini - Professional Solutions',
    description: 'Discover innovative solutions tailored to your needs.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}