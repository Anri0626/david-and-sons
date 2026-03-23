import Button from '@/components/ui/Button'

export default function CtaSection() {
  return (
    <section className="py-32 bg-white border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <p className="font-noto text-xs text-[#6e6e73] tracking-widest uppercase mb-4">お問い合わせ</p>
            <h2 className="font-bebas text-4xl md:text-5xl tracking-widest text-[#1d1d1f] leading-tight">
              まずはお気軽に<br />ご相談ください
            </h2>
            <p className="font-noto text-sm text-[#6e6e73] mt-5 leading-relaxed">
              買取査定・販売に関するご質問、廃車のご相談など、<br />
              どんな小さなことでもお気軽にお問い合わせください。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="solid" href="/contact">フォームで問い合わせる</Button>
            </div>
          </div>

          {/* Right: contact info */}
          <div className="bg-[#f5f5f7] p-10">
            <p className="font-noto text-xs text-[#6e6e73] tracking-widest uppercase mb-6">電話でのお問い合わせ</p>
            <a
              href="tel:09057818564"
              className="block font-bebas tracking-widest text-[#1d1d1f] hover:text-[#6e6e73] transition-colors"
              style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
            >
              090-5781-8564
            </a>
            <p className="font-noto text-xs text-[#6e6e73] mt-3">受付時間：毎日 9:00〜17:00</p>
            <div className="mt-8 pt-8 border-t border-[#d2d2d7]">
              <p className="font-noto text-xs text-[#6e6e73]">所在地</p>
              <p className="font-noto text-sm text-[#1d1d1f] mt-1">千葉県佐倉市高崎944-1</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
