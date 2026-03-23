import Link from 'next/link'

type ButtonProps = {
  variant?: 'solid' | 'outline'
  children: React.ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
}

const baseClass =
  'inline-block font-inter font-black tracking-widest text-sm uppercase px-8 py-4 transition-colors duration-200 cursor-pointer'

const variantClass = {
  solid:
    'bg-[#0a0a0a] text-white border border-[#0a0a0a] hover:bg-white hover:text-[#0a0a0a]',
  outline:
    'bg-transparent text-[#0a0a0a] border border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white',
}

export default function Button({
  variant = 'outline',
  children,
  href,
  onClick,
  type = 'button',
  disabled,
  className = '',
}: ButtonProps) {
  const classes = `${baseClass} ${variantClass[variant]} ${className} ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
