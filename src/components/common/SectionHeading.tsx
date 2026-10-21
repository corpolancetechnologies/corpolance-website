import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  id?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'dark', id, className }: SectionHeadingProps) {
  const light = tone === 'light'
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p className={cn('eyebrow mb-4', align === 'center' && 'justify-center', light && 'text-brand-300 before:bg-brand-300')}>
          {eyebrow}
        </p>
      )}
      <h2 id={id} className={cn('text-3xl leading-[1.15] font-bold sm:text-4xl lg:text-[2.6rem]', light && 'text-white')}>
        {title}
      </h2>
      {description && (
        <p className={cn('mt-5 text-base leading-relaxed sm:text-lg', light ? 'text-brand-100/85' : 'text-body')}>
          {description}
        </p>
      )}
    </div>
  )
}
