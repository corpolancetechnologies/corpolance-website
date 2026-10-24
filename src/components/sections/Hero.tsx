import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { SITE } from '../../config/site'
import { ButtonLink } from '../common/Button'
import { WhatsAppButton } from '../common/WhatsAppButton'
import { HeroVisual } from './HeroVisual'

const proofPoints = ['Skill-based matching', 'Evaluate before allocation', 'Clients in the US, Europe, Canada & India']

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      <div className="container-x grid items-center gap-14 pt-10 pb-20 sm:pt-14 lg:grid-cols-[1.12fr_1fr] lg:gap-14 lg:pt-20 lg:pb-28">
        <div>
          <p className="inline-flex animate-rise items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">
            <span className="size-1.5 rounded-full bg-brand-500" aria-hidden="true" />
            Technical support & IT resources · Since {SITE.foundedYear}
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[2.35rem] leading-[1.07] font-extrabold tracking-[-0.035em] sm:text-5xl lg:text-[3.6rem]"
          >
            The Right Technical Expertise.{' '}
            <span className="text-brand-600">When Your Business Needs It.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg">
            Corpolance Technologies connects agencies, organizations, and working professionals with relevant technical
            expertise across software development, data, AI, cloud, and enterprise technologies.
          </p>

          <div className="mt-8 flex animate-rise flex-col gap-3 [animation-delay:120ms] sm:flex-row sm:flex-wrap">
            <ButtonLink to="/contact" size="lg">
              Discuss Your Requirement
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink to="/services" variant="secondary" size="lg">
              Explore Our Services
            </ButtonLink>
            <WhatsAppButton variant="ghost" size="lg" className="px-3" />
          </div>

          <ul className="mt-10 flex animate-rise flex-col gap-2.5 text-sm text-body [animation-delay:200ms] sm:flex-row sm:flex-wrap sm:gap-x-6">
            {proofPoints.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 shrink-0 text-brand-500" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
