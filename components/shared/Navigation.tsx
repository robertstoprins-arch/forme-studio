'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Library', href: '/library' },
  { label: 'Materials', href: '/materials' },
  { label: 'Studio', href: '/studio' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f5f0]/90 backdrop-blur-sm border-b border-[#e8e3dc]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-[#1a1a1a] text-xl font-[200] tracking-[-0.02em] hover:opacity-70 transition-opacity">
          forme
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#7a7570] text-sm font-[300] tracking-wide hover:text-[#1a1a1a] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/start-project"
            className="hidden md:inline-flex items-center px-4 py-2 text-xs font-[300] tracking-[0.1em] uppercase text-[#f8f5f0] bg-[#1a1a1a] hover:bg-[#b5922a] transition-colors"
          >
            Start a Project
          </Link>
          <button
            className="md:hidden text-[#1a1a1a]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#f8f5f0] border-t border-[#e8e3dc] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[#1a1a1a] text-base font-[300] tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#e8e3dc]">
            <Link
              href="/start-project"
              onClick={() => setOpen(false)}
              className="inline-flex items-center px-4 py-3 text-xs font-[300] tracking-[0.1em] uppercase text-[#f8f5f0] bg-[#1a1a1a] w-full justify-center"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
