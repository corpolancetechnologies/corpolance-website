import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import type { IconItem } from '../../data/audiences'
import { cn } from '../../lib/cn'
import { Reveal } from '../common/Reveal'

interface FeatureGridProps {
  items: IconItem[]
  columns?: 2 | 3 | 4 | 5
  /** Compact rows for long lists (icon + title + one line) */
  compact?: boolean
}

const colClass = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
  5: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
}

/** Grid of icon cards; cards with a `to` become links. */
export function FeatureGrid({ items, columns = 3, compact = false }: FeatureGridProps) {
  return (
    <ul className={cn('grid gap-4', colClass[columns], !compact && 'gap-5')}>
      {items.map((item, i) => {
        const Icon = item.icon
        const body = (
          <>
            <span
              className={cn(
                'inline-flex shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors duration-300',
                compact ? 'size-10' : 'size-11',
                item.to && 'group-hover:bg-brand-600 group-hover:text-white',
              )}
            >
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className={cn('block', compact ? 'mt-0' : 'mt-5')}>
              <span className="flex items-start justify-between gap-2 font-display text-base font-bold text-ink">
                {item.title}
                {item.to && (
                  <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-brand-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                )}
              </span>
              <span className="mt-1.5 block text-sm leading-relaxed text-body">{item.text}</span>
            </span>
          </>
        )
        const cardClass = cn(
          'group h-full rounded-xl border border-line bg-white transition-[border-color,box-shadow] duration-300',
          compact ? 'flex gap-4 p-5' : 'block p-6',
          item.to && 'hover:border-brand-200 hover:shadow-lift',
        )
        return (
          <Reveal as="li" key={item.title} delay={(i % 3) * 60} className="h-full">
            {item.to ? (
              <Link to={item.to} className={cardClass}>
                {body}
              </Link>
            ) : (
              <div className={cardClass}>{body}</div>
            )}
          </Reveal>
        )
      })}
    </ul>
  )
}
