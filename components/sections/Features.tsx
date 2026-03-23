import Image from 'next/image'

const features = [
  {
    en: 'HIGH VALUE',
    ja: '高価買取',
    desc: 'どんな車でも適正な査定で高値でお買取りします。年式・走行距離問わずお気軽にご相談ください。',
    number: '01',
  },
  {
    en: 'WIDE STOCK',
    ja: '豊富な在庫',
    desc: '多種多様な中古車を取り揃えています。ご希望の車種・予算に合わせてご提案します。',
    number: '02',
  },
  {
    en: 'CARE SERVICE',
    ja: '丁寧な対応',
    desc: 'お客様一人ひとりに寄り添った誠実な対応を心がけています。初めての方もお気軽にどうぞ。',
    number: '03',
  },
]

export default function Features() {
  return (
    <section className="relative py-32">
      {/* Background image */}
      <Image
        src="/excavator.jpg"
        alt=""
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-16 text-center">
          <p className="font-noto text-xs text-white/40 tracking-widest uppercase mb-3">サービスの特徴</p>
          <h2 className="font-bebas text-4xl md:text-6xl tracking-widest text-white">WHY CHOOSE US</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.en} className="bg-white/10 backdrop-blur-sm border border-white/20 p-10 flex flex-col gap-5">
              <span className="font-bebas text-4xl text-white/20 tracking-widest leading-none">
                {feature.number}
              </span>
              <div>
                <h3 className="font-bebas text-2xl tracking-widest text-white leading-none">
                  {feature.en}
                </h3>
                <p className="font-noto text-xs text-white/50 mt-1">{feature.ja}</p>
              </div>
              <p className="font-noto text-sm text-white/70 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
