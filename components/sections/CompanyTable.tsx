const rows = [
  { label: '会社名',   value: "DAVID AND SON'S 合同会社" },
  { label: '事業内容', value: '中古車買取・販売、廃車買取' },
  { label: '所在地',   value: '千葉県佐倉市高崎944-1' },
  { label: '電話番号', value: '090-5781-8564', isPhone: true },
  { label: '営業時間', value: '毎日 9:00〜17:00' },
]

export default function CompanyTable() {
  return (
    <dl>
      {rows.map((row) => (
        <div key={row.label} className="flex flex-col sm:flex-row py-6 border-b border-[#d2d2d7] gap-2 sm:gap-12">
          <dt className="font-noto text-xs text-[#6e6e73] w-28 shrink-0 pt-0.5">{row.label}</dt>
          <dd className="font-noto text-sm md:text-base text-[#1d1d1f]">
            {row.isPhone ? (
              <a href={`tel:${row.value.replace(/-/g, '')}`} className="hover:text-[#6e6e73] transition-colors">
                {row.value}
              </a>
            ) : row.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
