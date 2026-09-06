import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Rajendra Ladkat | Platform Engineering — Staff, FDE, Customer Solutions',
    template: '%s · Rajendra Ladkat | Platform Engineering — Staff, FDE, Customer Solutions',
  },
  description:
    'Platform Engineer doing lead platform work across Staff-shaped platform engineering, Forward Deployed Engineering and Customer Solutions. 11+ years building enterprise cloud platforms, production AI infrastructure, and skill catalogs across AWS, GCP and Tencent Cloud.',
  keywords: [
    'Staff Platform Engineer',
    'Forward Deployed Engineer',
    'FDE',
    'Customer Solutions Engineer',
    'Platform Engineering',
    'Platform Engineer',
    'Internal Developer Platform',
    'AI Infrastructure',
    'AWS',
    'GCP',
    'Tencent Cloud',
    'Kubernetes',
    'Terraform',
    'FinOps',
  ],
  authors: [{ name: 'Rajendra Ladkat' }],
  openGraph: {
    title: 'Rajendra Ladkat | Platform Engineering — Staff, FDE, Customer Solutions',
    description: 'Building cloud platforms developers love—and businesses trust.',
    type: 'website',
    url: 'https://rajendraladkat1919.github.io',
  },
  metadataBase: new URL('https://rajendraladkat1919.github.io'),
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

