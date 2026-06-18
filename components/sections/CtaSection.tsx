import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function CtaSection() {
  return (
    <section className="relative py-32">
      {/* Background image */}
      <Image
        src="/container.jpg"
        alt=""
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <p className="font-noto text-xs text-white/40 tracking-widest uppercase mb-4">お問い合わせ</p>
            <h2 className="font-bebas text-4xl md:text-5xl tracking-widest text-white leading-tight">
              まずはお気軽に<br />ご相談ください
            </h2>
            <p className="font-noto text-sm text-white/60 mt-5 leading-relaxed">
              買取査定・販売に関するご質問、廃車のご相談など、<br />
              どんな小さなことでもお気軽にお問い合わせください。
            </p>
            <div className="mt-8">
              <Button variant="solid" href="/contact">フォームで問い合わせる</Button>
            </div>
          </div>

          {/* Right: contact info */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-10">
            <p className="font-noto text-xs text-white/40 tracking-widest uppercase mb-6">電話でのお問い合わせ</p>
            <a
              href="tel:09057818564"
              className="block font-bebas tracking-widest text-white hover:text-white/70 transition-colors"
              style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
            >
              090-5781-8564
            </a>
            <p className="font-noto text-xs text-white/40 mt-1">携帯電話</p>
            <a
              href="tel:0433085783"
              className="block font-bebas tracking-widest text-white hover:text-white/70 transition-colors mt-3"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
            >
              043-308-5783
            </a>
            <p className="font-noto text-xs text-white/40 mt-1">TEL / FAX</p>
            <p className="font-noto text-xs text-white/50 mt-3">受付時間：月〜土 9:00〜17:00（年末年始除く）</p>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="font-noto text-xs text-white/40">所在地</p>
              <p className="font-noto text-sm text-white mt-1">千葉県佐倉市高崎944-1</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
