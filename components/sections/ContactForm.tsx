'use client'

import { useState, useTransition } from 'react'
import Button from '@/components/ui/Button'

const fieldClass =
  'w-full bg-white border border-black/20 text-[#0a0a0a] font-noto placeholder:text-black/25 px-4 py-3 focus:outline-none focus:border-[#0a0a0a] transition-colors'

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
        if (!res.ok) throw new Error('送信に失敗しました')
        setSent(true)
      } catch {
        setError('送信中にエラーが発生しました。お電話でもお気軽にご連絡ください。')
      }
    })
  }

  if (sent) {
    return (
      <div className="border border-black/10 p-12 text-center mt-12 bg-white">
        <p className="font-bebas text-4xl tracking-widest text-[#0a0a0a] mb-4">THANK YOU</p>
        <p className="font-noto text-sm text-black/50">
          お問い合わせを受け付けました。<br />
          担当者より折り返しご連絡いたします。
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 space-y-8">
      <div>
        <label className="block font-inter text-xs text-black/40 tracking-widest uppercase mb-2">
          お名前 <span className="text-black/50">*</span>
        </label>
        <input type="text" name="name" value={form.name} onChange={handleChange}
          required placeholder="山田 太郎" className={fieldClass} />
      </div>

      <div>
        <label className="block font-inter text-xs text-black/40 tracking-widest uppercase mb-2">
          メールアドレス <span className="text-black/50">*</span>
        </label>
        <input type="email" name="email" value={form.email} onChange={handleChange}
          required placeholder="example@email.com" className={fieldClass} />
      </div>

      <div>
        <label className="block font-inter text-xs text-black/40 tracking-widest uppercase mb-2">
          電話番号
        </label>
        <input type="tel" name="phone" value={form.phone} onChange={handleChange}
          placeholder="090-0000-0000" className={fieldClass} />
      </div>

      <div>
        <label className="block font-inter text-xs text-black/40 tracking-widest uppercase mb-2">
          お問い合わせ内容 <span className="text-black/50">*</span>
        </label>
        <textarea name="message" value={form.message} onChange={handleChange}
          required rows={6} placeholder="ご質問・ご相談内容をご記入ください"
          className={`${fieldClass} resize-none`} />
      </div>

      {error && (
        <p className="font-noto text-sm text-black/50 border border-black/10 px-4 py-3 bg-gray-50">
          {error}
        </p>
      )}

      <Button variant="solid" type="submit" disabled={isPending}>
        {isPending ? '送信中...' : '送信する / SEND'}
      </Button>
    </form>
  )
}
