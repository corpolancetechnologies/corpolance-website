import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { SCENARIOS } from '../../data/content'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

export function ScenariosSection() {
  return (
    <section aria-labelledby="scenarios-title" className="section-y bg-white">
      <div className="container-x">
        <SectionHeading
          id="scenarios-title"
          eyebrow="Challenges we support"
          title="Business and technical challenges we help with"
          description="Representative examples of the requirements clients bring to us — not descriptions of specific client projects."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SCENARIOS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 3) * 70} className="bg-white">
              <Link to={s.to} className="group flex h-full flex-col p-7 transition-colors hover:bg-ice">
                <span className="font-display text-sm font-bold text-brand-400">{String(i + 1).padStart(2, '0')}</span>
                <span className="mt-3 font-display text-lg font-bold text-ink">{s.title}</span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-body">{s.text}</span>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  {s.linkLabel}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
