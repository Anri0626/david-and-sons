import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import CompanyTable from '@/components/sections/CompanyTable'
import MapEmbed from '@/components/sections/MapEmbed'

export const metadata: Metadata = {
  title: 'ABOUT',
  description: 'DAVID AND SON\'S 合同会社の会社情報・アクセスマップ。千葉県佐倉市高崎944-1。',
}

export default function AboutPage() {
  return (
    <div className="pt-32 pb-40 px-8 md:px-16 max-w-4xl mx-auto">
      <SectionHeading en="ABOUT US" ja="会社情報・アクセス" />
      <CompanyTable />
      <MapEmbed />
    </div>
  )
}
