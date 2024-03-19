import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'

const jb = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Liam Powers Portfolio',
  description: 'Liam Powers | Personal Portfolio | Software Engineer, Musician, Student at Northwestern University | Created with React/Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PRIVATE_GA_TRACKING_ID} />
      <body className={jb.className}>{children}</body>
    </html>
  )
}
