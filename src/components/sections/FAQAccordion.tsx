import { useId, useState } from 'react'
import { Link } from 'react-router'
import { AnimatePresence, m } from 'framer-motion'
import { Plus } from 'lucide-react'
import { FAQS, type Faq } from '../../data/content'
import { cn } from '../../lib/cn'
import { SectionHeading } from '../common/SectionHeading'
import { WhatsAppButton } from '../common/WhatsAppButton'

function FaqItem({ faq, open, onToggle }: { faq: Faq; open: boolean; onToggle: () => void }) {
  const id = useId()
  const buttonId = `${id}-q`
  const panelId = `${id}-a`
  return (
    <div className="border-b border-line">
      <h3 className="text-base">
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
      </h3>
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

export function FAQAccordion({ items = FAQS }: { items?: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section aria-labelledby="faq-title" className="section-y bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <SectionHeading
            id="faq-title"
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Straight answers about how we work. If your question isn't here, our team is happy to help."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton label="Ask on WhatsApp" />
            <Link to="/contact" className="inline-flex min-h-11 items-center px-2 text-sm font-semibold text-brand-600 hover:text-navy-800">
              Send an enquiry
            </Link>
          </div>
        </div>
        <div className="border-t border-line">
          {items.map((f, i) => (
            <FaqItem key={f.q} faq={f} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
