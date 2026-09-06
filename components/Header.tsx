'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa'
import CommandPalette from '@/components/CommandPalette'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#focus', label: 'Exploring' },
    { href: '#how-i-think', label: 'How I think' },
    { href: '#impact', label: 'Impact' },
    { href: '#architecture', label: 'Architecture' },
    { href: '#leverage', label: 'Leverage' },
    { href: '#engage', label: 'Engage' },
  ]

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-black/10 bg-[#f7f7f3]/90 backdrop-blur-xl'
          : 'border-transparent bg-[#f7f7f3]/80 backdrop-blur-md'
      }`}
    >
      <nav className="page-shell py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 font-semibold tracking-[-0.02em] text-[#171713]"
          >
            <Image
              src="/images/profile-photo.jpg"
              alt="Rajendra Ladkat"
              width={36}
              height={36}
              priority
              className="h-9 w-9 rounded-full object-cover"
            />
            <span>Rajendra Ladkat</span>
          </Link>

          <div className="flex items-center gap-2 lg:gap-6">
            <div className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#5b5b52] transition-colors hover:text-[#171713]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <CommandPalette />
            <a className="button button-primary hidden min-h-10 px-5 lg:inline-flex" href="#contact">
              Contact <FaArrowRight aria-hidden="true" />
            </a>

            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-black/15 text-[#171713] lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-4 space-y-1 border-t border-black/10 pb-3 pt-4 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-2 py-3 font-medium text-[#44443d] hover:bg-black/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="mt-3 flex items-center gap-2 rounded-lg px-2 py-3 font-semibold text-[#4f6b45]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
