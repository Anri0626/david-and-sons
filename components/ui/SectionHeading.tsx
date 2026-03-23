type Props = {
  en: string
  ja?: string
}

export default function SectionHeading({ en, ja }: Props) {
  return (
    <div className="mb-16">
      <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl tracking-widest text-[#0a0a0a] leading-none">
        {en}
      </h2>
      {ja && (
        <p className="font-noto text-sm md:text-base text-black/40 mt-3 tracking-wider">
          {ja}
        </p>
      )}
    </div>
  )
}
