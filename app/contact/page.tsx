import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'CONTACT',
  description: 'DAVID AND SON\'S 合同会社へのお問い合わせはこちら。中古車買取・販売・廃車買取に関するご相談をお受けしています。',
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-40 px-8 md:px-16 max-w-2xl mx-auto">
      <SectionHeading en="CONTACT" ja="お問い合わせ" />

      <div className="border-t border-white/20 pt-8">
        <p className="font-noto text-sm text-white/50 leading-relaxed">
          お電話でも受け付けております。<br />
          <a href="tel:09057818564" className="text-white hover:text-white/70 transition-colors font-bold">
            090-5781-8564
          </a>
          <span className="ml-2 text-white/30 text-xs">（毎日 9:00〜17:00）</span>
        </p>
      </div>

      <ContactForm />
    </div>
  )
}
