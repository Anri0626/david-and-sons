import Link from 'next/link'

const navLinks = [
  { href: '/',        label: 'HOME' },
  { href: '/about',   label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Col 1: Brand */}
          <div>
            <p className="font-bebas text-2xl tracking-widest text-white mb-3">
              DAVID AND SON&apos;S
            </p>
            <p className="font-noto text-xs text-white/50 leading-relaxed">
              中古車の買取・販売<br />
              廃車買取
            </p>
          </div>

          {/* Col 2: Info */}
          <div className="space-y-3">
            <p className="font-inter text-xs tracking-widest text-white/30 uppercase mb-4">INFO</p>
            <p className="font-noto text-sm text-white/60">千葉県佐倉市高崎944-1</p>
            <a
              href="tel:09057818564"
              className="block font-noto text-sm text-white/60 hover:text-white transition-colors"
            >
              090-5781-8564
            </a>
            <p className="font-noto text-sm text-white/60">毎日 9:00〜17:00</p>
          </div>

          {/* Col 3: Nav */}
          <div>
            <p className="font-inter text-xs tracking-widest text-white/30 uppercase mb-4">MENU</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-inter text-sm tracking-widest text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="font-inter text-xs text-white/20 tracking-widest">
            © {new Date().getFullYear()} DAVID AND SON&apos;S 合同会社. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}
