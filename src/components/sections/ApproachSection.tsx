import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { APPROACH } from '../../data/content'
import { Reveal } from '../common/Reveal'

/** How Corpolance approaches a technical requirement — the delivery philosophy behind the process. */
export function ApproachSection() {
  return (
    <section aria-labelledby="approach-title" className="section-y relative overflow-hidden bg-navy-900 text-brand-100/85">
      <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-20 invert [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
      <div className="container-x relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-4 text-brand-300 before:bg-brand-300">Our delivery approach</p>
          <h2 id="approach-title" className="text-3xl leading-[1.15] font-bold text-white sm:text-4xl lg:text-[2.6rem]">
            How we approach a technical requirement
          </h2>
          <p className="mt-5 text-base leading-relaxed sm:text-lg">
            Good matches come from understanding the problem properly. Before anyone is proposed, we make sure we know
            what the requirement actually needs — and you always have the final say.
          </p>
          <Link to="/how-we-work" className="mt-8 inline-flex min-h-11 items-center gap-1.5 font-semibold text-brand-200 hover:text-white">
            See how we work <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <ol className="relative space-y-4">
          <span aria-hidden="true" className="absolute top-6 bottom-6 left-6 w-px bg-white/15" />
          {APPROACH.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 80} className="relative flex gap-5">
              <span className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-navy-800 font-display text-base font-bold text-brand-300 ring-1 ring-white/15">
                {i + 1}
              </span>
              <div className="flex-1 rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
                <h3 className="text-base font-semibold text-white">{a.title}</h3>
                <p className="mt-1 text-sm leading-relaxed">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
