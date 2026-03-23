import { Bebas_Neue, Inter, Noto_Sans_JP } from 'next/font/google'

export const bebasNeue = Bebas_Neue({
  weight:   '400',
  subsets:  ['latin'],
  variable: '--font-bebas',
  display:  'swap',
})

export const inter = Inter({
  weight:   ['400', '700', '900'],
  subsets:  ['latin'],
  variable: '--font-inter',
  display:  'swap',
})

export const notoSansJP = Noto_Sans_JP({
  weight:   ['400', '700', '900'],
  subsets:  ['latin'],
  variable: '--font-noto',
  display:  'swap',
})
