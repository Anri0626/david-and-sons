'use client'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import carCarrier from '@/public/car-carrier.jpg'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

function rise(i: number) {
  return {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: i * 0.14, duration: 0.7, ease },
  }
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="relative flex-1 flex flex-col justify-center items-center text-center px-6 pt-14 min-h-screen">
        <Image
          src={carCarrier}
          alt="車積載トラック"
          fill
          priority
          placeholder="blur"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex flex-col items-center">
          <motion.p
            className="font-noto text-xs text-white/60 tracking-widest uppercase mb-6"
            {...rise(0)}
          >
            千葉県佐倉市 — 中古車買取・販売
          </motion.p>

          <motion.h1
            className="font-bebas text-white leading-none tracking-widest"
            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
            {...rise(1)}
          >
            WE BUY &<br />SELL CARS.
          </motion.h1>

          <motion.p
            className="font-noto text-sm md:text-base text-white/70 mt-6 max-w-md leading-relaxed"
            {...rise(2)}
          >
            年式・走行距離を問わず、丁寧な査定と誠実な対応で<br className="hidden md:block" />
            お客様の大切なお車をお預かりします。
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            {...rise(3)}
          >
            <Button variant="solid" href="/contact">お問い合わせ・無料査定</Button>
            <Button variant="outline-white" href="/about">会社概要を見る</Button>
          </motion.div>

          <motion.div
            className="mt-20 grid grid-cols-3 gap-8 md:gap-16 border-t border-white/20 pt-10 w-full max-w-xl"
            {...rise(4)}
          >
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
          </motion.div>
        </div>

        {/* Bouncing scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <span className="font-noto text-xs text-white/40 tracking-widest">SCROLL</span>
          <motion.svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <path d="M8 4 L8 20 M2 14 L8 20 L14 14" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  )
}
