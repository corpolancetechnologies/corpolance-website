import { Link } from 'react-router'
import { ArrowRight, Check, Compass, Telescope } from 'lucide-react'
import { SITE, STATS } from '../config/site'
import { ENGAGEMENT_MODELS } from '../data/content'
import { contactHref } from '../data/services'
import {
  AMBITIONS,
  AUDIENCE_COPY,
  MISSION_COMMITMENTS,
  MISSION_STATEMENT,
  MISSION_STEPS,
  MISSION_SUPPORT,
  VALUES,
  VISION_STATEMENT,
  VISION_SUPPORT,
} from '../data/missionVision'
import { PAGES, useSeo } from '../lib/seo'
import { ButtonLink } from '../components/common/Button'
import { Reveal } from '../components/common/Reveal'
import { SectionHeading } from '../components/common/SectionHeading'
import { PageHero } from '../components/sections/PageHero'
import { ProcessTimeline } from '../components/sections/ProcessTimeline'
import { FinalCTA } from '../components/sections/FinalCTA'

/** Decorative hero composition: mission (today) and vision (tomorrow) joined by the logo's circuit motif. */
function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-md" aria-hidden="true">
      <svg viewBox="0 0 120 260" className="absolute top-10 -left-2 h-[calc(100%-5rem)] w-16 text-brand-300" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path d="M60 0v90l-24 24v32l24 24v90" />
        <circle cx="36" cy="130" r="7" className="fill-white" />
      </svg>
      <div className="relative space-y-5 pl-14">
        <div className="card animate-rise p-6 [animation-delay:150ms]">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <Compass className="size-5" />
            </span>
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-brand-500 uppercase">Mission · Today</p>
              <p className="font-display text-base font-bold text-ink">Understand before recommending</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 pl-6 text-xs font-medium text-muted">
          <img src="/images/logo-mark.png" alt="" width={198} height={205} className="size-7" />
          Requirement · Match · Evaluate · Collaborate
        </div>
        <div className="animate-rise rounded-xl bg-navy-800 p-6 text-white shadow-lift [animation-delay:300ms]">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-lg bg-white/10 text-brand-300 ring-1 ring-white/15">
              <Telescope className="size-5" />
            </span>
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-brand-300 uppercase">Vision · Tomorrow</p>
              <p className="font-display text-base font-bold">Accessible expertise, worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MissionVision() {
  useSeo(PAGES.missionVision)
  const stats = STATS.filter((s) => !('noCount' in s))

  return (
    <>
      <PageHero
        breadcrumb="Mission & Vision"
        eyebrow="Our purpose. Our direction."
        title="Our Mission & Vision"
        description="At Corpolance Technologies, we believe the right technical expertise helps individuals, agencies, and organizations work through complex challenges and move their projects forward. Our mission defines the value we aim to deliver today; our vision describes the future we want to build through technology, collaboration, and lasting professional relationships."
        visual={<HeroVisual />}
      >
        <ButtonLink to="/services" size="lg">
          Explore Our Services <ArrowRight className="size-4" aria-hidden="true" />
        </ButtonLink>
        <ButtonLink to="/contact" variant="secondary" size="lg">
          Contact Us
        </ButtonLink>
      </PageHero>

      {/* Mission — editorial, light */}
      <section aria-labelledby="mission-title" className="section-y bg-white">
        <div className="container-x grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">Why we exist</p>
            <h2 id="mission-title" className="text-3xl font-bold sm:text-4xl lg:text-[2.6rem]">
              Our Mission
            </h2>
            <blockquote className="mt-8 border-l-4 border-brand-500 pl-6 font-display text-xl leading-snug font-semibold text-navy-800 sm:text-[1.35rem] lg:text-2xl">
              {MISSION_STATEMENT}
            </blockquote>
            <p className="mt-8 max-w-2xl text-base leading-relaxed sm:text-lg">{MISSION_SUPPORT}</p>
          </Reveal>

          <Reveal delay={120} className="lg:pt-14">
            <div className="rounded-2xl border border-line bg-ice p-7 sm:p-8">
              <h3 className="text-lg font-bold">What our mission means in practice</h3>
              <p className="mt-2 text-sm">How we work with clients and partners today:</p>
              <ul className="mt-6 space-y-4">
                {MISSION_COMMITMENTS.map((c) => (
                  <li key={c} className="flex gap-3 text-sm leading-relaxed text-ink">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision — spacious, dark, global */}
      <section aria-labelledby="vision-title" className="section-y relative overflow-hidden bg-navy-900 text-brand-100/85">
        <img
          src="/images/world-dots.svg"
          alt=""
          aria-hidden="true"
          width={1000}
          height={470}
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute top-1/2 left-1/2 w-[64rem] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.12]"
        />
        <div className="container-x relative">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow mb-4 justify-center text-brand-300 before:bg-brand-300">Where we are heading</p>
            <h2 id="vision-title" className="text-3xl font-bold text-white sm:text-4xl lg:text-[2.6rem]">
              Our Vision
            </h2>
            <p className="mt-8 font-display text-xl leading-snug font-semibold text-white sm:text-[1.35rem] lg:text-2xl">
              {VISION_STATEMENT}
            </p>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed sm:text-lg">{VISION_SUPPORT}</p>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 md:grid-cols-3">
            {AMBITIONS.map(({ title, text, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 90} className="bg-navy-900/95 p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-11 items-center justify-center rounded-lg bg-white/8 text-brand-300 ring-1 ring-white/10">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm font-bold text-brand-300/70">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{text}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-brand-100/60">
            These ambitions describe our intended direction and areas of development — not outcomes already achieved.
          </p>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-title" className="section-y bg-ice">
        <div className="container-x">
          <SectionHeading
            id="values-title"
            eyebrow="Our core values"
            title="The Principles Behind Our Work"
            description="Our mission and vision are guided by the principles that shape how we engage with clients, partners, and technical professionals."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map(({ title, text, icon: Icon }, i) => (
              <Reveal as="li" key={title} delay={(i % 3) * 80} className="h-full">
                <article className="group flex h-full flex-col rounded-xl border border-line bg-white p-7 transition-[border-color,box-shadow] duration-300 hover:border-brand-200 hover:shadow-lift">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm font-bold text-brand-300">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{text}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Mission in action — reuses the shared process timeline */}
      <ProcessTimeline
        eyebrow="Our mission in action"
        title="Turning Our Mission Into Meaningful Engagements"
        description="Our principles become practical steps for every client: we understand the requirement, match relevant expertise, let you evaluate the proposed professional, and only then move forward together."
        steps={MISSION_STEPS}
        ctaLabel="Discuss Your Requirement"
      />

      {/* Audiences */}
      <section aria-labelledby="audiences-title" className="section-y border-t border-line bg-white">
        <div className="container-x">
          <SectionHeading
            id="audiences-title"
            eyebrow="Who we work with"
            title="Built Around Different Technical Needs"
            description="Our mission applies differently to each audience we serve, through three distinct engagement models."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ENGAGEMENT_MODELS.map((m, i) => {
              const copy = AUDIENCE_COPY[m.id]
              const Icon = m.icon
              return (
                <Reveal key={m.id} delay={i * 80} className="h-full">
                  <article className="flex h-full flex-col border-t-2 border-brand-500 pt-7">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="rounded-full bg-ice px-2.5 py-1 text-xs font-semibold text-navy-700 ring-1 ring-line">{m.eyebrow}</span>
                    </div>
                    <h3 className="mt-5 text-xl font-bold">{copy.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed">{copy.text}</p>
                    <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-1 pt-6 text-sm font-semibold">
                      <Link to={m.path} className="inline-flex min-h-11 items-center gap-1.5 text-brand-600 hover:text-navy-800">
                        {copy.link} <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                      <Link to={contactHref({ type: m.id })} className="inline-flex min-h-11 items-center text-muted hover:text-navy-800">
                        Enquire<span className="sr-only"> about {m.title}</span>
                      </Link>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Journey and global outlook */}
      <section aria-labelledby="journey-title" className="section-y bg-ice">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              id="journey-title"
              eyebrow="Our journey"
              title="From India, Working With Clients Across the Globe"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed sm:text-lg">
              <p>
                Corpolance Technologies has operated from India since {SITE.foundedYear}. We serve clients in India and in
                international markets including the United States, Europe, and Canada — remotely, with meetings arranged
                around each client's time zone. We do not operate offices outside India.
              </p>
              <p>
                Learn more{' '}
                <Link to="/about" className="font-semibold text-brand-600 underline-offset-2 hover:underline">
                  about our company
                </Link>{' '}
                or see the full range of{' '}
                <Link to="/services" className="font-semibold text-brand-600 underline-offset-2 hover:underline">
                  technical services we support
                </Link>
                .
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-line bg-white p-7 shadow-card sm:p-8">
              <dl className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-sm font-medium text-muted">{s.label}</dt>
                    <dd className="mt-1 font-display text-4xl font-extrabold tracking-tight text-navy-800">
                      {s.value}
                      <span className="text-brand-500">{s.suffix}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 border-t border-line pt-5 text-xs leading-relaxed text-muted">
                These figures reflect our current stated scale. Technical resources are professionals available through
                our network, engaged on a basis suited to each requirement. Clients include those served directly and
                through agency partners, across different engagement models.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA
        title="Let's Build the Right Technical Partnership"
        text="Whether you need technical assistance, a specialized developer, a freelance IT resource, or a dependable agency partner, start by sharing your requirement with our team."
        primaryLabel="Discuss Your Requirement"
        showServices
        whatsappLabel="WhatsApp Us"
      />
    </>
  )
}
