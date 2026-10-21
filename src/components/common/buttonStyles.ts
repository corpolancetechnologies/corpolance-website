import { cn } from '../../lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'light' | 'outline-light'
export type ButtonSize = 'md' | 'lg'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-[background-color,color,border-color,box-shadow] duration-200 active:translate-y-px'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-brand-600 text-white shadow-sm hover:bg-navy-800 hover:shadow-md',
  secondary: 'border border-line bg-white text-navy-800 hover:border-brand-300 hover:bg-brand-50',
  ghost: 'text-brand-600 hover:text-navy-800',
  light: 'bg-white text-navy-800 hover:bg-brand-50',
  'outline-light': 'border border-white/30 text-white hover:border-white/60 hover:bg-white/10',
}

const sizes: Record<ButtonSize, string> = {
  md: 'min-h-11 px-5 text-sm',
  lg: 'min-h-12 px-5 text-[0.95rem]',
}

export function buttonClass(variant: ButtonVariant = 'primary', size: ButtonSize = 'md', className?: string) {
  return cn(base, variants[variant], variant === 'ghost' ? 'min-h-11 text-sm' : sizes[size], className)
}
