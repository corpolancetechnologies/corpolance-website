import { BENEFITS } from '../../data/content'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

export function WhyChoose() {
  return (
    <section aria-labelledby="why-title" className="section-y bg-ice">
      <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            id="why-title"
            eyebrow="Why choose Corpolance"
            title="A practical partner for technical requirements"
            description="We focus on understanding what you actually need, proposing the right person for it, and letting you decide with confidence."
          />
          <div className="mt-8 hidden rounded-xl border border-brand-100 bg-white p-6 lg:block">
            <p className="font-display text-lg font-bold text-navy-800">“quietly powering your success”</p>
            <p className="mt-2 text-sm leading-relaxed text-body">
              Our tagline reflects how we work: dependable technical support behind the scenes, so our clients can
              focus on delivering.
            </p>
          </div>
        </div>

        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon
            return (
              <Reveal as="li" key={b.title} delay={(i % 2) * 80} className="flex gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-white text-brand-600 shadow-card ring-1 ring-line">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">{b.description}</p>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
