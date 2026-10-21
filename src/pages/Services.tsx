import { Link } from 'react-router'
import { ArrowRight, Check, CircleHelp } from 'lucide-react'
import { ENGAGEMENT_MODELS } from '../data/content'
import { SERVICES, contactHref } from '../data/services'
import { PAGES, useSeo } from '../lib/seo'
import { cn } from '../lib/cn'
import { ButtonLink } from '../components/common/Button'
import { Reveal } from '../components/common/Reveal'
import { SectionHeading } from '../components/common/SectionHeading'
import { WhatsAppButton } from '../components/common/WhatsAppButton'
import { PageHero } from '../components/sections/PageHero'
import { ProcessTimeline } from '../components/sections/ProcessTimeline'
import { FinalCTA } from '../components/sections/FinalCTA'

const comparison = [
  {
    label: 'Who it is for',
    agency: 'Agencies, consulting firms, job-support and service providers',
    individual: 'Working professionals',
    organization: 'Companies and teams',
  },
  {
    label: 'Typical need',
    agency: 'Technical resources to support your own customers',
    individual: 'Guidance and hands-on help with a technical problem or project',
    organization: 'Additional technical capacity for a project or ongoing work',
  },
  {
    label: 'How it runs',
    agency: 'Ongoing B2B relationship, requirement by requirement',
    individual: 'Direct engagement with a matched professional',
    organization: 'Freelance or contract engagement agreed with your team',
  },
]

export default function Services() {
  useSeo(PAGES.services)
  return (
    <>
      <PageHero
        breadcrumb="Our Services"
        eyebrow="Our services"
        title={
          <>
            Technical support and IT resources, <span className="text-brand-600">matched to your requirement</span>
          </>
        }
        description="Explore our engagement models and technology specializations. Every engagement starts with understanding your requirement and gives you the chance to evaluate the proposed professional."
      >
        <ButtonLink to="/contact" size="lg">
          Discuss Your Requirement <ArrowRight className="size-4" aria-hidden="true" />
        </ButtonLink>
        <WhatsAppButton size="lg" />
      </PageHero>

      {/* In-page navigation */}
      <nav aria-label="Service categories" className="sticky top-[4.5rem] z-30 border-b border-line bg-white/95 backdrop-blur-md lg:top-20">
        <div className="container-x">
          <ul className="-mx-4 flex gap-1 overflow-x-auto px-4 py-3 [scrollbar-width:none] sm:mx-0 sm:px-0">
            <li>
              <a href="#engagement-models" className="inline-flex min-h-10 items-center rounded-md px-2.5 text-sm font-semibold whitespace-nowrap text-navy-800 hover:bg-brand-50">
                Engagement models
              </a>
            </li>
            {SERVICES.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-flex min-h-10 items-center rounded-md px-2.5 text-sm font-medium whitespace-nowrap text-body hover:bg-brand-50 hover:text-navy-800"
                >
                  {s.navLabel}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Engagement models */}
      <section id="engagement-models" aria-labelledby="engagement-title" className="section-y scroll-mt-36 bg-white">
        <div className="container-x">
          <SectionHeading
            id="engagement-title"
            eyebrow="Engagement models"
            title="Which engagement fits you?"
            description="Our three models serve different clients. The process — discovery, matching, evaluation and allocation — stays the same."
          />

          {/* Comparison */}
          <div className="mt-12 overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
              <caption className="sr-only">Comparison of engagement models</caption>
              <thead className="bg-ice">
                <tr>
                  <th scope="col" className="w-40 p-4 font-semibold text-muted">
                    <span className="sr-only">Aspect</span>
                  </th>
                  {ENGAGEMENT_MODELS.map((m) => (
                    <th key={m.id} scope="col" className="p-4 font-display text-base font-bold text-ink">
                      <a href={`#${m.anchor}`} className="hover:text-brand-600">
                        {m.title}
                      </a>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-t border-line">
                    <th scope="row" className="p-4 align-top font-semibold text-navy-800">
                      {row.label}
                    </th>
                    <td className="p-4 align-top">{row.agency}</td>
                    <td className="p-4 align-top">{row.individual}</td>
                    <td className="p-4 align-top">{row.organization}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-16 space-y-6">
            {ENGAGEMENT_MODELS.map((m, i) => {
              const Icon = m.icon
              return (
                <Reveal key={m.id}>
                  <article
                    id={m.anchor}
                    aria-labelledby={`${m.anchor}-title`}
                    className={cn(
                      'grid scroll-mt-36 gap-8 rounded-2xl border p-7 sm:p-10 lg:grid-cols-[1fr_1fr] lg:gap-14',
                      i === 0 ? 'border-navy-800 bg-navy-800 text-brand-100/85' : i === 1 ? 'border-line bg-white shadow-card' : 'border-brand-100 bg-brand-50',
                    )}
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            'inline-flex size-12 items-center justify-center rounded-xl ring-1',
                            i === 0 ? 'bg-white/10 text-brand-300 ring-white/15' : 'bg-white text-brand-600 ring-brand-100',
                          )}
                        >
                          <Icon className="size-6" aria-hidden="true" />
                        </span>
                        <span className={cn('text-xs font-bold tracking-[0.16em] uppercase', i === 0 ? 'text-brand-300' : 'text-brand-600')}>
                          {m.eyebrow}
                        </span>
                      </div>
                      <h3 id={`${m.anchor}-title`} className={cn('mt-6 text-2xl font-bold sm:text-3xl', i === 0 && 'text-white')}>
                        {m.title}
                      </h3>
                      <p className={cn('mt-2 font-medium', i === 0 ? 'text-brand-200' : 'text-brand-600')}>{m.audience}</p>
                      <p className="mt-5 leading-relaxed">{m.summary}</p>
                      <div className="mt-8 flex flex-wrap gap-3">
                        <ButtonLink to={contactHref({ type: m.id })} variant={i === 0 ? 'light' : 'primary'}>
                          {m.cta} <ArrowRight className="size-4" aria-hidden="true" />
                        </ButtonLink>
                        <WhatsAppButton topic={m.title.toLowerCase()} variant={i === 0 ? 'outline-light' : 'secondary'} />
                      </div>
                    </div>
                    <div>
                      <h4 className={cn('font-display text-sm font-bold tracking-wide uppercase', i === 0 ? 'text-white' : 'text-navy-800')}>
                        What this includes
                      </h4>
                      <ul className="mt-5 space-y-4">
                        {m.points.map((p) => (
                          <li key={p} className="flex gap-3">
                            <Check className={cn('mt-0.5 size-5 shrink-0', i === 0 ? 'text-brand-300' : 'text-brand-500')} aria-hidden="true" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>

          <p className="mt-8 flex items-start gap-2 text-sm text-muted">
            <CircleHelp className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            Individual technical support is guidance and assistance for your own work. We do not impersonate clients,
            access systems without authorization, or complete assessments or interviews on anyone's behalf.
          </p>
        </div>
      </section>

      {/* Service categories */}
      <section aria-labelledby="categories-title" className="section-y border-t border-line bg-ice">
        <div className="container-x">
          <SectionHeading
            id="categories-title"
            eyebrow="Technology specializations"
            title="Service categories"
            description="Each category below lists typical requirements we help with. These are examples — not an exhaustive list."
          />
          <div className="mt-14 space-y-6">
            {SERVICES.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.id}>
                  <article
                    id={s.id}
                    aria-labelledby={`${s.id}-title`}
                    className="grid scroll-mt-36 gap-8 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-9 lg:grid-cols-[1.1fr_1fr] lg:gap-14"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-4">
                        <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                          <Icon className="size-6" aria-hidden="true" />
                        </span>
                        <span className="font-display text-sm font-bold text-brand-400">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 id={`${s.id}-title`} className="mt-5 text-2xl font-bold">
                        {s.title}
                      </h3>
                      <p className="mt-3 leading-relaxed">{s.overview}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {s.capabilities.map((c) => (
                          <li key={c} className="rounded-md bg-ice px-2.5 py-1 text-xs font-medium text-navy-700 ring-1 ring-line">
                            {c}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7 flex flex-wrap items-center gap-3">
                        <ButtonLink to={contactHref({ service: s.id })} className="py-2.5 text-center whitespace-normal!">
                          Enquire about {s.shortTitle}
                        </ButtonLink>
                        <WhatsAppButton topic={s.shortTitle} variant="ghost" label="WhatsApp" className="px-2" />
                      </div>
                    </div>
                    <div className="rounded-xl bg-ice p-6">
                      <h4 className="font-display text-sm font-bold tracking-wide text-navy-800 uppercase">Example requirements</h4>
                      <ul className="mt-4 space-y-3 text-sm">
                        {s.examples.map((e) => (
                          <li key={e} className="flex gap-3">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-400" aria-hidden="true" />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
          <p className="mt-10 text-center text-sm text-muted">
            Technology names are mentioned only to describe the skills involved and do not imply any partnership with
            their owners. Not sure which category fits?{' '}
            <Link to="/contact" className="font-semibold text-brand-600 hover:text-navy-800">
              Describe your requirement
            </Link>{' '}
            and we will guide you.
          </p>
        </div>
      </section>

      <ProcessTimeline />
      <FinalCTA />
    </>
  )
}
