import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import { cn } from '../../lib/cn'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
}

/** Fades content in as it scrolls into view. Visible without JS and with reduced motion. */
export function Reveal({ children, className, delay = 0, as: Tag = 'div' }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <Tag
      ref={ref}
      className={cn('reveal', className)}
      data-revealed={inView ? 'true' : undefined}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  )
}
