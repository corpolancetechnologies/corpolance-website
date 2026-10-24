import { Link, useParams } from 'react-router'
import { AlertTriangle, ArrowRight, ArrowUpRight, Check, Lightbulb } from 'lucide-react'
import { SERVICE_GROUPS, contactHref, serviceById, servicePath, type Service } from '../data/services'
import { SERVICE_PAGES, useSeo } from '../lib/seo'
import { ButtonLink } from '../components/common/Button'
import { Reveal } from '../components/common/Reveal'
import { SectionHeading } from '../components/common/SectionHeading'
import { WhatsAppButton } from '../components/common/WhatsAppButton'
import { PageHero } from '../components/sections/PageHero'
import { FAQAccordion } from '../components/sections/FAQAccordion'
import { FinalCTA } from '../components/sections/FinalCTA'
import NotFound from './NotFound'

function AtAGlance({ service }: { service: Service }) {
  const Icon = service.icon
  const group = SERVICE_GROUPS.find((g) => g.id === service.group)
  return (
    <div className="card animate-rise p-7 [animation-delay:120ms]" aria-hidden="true">
      <div className="flex items-center gap-4">
        <span className="inline-flex size-14 items-center justify-center rounded-xl bg-brand-600 text-white">
          <Icon className="size-7" />
        </span>
        <div>
          <p className="text-xs font-bold tracking-[0.14em] text-brand-500 uppercase">{group?.title}</p>
          <p className="font-display text-lg font-bold text-ink">{service.title}</p>
        </div>
      </div>
      <ul className="mt-6 space-y-3 border-t border-line pt-6">
        {service.capabilities.map((c) => (
          <li key={c} className="flex items-center gap-3 text-sm text-ink">
            <Check className="size-4 shrink-0 text-brand-500" />
            {c}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ServiceContent({ service }: { service: Service }) {
  const meta = SERVICE_PAGES.find((p) => p.path === servicePath(service.id))!
  useSeo(meta)
  const enquire = contactHref({ service: service.id })
  const related = service.related.map((id) => serviceById(id)).filter((s): s is Service => Boolean(s))

  return (
    <>
      <PageHero
        breadcrumb={service.title}
        parent={{ label: 'Our Services', to: '/services' }}
        eyebrow={service.title}
        title={service.h1}
        description={service.intro}
        visual={<AtAGlance service={service} />}
      >
        <ButtonLink to={enquire} size="lg">
          {service.cta} <ArrowRight className="size-4" aria-hidden="true" />
        </ButtonLink>
        <WhatsAppButton topic={service.shortTitle} size="lg" />
      </PageHero>

      {/* Problems */}
      <section aria-labelledby="problems-title" className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            id="problems-title"
            eyebrow="Challenges we can help with"
            title="When this kind of support is useful"
            description={`Typical situations where ${service.title} expertise makes a difference.`}
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.problems.map((p, i) => (
              <Reveal as="li" key={p} delay={(i % 2) * 80} className="flex gap-4 rounded-xl border border-line bg-ice p-5">
                <AlertTriangle className="mt-0.5 size-5 shrink-0 text-brand-500" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-ink">{p}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Capabilities */}
      <section aria-labelledby="capabilities-title" className="section-y border-t border-line bg-ice">
        <div className="container-x">
          <SectionHeading id="capabilities-title" eyebrow="Technical capabilities" title="What we can support" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.capabilityDetail.map((c, i) => (
              <Reveal as="li" key={c.title} delay={(i % 3) * 70} className="h-full">
                <div className="h-full rounded-xl border border-line bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-brand-200 hover:shadow-card">
                  <span className="font-display text-sm font-bold text-brand-400">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 text-lg font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Use cases + tools */}
      <section aria-labelledby="usecases-title" className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading id="usecases-title" eyebrow="Example use cases" title="Requirements we commonly see" />
            <ol className="mt-8 space-y-4">
              {service.useCases.map((u, i) => (
                <li key={u} className="flex gap-4">
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-50 font-display text-sm font-bold text-brand-600">
                    {i + 1}
                  </span>
                  <span className="pt-1 leading-relaxed text-ink">{u}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-xs text-muted">Representative examples, not descriptions of specific client projects.</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-line bg-ice p-7 sm:p-8">
              <h2 className="text-xl font-bold">Tools and technologies</h2>
              <p className="mt-2 text-sm">Examples of technologies professionals in our network work with.</p>
              <div className="mt-6 space-y-5">
                {service.tools.map((g, gi) => (
                  <div key={g.label ?? gi}>
                    {g.label && <h3 className="mb-2 text-sm font-bold text-navy-800">{g.label}</h3>}
                    <ul className="flex flex-wrap gap-2">
                      {g.items.map((t) => (
                        <li key={t} className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-navy-700 ring-1 ring-line">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-muted">
                Availability for a specific tool or version is confirmed for each requirement. Product names are used only
                to describe skills and do not imply any partnership with their owners.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Considerations */}
      {service.considerations && (
        <section aria-labelledby="considerations-title" className="bg-navy-900 py-16 text-brand-100/85 sm:py-20">
          <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
            <div className="flex items-start gap-4">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-300 ring-1 ring-white/15">
                <Lightbulb className="size-6" aria-hidden="true" />
              </span>
              <h2 id="considerations-title" className="text-2xl font-bold text-white sm:text-3xl">
                {service.considerations.title}
              </h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {service.considerations.points.map((p) => (
                <li key={p} className="flex gap-3 rounded-lg bg-white/5 p-4 text-sm leading-relaxed ring-1 ring-white/10">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-300" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* How we help */}
      <section aria-labelledby="help-title" className="section-y bg-white">
        <div className="container-x">
          <div className="grid gap-10 rounded-2xl border border-brand-100 bg-brand-50 p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <SectionHeading id="help-title" eyebrow="How Corpolance may help" title="From requirement to the right specialist" />
              <Link
                to="/how-we-work"
                className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-navy-800"
              >
                See our full process <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <ol className="space-y-5">
              {service.howWeHelp.map((h, i) => (
                <li key={h} className="flex gap-4 rounded-xl bg-white p-5 shadow-card">
                  <span className="font-display text-lg font-extrabold text-brand-500">{i + 1}</span>
                  <span className="leading-relaxed text-ink">{h}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {service.faqs.length > 0 && (
        <FAQAccordion
          items={service.faqs}
          title={`${service.title} questions`}
          description="More answers are available on our FAQ page."
          className="border-t border-line bg-white"
          aside={
            <Link to="/faq" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-navy-800">
              View all FAQs <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          }
        />
      )}

      {/* Related services */}
      <section aria-labelledby="related-title" className="section-y border-t border-line bg-ice">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading id="related-title" eyebrow="Related services" title="Often needed alongside" />
            <ButtonLink to="/services" variant="secondary" className="self-start sm:self-auto">
              All services
            </ButtonLink>
          </div>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((r) => {
              const Icon = r.icon
              return (
                <li key={r.id}>
                  <Link
                    to={servicePath(r.id)}
                    className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-brand-200 hover:shadow-lift"
                  >
                    <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="mt-4 flex items-center justify-between gap-2 font-display text-lg font-bold text-ink">
                      {r.title}
                      <ArrowUpRight className="size-4 text-brand-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </span>
                    <span className="mt-2 text-sm leading-relaxed text-body">{r.summary}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <FinalCTA
        title={`Tell us about your ${service.title} requirement.`}
        text="Share what you are working on and the technologies involved. We'll discuss the requirement and explain the next steps before anything is agreed."
        primaryLabel={service.cta}
        primaryTo={enquire}
        whatsappLabel="WhatsApp Us"
      />
    </>
  )
}

export default function ServicePage() {
  const { slug } = useParams()
  const service = serviceById(slug)
  if (!service) return <NotFound />
  return <ServiceContent key={service.id} service={service} />
}
