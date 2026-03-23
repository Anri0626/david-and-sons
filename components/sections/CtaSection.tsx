import Button from '@/components/ui/Button'

export default function CtaSection() {
  return (
    <section className="py-40 bg-[#0a0a0a] text-white text-center px-8">
      <div className="max-w-4xl mx-auto">
        <p className="font-inter text-xs tracking-widest text-white/30 uppercase mb-8">
          GET IN TOUCH
        </p>

        <h2 className="font-noto font-black text-2xl md:text-4xl lg:text-5xl text-white leading-snug">
          今すぐお気軽にご連絡ください
        </h2>

        <a
          href="tel:09057818564"
          className="block font-bebas tracking-widest text-white hover:text-white/60 transition-colors mt-8"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
        >
          090-5781-8564
        </a>

        <p className="font-inter text-xs text-white/30 tracking-widest mt-4">
          毎日 9:00〜17:00
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="solid" href="/contact">
            CONTACT US
          </Button>
          <Button variant="outline" href="/about">
            ABOUT US
          </Button>
        </div>
      </div>
    </section>
  )
}
