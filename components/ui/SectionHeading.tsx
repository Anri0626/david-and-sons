type Props = {
  en: string
  ja?: string
  center?: boolean
}

export default function SectionHeading({ en, ja, center = false }: Props) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {ja && (
        <p className="font-noto text-xs text-[#6e6e73] tracking-widest uppercase mb-3">{ja}</p>
      )}
      <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl tracking-widest text-[#1d1d1f] leading-none">
        {en}
      </h2>
    </div>
  )
}
