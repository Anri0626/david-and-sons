const rows = [
  { label: '会社名',   value: "DAVID AND SON'S 合同会社" },
  { label: '事業内容', value: '中古車買取・販売、廃車買取' },
  { label: '所在地',   value: '千葉県佐倉市高崎944-1' },
  { label: '電話番号', value: '090-5781-8564', isPhone: true },
  { label: '営業時間', value: '毎日 9:00〜17:00' },
]

export default function CompanyTable() {
  return (
    <dl className="border-t border-black/10">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex flex-col sm:flex-row py-6 border-b border-black/10 gap-2 sm:gap-8"
        >
          <dt className="font-inter text-xs text-black/30 tracking-widest uppercase w-32 shrink-0 pt-0.5">
            {row.label}
          </dt>
          <dd className="font-noto font-bold text-base md:text-lg text-[#0a0a0a]">
            {row.isPhone ? (
              <a
                href={`tel:${row.value.replace(/-/g, '')}`}
                className="hover:text-black/50 transition-colors"
              >
                {row.value}
              </a>
            ) : (
              row.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  )
}
