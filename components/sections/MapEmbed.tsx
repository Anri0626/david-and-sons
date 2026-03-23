export default function MapEmbed() {
  return (
    <div className="mt-16">
      <p className="font-noto text-xs text-[#6e6e73] tracking-widest uppercase mb-4">アクセス</p>
      <div className="border border-[#d2d2d7]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.0!2d140.2195!3d35.7207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5Y2D6JGJ55yM5L2Q5YCk5biC6auY5bSO77yX77yU77yU4oiS77yR!5e0!3m2!1sja!2sjp!4v1234567890"
          width="100%"
          height="400"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DAVID AND SON'S 合同会社 所在地マップ"
        />
      </div>
      <p className="font-noto text-xs text-[#6e6e73] mt-3">千葉県佐倉市高崎944-1</p>
    </div>
  )
}
