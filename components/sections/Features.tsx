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
    <section className="py-32 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <p className="font-inter text-xs tracking-widest text-black/30 uppercase mb-12">
          WHY CHOOSE US
        </p>

        {/* Cards: gap-px + bg-black/10 = thin border between cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
          {features.map((feature) => (
            <div
              key={feature.en}
              className="bg-white p-10 md:p-12 flex flex-col gap-6"
            >
              <span className="font-inter text-xs text-black/20 tracking-widest">
                {feature.number}
              </span>
              <div>
                <h3 className="font-bebas text-3xl md:text-4xl tracking-widest text-[#0a0a0a] leading-none">
                  {feature.en}
                </h3>
                <p className="font-noto font-bold text-sm text-black/40 mt-1 tracking-wider">
                  {feature.ja}
                </p>
              </div>
              <p className="font-noto text-sm text-black/60 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
