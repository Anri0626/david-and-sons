import type { Metadata } from 'next'
import './globals.css'
import { bebasNeue, inter, notoSansJP } from '@/lib/fonts'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: "DAVID AND SON'S 合同会社 | 中古車買取・販売",
    template: "%s — DAVID AND SON'S 合同会社",
  },
  description:
    '千葉県佐倉市の中古車買取・販売・廃車買取専門店。毎日9:00〜17:00営業。お気軽にお問い合わせください。',
  openGraph: {
    title: "DAVID AND SON'S 合同会社",
    description: '千葉県佐倉市の中古車買取・販売・廃車買取。毎日9:00〜17:00営業。',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ja"
      className={`${bebasNeue.variable} ${inter.variable} ${notoSansJP.variable}`}
    >
      <body className="bg-white text-[#0a0a0a] font-inter antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
