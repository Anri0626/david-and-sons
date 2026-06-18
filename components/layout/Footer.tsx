import Link from 'next/link'

const navLinks = [
  { href: '/',        label: 'ホーム' },
  { href: '/about',   label: '会社概要' },
  { href: '/contact', label: 'お問い合わせ' },
]

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Brand */}
          <div>
            <p className="font-bebas text-xl tracking-widest text-[#1d1d1f] mb-3">
              DAVID AND SON&apos;S
            </p>
            <p className="font-noto text-xs text-[#6e6e73] leading-relaxed">
              DAVID AND SON&apos;S 合同会社<br />
              中古車買取・販売 / 廃車買取
            </p>
          </div>

          {/* Col 2: Info */}
          <div>
            <p className="font-noto text-xs font-bold text-[#1d1d1f] tracking-wider mb-4">所在地・連絡先</p>
            <div className="space-y-2">
              <p className="font-noto text-xs text-[#6e6e73]">千葉県佐倉市高崎944-1</p>
              <a href="tel:09057818564" className="block font-noto text-xs text-[#1d1d1f] hover:text-[#6e6e73] transition-colors">
                携帯：090-5781-8564
              </a>
              <a href="tel:0433085783" className="block font-noto text-xs text-[#1d1d1f] hover:text-[#6e6e73] transition-colors">
                TEL/FAX：043-308-5783
              </a>
              <p className="font-noto text-xs text-[#6e6e73]">月〜土 9:00〜17:00（年末年始除く）</p>
            </div>
          </div>

          {/* Col 3: Nav */}
          <div>
            <p className="font-noto text-xs font-bold text-[#1d1d1f] tracking-wider mb-4">メニュー</p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  className="font-noto text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#d2d2d7]">
          <p className="font-noto text-xs text-[#6e6e73]">
            © {new Date().getFullYear()} DAVID AND SON&apos;S 合同会社. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
