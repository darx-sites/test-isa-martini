import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Isa Martini | Nutrition Expert & Author',
  description: 'Transform your health with expert nutrition guidance from Isa Martini. Discover books, resources, and personalized nutrition advice.',
  keywords: 'nutrition, health, wellness, weight loss, weight gain, nutrition books, Isa Martini',
  authors: [{ name: 'Isa Martini' }],
  openGraph: {
    title: 'Isa Martini | Nutrition Expert & Author',
    description: 'Transform your health with expert nutrition guidance from Isa Martini.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isa Martini | Nutrition Expert & Author',
    description: 'Transform your health with expert nutrition guidance from Isa Martini.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}