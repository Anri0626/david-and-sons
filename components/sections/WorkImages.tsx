import Image from 'next/image'

const works = [
  {
    src: '/excavator.jpg',
    alt: '廃車解体作業',
    label: '廃車買取',
    desc: '専門機械による安全・迅速な廃車処理',
  },
  {
    src: '/container.jpg',
    alt: 'コンテナ輸送',
    label: '輸送・物流',
    desc: '国内外への輸送ネットワーク',
  },
]

export default function WorkImages() {
  return (
    <section className="py-0 bg-[#1d1d1f]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {works.map((work) => (
          <div key={work.label} className="relative h-72 md:h-96 group overflow-hidden">
            <Image
              src={work.src}
              alt={work.alt}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="font-noto text-xs text-white/50 tracking-widest uppercase mb-1">{work.label}</p>
              <p className="font-bebas text-2xl tracking-widest text-white leading-none">{work.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
