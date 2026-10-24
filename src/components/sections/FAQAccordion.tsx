import { useId, useState, type ReactNode } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Plus } from 'lucide-react'
import type { Faq } from '../../data/content'
import { cn } from '../../lib/cn'
import { SectionHeading } from '../common/SectionHeading'

function FaqItem({ faq, open, onToggle, headingLevel }: { faq: Faq; open: boolean; onToggle: () => void; headingLevel: 3 | 4 }) {
  const id = useId()
  const buttonId = `${id}-q`
  const panelId = `${id}-a`
  const Heading = headingLevel === 3 ? 'h3' : 'h4'
  return (
    <div className="border-b border-line">
      <Heading className="text-base">
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-base font-semibold text-ink transition-colors hover:text-brand-600 sm:text-lg"
        >
          {faq.q}
          <span
            className={cn(
              'inline-flex size-8 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color,color] duration-300',
              open ? 'rotate-45 border-brand-600 bg-brand-600 text-white' : 'border-line text-brand-600',
            )}
            aria-hidden="true"
          >
            <Plus className="size-4" />
          </span>
        </button>
      </Heading>
      <AnimatePresence initial={false}>
        {open && (
          <m.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pr-10 pb-6 leading-relaxed text-body">{faq.a}</p>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/** Accessible accordion list; one item open at a time. */
export function FaqList({ items, firstOpen = true, headingLevel = 3 }: { items: Faq[]; firstOpen?: boolean; headingLevel?: 3 | 4 }) {
  const [open, setOpen] = useState<number | null>(firstOpen ? 0 : null)
  return (
    <div className="border-t border-line">
      {items.map((f, i) => (
        <FaqItem key={f.q} faq={f} headingLevel={headingLevel} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
      ))}
    </div>
  )
}

interface FAQAccordionProps {
  items: Faq[]
  title?: string
  description?: string
  /** Extra content under the heading, e.g. CTA links */
  aside?: ReactNode
  className?: string
}

export function FAQAccordion({
  items,
  title = 'Frequently asked questions',
  description = "Straight answers about how we work. If your question isn't here, our team is happy to help.",
  aside,
  className = 'bg-white',
}: FAQAccordionProps) {
  return (
    <section aria-labelledby="faq-title" className={cn('section-y', className)}>
      <div className="container-x grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <SectionHeading id="faq-title" eyebrow="FAQ" title={title} description={description} />
          {aside && <div className="mt-8 flex flex-wrap gap-3">{aside}</div>}
        </div>
        <FaqList items={items} />
      </div>
    </section>
  )
}
