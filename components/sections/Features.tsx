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
    <section className="py-32 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="font-noto text-xs text-[#6e6e73] tracking-widest uppercase mb-3">サービスの特徴</p>
          <h2 className="font-bebas text-4xl md:text-6xl tracking-widest text-[#1d1d1f]">WHY CHOOSE US</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.en} className="bg-white p-10 flex flex-col gap-5">
              <span className="font-bebas text-4xl text-[#d2d2d7] tracking-widest leading-none">
                {feature.number}
              </span>
              <div>
                <h3 className="font-bebas text-2xl tracking-widest text-[#1d1d1f] leading-none">
                  {feature.en}
                </h3>
                <p className="font-noto text-xs text-[#6e6e73] mt-1">{feature.ja}</p>
              </div>
              <p className="font-noto text-sm text-[#6e6e73] leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
