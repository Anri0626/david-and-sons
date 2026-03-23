'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/',        label: 'HOME' },
  { href: '/about',   label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-bebas text-xl md:text-2xl tracking-widest text-[#0a0a0a] hover:text-black/60 transition-colors"
        >
          DAVID AND SON&apos;S
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-inter text-xs tracking-widest transition-colors ${
                pathname === link.href
                  ? 'text-[#0a0a0a]'
                  : 'text-black/40 hover:text-[#0a0a0a]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setOpen(!open)}
          aria-label="メニューを開く"
        >
          <span className={`block h-px w-6 bg-[#0a0a0a] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-px w-6 bg-[#0a0a0a] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-[#0a0a0a] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${open ? 'max-h-64 border-t border-black/10' : 'max-h-0'}`}>
        <nav className="flex flex-col px-6 py-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-inter text-sm tracking-widest transition-colors ${
                pathname === link.href
                  ? 'text-[#0a0a0a]'
                  : 'text-black/40 hover:text-[#0a0a0a]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
