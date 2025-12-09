import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rajendra Ladkat | DevOps & Cloud Consultant',
  description: 'Senior Infrastructure Consultant | DevSecOps Architect | Cloud Automation Specialist with 10+ years of experience helping startups and enterprises modernize infrastructure, implement DevSecOps, and scale securely in the cloud.',
  keywords: ['DevOps', 'Cloud Infrastructure', 'DevSecOps', 'AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
  authors: [{ name: 'Rajendra Ladkat' }],
  openGraph: {
    title: 'Rajendra Ladkat | DevOps & Cloud Consultant',
    description: 'Senior Infrastructure Consultant | DevSecOps Architect | Cloud Automation Specialist',
    type: 'website',
    url: 'https://rajendraladkat1919.github.io',
  },
  twitter: {
    card: 'summary_large_image',
  },
  other: {
    'X-DNS-Prefetch-Control': 'on',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https://github-readme-stats.vercel.app https://streak-stats.demolab.com",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

