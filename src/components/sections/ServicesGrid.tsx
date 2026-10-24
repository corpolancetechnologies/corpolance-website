import { ArrowRight } from 'lucide-react'
import { SERVICE_GROUPS, SERVICES } from '../../data/services'
import { cn } from '../../lib/cn'
import { ButtonLink } from '../common/Button'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'
import { ServiceCard } from './ServiceCard'

interface ServicesGridProps {
  eyebrow?: string
  title?: string
  description?: string
  showAllLink?: boolean
  className?: string
}

/** Service categories grouped into three areas, each card linking to its dedicated page. */
export function ServicesGrid({
  eyebrow = 'Technical expertise',
  title = 'Specialists across the modern technology landscape',
  description = 'From application code to data platforms, AI, enterprise systems and the cloud — we match your requirement with professionals experienced in that exact area.',
  showAllLink = true,
  className = 'bg-ice',
}: ServicesGridProps) {
  return (
    <section aria-labelledby="expertise-title" className={cn('section-y', className)}>
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading id="expertise-title" eyebrow={eyebrow} title={title} description={description} />
          {showAllLink && (
            <ButtonLink to="/services" variant="secondary" className="self-start lg:self-auto">
              View all services
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
          )}
        </div>

        <div className="mt-14 space-y-12">
          {SERVICE_GROUPS.map((g) => {
            const items = SERVICES.filter((s) => s.group === g.id)
            return (
              <div key={g.id} className="grid gap-6 lg:grid-cols-[14rem_1fr] lg:gap-10">
                <div className="lg:pt-2">
                  <h3 className="text-lg font-bold">{g.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{g.summary}</p>
                </div>
                <ul className={cn('grid gap-5 sm:grid-cols-2', items.length > 2 ? 'xl:grid-cols-3' : '')}>
                  {items.map((s, i) => (
                    <Reveal as="li" key={s.id} delay={(i % 3) * 60} className="h-full">
                      <ServiceCard service={s} />
                    </Reveal>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
