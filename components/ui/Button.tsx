import Link from 'next/link'

type ButtonProps = {
  variant?: 'solid' | 'outline' | 'outline-white' | 'ghost'
  children: React.ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
}

const baseClass = 'inline-block font-noto text-sm transition-all duration-200 cursor-pointer hover:scale-[1.03] active:scale-[0.97]'

const variantClass = {
  solid:   'bg-[#1d1d1f] text-white px-7 py-3 hover:bg-[#3d3d3f]',
  outline:       'bg-transparent text-[#1d1d1f] border border-[#1d1d1f] px-7 py-3 hover:bg-[#1d1d1f] hover:text-white',
  'outline-white': 'bg-transparent text-white border border-white px-7 py-3 hover:bg-white hover:text-[#1d1d1f]',
  ghost:         'bg-transparent text-[#1d1d1f] underline-offset-4 hover:underline px-0 py-0',
}

export default function Button({ variant = 'solid', children, href, onClick, type = 'button', disabled, className = '' }: ButtonProps) {
  const classes = `${baseClass} ${variantClass[variant]} ${className} ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
