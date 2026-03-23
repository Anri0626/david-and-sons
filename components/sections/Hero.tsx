import Button from '@/components/ui/Button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="relative flex-1 flex flex-col justify-center items-center text-center px-6 pt-14 min-h-screen">
        <Image
          src="/car-carrier.jpg"
          alt="車積載トラック"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex flex-col items-center">
          <p className="font-noto text-xs text-white/60 tracking-widest uppercase mb-6">
            千葉県佐倉市 — 中古車買取・販売
          </p>

          <h1
            className="font-bebas text-white leading-none tracking-widest"
            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
          >
            WE BUY &<br />SELL CARS.
          </h1>

          <p className="font-noto text-sm md:text-base text-white/70 mt-6 max-w-md leading-relaxed">
            年式・走行距離を問わず、丁寧な査定と誠実な対応で<br className="hidden md:block" />
            お客様の大切なお車をお預かりします。
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="solid" href="/contact">お問い合わせ・無料査定</Button>
            <Button variant="outline-white" href="/about">会社概要を見る</Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 md:gap-16 border-t border-white/20 pt-10 w-full max-w-xl">
            {[
              { num: '月〜土', label: '年末年始除く' },
              { num: '9-17', label: '営業時間' },
              { num: '無料', label: 'お見積り' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-bebas text-2xl md:text-3xl tracking-widest text-white">{s.num}</p>
                <p className="font-noto text-xs text-white/50 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-noto text-xs text-white/40 tracking-widest">SCROLL</span>
          <span className="block w-px h-8 bg-white/20" />
        </div>
      </div>
    </section>
  )
}
