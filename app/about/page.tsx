import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import CompanyTable from '@/components/sections/CompanyTable'
import MapEmbed from '@/components/sections/MapEmbed'

export const metadata: Metadata = {
  title: 'ABOUT',
  description: "DAVID AND SON'S 合同会社の会社情報・アクセスマップ。千葉県佐倉市高崎944-1。",
}

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[#f5f5f7] pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="font-noto text-xs text-[#6e6e73] tracking-widest uppercase mb-4">Company</p>
          <h1 className="font-bebas text-5xl md:text-7xl tracking-widest text-[#1d1d1f] leading-none">ABOUT US</h1>
          <p className="font-noto text-sm text-[#6e6e73] mt-4">会社情報・アクセス</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <CompanyTable />
          <MapEmbed />
        </div>
      </div>
    </>
  )
}
