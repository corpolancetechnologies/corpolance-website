import { ArrowRight } from 'lucide-react'
import { SERVICES } from '../../data/services'
import { ButtonLink } from '../common/Button'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'
import { ServiceCard } from './ServiceCard'

export function ServicesGrid() {
  return (
    <section aria-labelledby="expertise-title" className="section-y bg-ice">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="expertise-title"
            eyebrow="Technical expertise"
            title="Specialists across the modern technology landscape"
            description="From application code to data platforms, AI, enterprise systems and the cloud — we match your requirement with professionals experienced in that exact area."
          />
          <ButtonLink to="/services" variant="secondary" className="self-start lg:self-auto">
            View all services
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 4) * 60} className="h-full">
              <ServiceCard service={s} />
            </Reveal>
          ))}
          <Reveal delay={120} className="h-full sm:col-span-2">
            <div className="flex h-full flex-col justify-between gap-6 rounded-xl bg-navy-800 p-7 text-brand-100/85">
              <div>
                <h3 className="text-xl font-bold text-white">Don't see your technology?</h3>
                <p className="mt-3 text-sm leading-relaxed">
                  Our network covers many more tools and frameworks than we can list here. Tell us what you are working
                  with and we will let you know honestly whether we can help.
                </p>
              </div>
              <ButtonLink to="/contact" variant="light" className="self-start">
                Ask about your stack
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
