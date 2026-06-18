'use client'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

type Props = {
  en: string
  ja?: string
  center?: boolean
}

export default function SectionHeading({ en, ja, center = false }: Props) {
  return (
    <motion.div
      className={`mb-12 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-60px' }}
      transition={{ duration: 0.6, ease }}
    >
      {ja && (
        <p className="font-noto text-xs text-[#6e6e73] tracking-widest uppercase mb-3">{ja}</p>
      )}
      <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl tracking-widest text-[#1d1d1f] leading-none">
        {en}
      </h2>
    </motion.div>
  )
}
