'use client'

import { useState, useTransition } from 'react'
import Button from '@/components/ui/Button'

const fieldClass = 'w-full bg-white border border-[#d2d2d7] text-[#1d1d1f] font-noto text-sm placeholder:text-[#6e6e73] px-4 py-3 focus:outline-none focus:border-[#1d1d1f] transition-colors'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    startTransition(async () => {
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error()
        setSent(true)
      } catch {
        setError('送信中にエラーが発生しました。お電話でもお気軽にご連絡ください。')
      }
    })
  }

  if (sent) {
    return (
      <div className="bg-[#f5f5f7] p-12 text-center mt-10">
        <p className="font-bebas text-3xl tracking-widest text-[#1d1d1f] mb-3">お問い合わせありがとうございます</p>
        <p className="font-noto text-sm text-[#6e6e73]">
          担当者より折り返しご連絡いたします。
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-noto text-xs text-[#6e6e73] mb-2">
            お名前 <span className="text-[#1d1d1f]">*</span>
          </label>
          <input type="text" name="name" value={form.name} onChange={handleChange}
            required placeholder="山田 太郎" className={fieldClass} />
        </div>
        <div>
          <label className="block font-noto text-xs text-[#6e6e73] mb-2">
            電話番号
          </label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="090-0000-0000" className={fieldClass} />
        </div>
      </div>

      <div>
        <label className="block font-noto text-xs text-[#6e6e73] mb-2">
          メールアドレス <span className="text-[#1d1d1f]">*</span>
        </label>
        <input type="email" name="email" value={form.email} onChange={handleChange}
          required placeholder="example@email.com" className={fieldClass} />
      </div>

      <div>
        <label className="block font-noto text-xs text-[#6e6e73] mb-2">
          お問い合わせ内容 <span className="text-[#1d1d1f]">*</span>
        </label>
        <textarea name="message" value={form.message} onChange={handleChange}
          required rows={6} placeholder="ご質問・ご相談内容をご記入ください"
          className={`${fieldClass} resize-none`} />
      </div>

      {error && (
        <p className="font-noto text-xs text-[#6e6e73] bg-[#f5f5f7] px-4 py-3">{error}</p>
      )}

      <Button variant="solid" type="submit" disabled={isPending}>
        {isPending ? '送信中...' : '送信する'}
      </Button>

      <p className="font-noto text-xs text-[#6e6e73]">
        * は必須項目です。お電話でのお問い合わせは{' '}
        <a href="tel:09057818564" className="text-[#1d1d1f] hover:underline">090-5781-8564</a>
        {' '}まで。
      </p>
    </form>
  )
}
