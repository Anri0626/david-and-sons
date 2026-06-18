import type { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'CONTACT',
  description: "DAVID AND SON'S 合同会社へのお問い合わせ。中古車買取・販売・廃車買取に関するご相談をお受けしています。",
}

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[#f5f5f7] pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="font-noto text-xs text-[#6e6e73] tracking-widest uppercase mb-4">Contact</p>
          <h1 className="font-bebas text-5xl md:text-7xl tracking-widest text-[#1d1d1f] leading-none">お問い合わせ</h1>
          <p className="font-noto text-sm text-[#6e6e73] mt-4">査定・販売・廃車に関するご相談はこちら</p>
        </div>
      </div>

      {/* Form + info */}
      <div className="bg-white py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Info sidebar */}
          <div className="md:col-span-1">
            <div className="space-y-8">
              <div>
                <p className="font-noto text-xs text-[#6e6e73] tracking-widest uppercase mb-3">携帯電話</p>
                <a href="tel:09057818564" className="font-bebas text-2xl tracking-widest text-[#1d1d1f] hover:text-[#6e6e73] transition-colors">
                  090-5781-8564
                </a>
              </div>
              <div className="border-t border-[#d2d2d7] pt-8">
                <p className="font-noto text-xs text-[#6e6e73] tracking-widest uppercase mb-3">TEL / FAX</p>
                <a href="tel:0433085783" className="font-bebas text-2xl tracking-widest text-[#1d1d1f] hover:text-[#6e6e73] transition-colors">
                  043-308-5783
                </a>
              </div>
              <div className="border-t border-[#d2d2d7] pt-8">
                <p className="font-noto text-xs text-[#6e6e73] tracking-widest uppercase mb-3">所在地</p>
                <p className="font-noto text-sm text-[#1d1d1f] leading-relaxed">千葉県佐倉市高崎944-1</p>
              </div>
              <div className="border-t border-[#d2d2d7] pt-8">
                <p className="font-noto text-xs text-[#6e6e73] tracking-widest uppercase mb-3">営業時間</p>
                <p className="font-noto text-sm text-[#1d1d1f]">月〜土 9:00〜17:00</p>
                <p className="font-noto text-xs text-[#6e6e73] mt-1">年末年始除く</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
