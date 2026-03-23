import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-16 border-b border-black/10">
      <div className="max-w-7xl w-full">
        {/* Label */}
        <p className="font-inter text-xs tracking-widest text-black/30 uppercase mb-8">
          DAVID AND SON&apos;S 合同会社 — 千葉県佐倉市
        </p>

        {/* Main headline */}
        <h1
          className="font-bebas text-[#0a0a0a] leading-none tracking-widest"
          style={{ fontSize: 'clamp(3.5rem, 11vw, 9rem)' }}
        >
          WE BUY<br />& SELL<br />CARS.
        </h1>

        {/* Sub copy */}
        <p className="font-noto font-bold text-lg md:text-2xl text-black/50 mt-6 tracking-wider">
          中古車の買取・販売 | 廃車買取
        </p>

        {/* Info block */}
        <div className="mt-8 border-l-2 border-black/20 pl-4">
          <p className="font-inter text-xs text-black/30 tracking-widest uppercase leading-relaxed">
            営業時間 / 毎日 9:00〜17:00<br />
            電話 / 090-5781-8564
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button variant="solid" href="/contact">
            お問い合わせ
          </Button>
          <Button variant="outline" href="/about">
            会社概要
          </Button>
        </div>
      </div>

      {/* Bottom hint */}
      <div className="mt-auto py-12 flex items-center gap-3">
        <span className="block w-12 h-px bg-black/15" />
        <span className="font-inter text-xs text-black/20 tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  )
}
