'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/',        label: 'ホーム' },
  { href: '/about',   label: '会社概要' },
  { href: '/contact', label: 'お問い合わせ' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="font-bebas text-lg tracking-widest text-[#1d1d1f] hover:text-[#6e6e73] transition-colors">
          DAVID AND SON&apos;S
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-noto text-sm transition-colors ${
                pathname === link.href
                  ? 'text-[#1d1d1f]'
                  : 'text-[#6e6e73] hover:text-[#1d1d1f]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-noto text-sm bg-[#1d1d1f] text-white px-5 py-2 hover:bg-[#3d3d3f] transition-colors"
          >
            無料相談
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setOpen(!open)}
          aria-label="メニューを開く"
        >
          <span className={`block h-px w-5 bg-[#1d1d1f] transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block h-px w-5 bg-[#1d1d1f] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-5 bg-[#1d1d1f] transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${open ? 'max-h-72 border-t border-[#d2d2d7]' : 'max-h-0'}`}>
        <nav className="flex flex-col px-6 py-6 gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-noto text-sm text-[#1d1d1f]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="font-noto text-sm bg-[#1d1d1f] text-white px-5 py-3 text-center"
          >
            無料相談
          </Link>
        </nav>
      </div>
    </header>
  )
}
