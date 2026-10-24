import type { CSSProperties } from 'react'
import { ArrowRight, Eye } from 'lucide-react'
import { PROCESS_STEPS, type ProcessStep } from '../../data/content'
import { useInView } from '../../hooks/useInView'
import { cn } from '../../lib/cn'
import { ButtonLink } from '../common/Button'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

interface ProcessTimelineProps {
  showCta?: boolean
  eyebrow?: string
  title?: string
  description?: string
  steps?: ProcessStep[]
  ctaLabel?: string
  ctaTo?: string
  ctaNote?: string
  /** Index of the step to emphasise (the client evaluation step by default) */
  highlight?: number
  className?: string
}

export function ProcessTimeline({
  showCta = true,
  eyebrow = 'How our process works',
  title = 'From first conversation to confirmed allocation',
  description = 'Every engagement follows the same transparent sequence — and you meet and evaluate the proposed professional before anything is allocated.',
  steps = PROCESS_STEPS,
  ctaLabel = 'Start With a Requirement Discussion',
  ctaTo = '/contact',
  ctaNote = 'No allocation happens without your approval.',
  highlight = 2,
  className = 'bg-white',
}: ProcessTimelineProps) {
  const { ref, inView } = useInView<HTMLOListElement>('0px 0px -20% 0px')
  const n = steps.length
  // Connector spans from the centre of the first column to the centre of the last.
  const inset = { left: `${50 / n}%`, right: `${50 / n}%` }

  return (
    <section aria-labelledby="process-title" className={cn('section-y relative overflow-hidden', className)}>
      <div className="container-x">
        <SectionHeading id="process-title" align="center" eyebrow={eyebrow} title={title} description={description} />

        <ol
          ref={ref}
          style={{ '--steps': n } as CSSProperties}
          className="relative mt-16 grid gap-10 lg:mt-20 lg:grid-cols-[repeat(var(--steps),minmax(0,1fr))] lg:gap-6"
        >
          {/* Connector — horizontal on desktop, vertical on mobile */}
          <span aria-hidden="true" style={inset} className="absolute top-7 hidden h-0.5 bg-line lg:block" />
          <span
            aria-hidden="true"
            data-on={inView}
            style={inset}
            className="draw-line draw-x absolute top-7 hidden h-0.5 origin-left bg-gradient-to-r from-brand-300 via-brand-500 to-navy-700 lg:block"
          />
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-7 w-0.5 bg-line lg:hidden" />
          <span
            aria-hidden="true"
            data-on={inView}
            className="draw-line draw-y absolute top-2 bottom-2 left-7 w-0.5 origin-top bg-gradient-to-b from-brand-300 via-brand-500 to-navy-700 lg:hidden"
          />

          {steps.map((step, i) => {
            const Icon = step.icon
            const emphasised = i === highlight
            return (
              <li key={step.title} className="relative grid grid-cols-[3.5rem_1fr] gap-5 lg:flex lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                <Reveal delay={150 + i * 220} className="relative z-10 lg:mx-auto">
                  <span
                    className={cn(
                      'flex size-14 items-center justify-center rounded-2xl border-4 border-white shadow-card ring-1',
                      emphasised ? 'bg-brand-600 text-white ring-brand-600' : 'bg-white text-brand-600 ring-line',
                    )}
                  >
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                </Reveal>
                <Reveal delay={220 + i * 220} className="lg:mt-7">
                  <p className="text-xs font-bold tracking-[0.16em] text-brand-500 uppercase">Step {i + 1}</p>
                  <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">{step.description}</p>
                  <p
                    className={cn(
                      'mt-4 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold',
                      emphasised ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-700',
                    )}
                  >
                    {emphasised && <Eye className="size-3.5" aria-hidden="true" />}
                    {step.outcome}
                  </p>
                </Reveal>
              </li>
            )
          })}
        </ol>

        {showCta && (
          <Reveal className="mt-16 flex flex-col items-center gap-4 text-center">
            <ButtonLink to={ctaTo} size="lg">
              {ctaLabel}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </ButtonLink>
            {ctaNote && <p className="text-sm text-muted">{ctaNote}</p>}
          </Reveal>
        )}
      </div>
    </section>
  )
}
