import { Link } from 'react-router'
import { ArrowRight, Compass, Eye, Handshake, Lock, MessagesSquare, Target } from 'lucide-react'
import { SITE } from '../config/site'
import { ENGAGEMENT_MODELS } from '../data/content'
import { SERVICES, contactHref } from '../data/services'
import { PAGES, useSeo } from '../lib/seo'
import { ButtonLink } from '../components/common/Button'
import { Reveal } from '../components/common/Reveal'
import { SectionHeading } from '../components/common/SectionHeading'
import { WhatsAppButton } from '../components/common/WhatsAppButton'
import { PageHero } from '../components/sections/PageHero'
import { StatsSection } from '../components/sections/StatsSection'
import { FinalCTA } from '../components/sections/FinalCTA'

const values = [
  { icon: Target, title: 'Requirement first', text: 'We take time to understand the actual problem before proposing anyone.' },
  { icon: Eye, title: 'Transparency', text: 'Clients evaluate proposed professionals and decide before allocation.' },
  { icon: Lock, title: 'Confidentiality', text: 'Requirement details and project context are handled with discretion.' },
  { icon: MessagesSquare, title: 'Clear communication', text: 'Direct conversations with our team, coordinated around your time zone.' },
  { icon: Handshake, title: 'Long-term relationships', text: 'We aim to be a partner clients and agencies return to, not a one-off vendor.' },
  { icon: Compass, title: 'Honest guidance', text: 'If a requirement is outside what we can support well, we say so.' },
]

const approach = [
  ['Listen', 'A requirement discussion covering objectives, stack, scope, timeline and preferences.'],
  ['Match', 'Our team identifies a professional whose skills and experience fit the requirement.'],
  ['Evaluate', 'You meet the proposed professional and assess their relevant capabilities.'],
  ['Coordinate', 'After mutual approval, we confirm scope, communication and availability.'],
]

export default function About() {
  useSeo(PAGES.about)
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="About Corpolance"
        title={
          <>
            Connecting technical expertise with <span className="text-brand-600">real-world requirements</span>
          </>
        }
        description={`Established in India in ${SITE.foundedYear}, Corpolance Technologies helps individual professionals, agencies and organizations access specialized technical assistance and flexible IT resources.`}
      />

      {/* Our story */}
      <section aria-labelledby="story-title" className="section-y bg-white">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHeading id="story-title" eyebrow="Our story" title="Built around a simple observation" />
            <div className="mt-6 space-y-5 text-base leading-relaxed sm:text-lg">
              <p>
                Established in India in {SITE.foundedYear}, Corpolance Technologies focuses on connecting technical
                expertise with the practical requirements of individual professionals, agencies, and organizations. We
                work across a broad range of technology domains, helping clients access specialized technical assistance
                and flexible IT resources.
              </p>
              <p>
                Technical requirements rarely fit neatly into a job description. A data pipeline needs tuning this week;
                a release needs extra testing capacity next month; a professional needs a second pair of experienced eyes
                on a tricky problem today. Finding the right person — quickly, and with confidence — is the hard part.
              </p>
              <p>
                That is the gap we work in. We listen carefully, match requirements with professionals who have relevant
                experience, and let clients evaluate that match before anything is allocated.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:pt-16">
            <figure className="rounded-2xl border border-line bg-ice p-8 sm:p-10">
              <img src={SITE.images.logoFull} alt={`${SITE.name} logo`} width={640} height={185} loading="lazy" className="h-16 w-auto sm:h-20" />
              <blockquote className="mt-8 font-display text-xl leading-snug font-semibold text-navy-800 sm:text-2xl">
                “quietly powering your success” — dependable technical support behind the scenes, so our clients can
                focus on delivering.
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted">
                Operating from India · Serving clients in the United States, Europe, Canada, India and beyond
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <StatsSection />

      {/* What we do / who we serve */}
      <section aria-labelledby="serve-title" className="section-y bg-white">
        <div className="container-x">
          <SectionHeading
            id="serve-title"
            eyebrow="What we do & who we serve"
            title="Three audiences, one consistent approach"
            description="We provide technical support and IT resources through three engagement models, each designed around a different kind of client."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ENGAGEMENT_MODELS.map((m, i) => {
              const Icon = m.icon
              return (
                <Reveal key={m.id} delay={i * 80} className="h-full">
                  <article className="card flex h-full flex-col p-7">
                    <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold">{m.title}</h3>
                    <p className="mt-1 text-sm font-medium text-brand-600">{m.audience}</p>
                    <p className="mt-4 text-sm leading-relaxed">{m.summary}</p>
                    <ButtonLink to={`/services#${m.anchor}`} variant="ghost" className="mt-auto self-start pt-5">
                      How it works <ArrowRight className="size-4" aria-hidden="true" />
                    </ButtonLink>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section aria-labelledby="expertise-title" className="section-y bg-ice">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            id="expertise-title"
            eyebrow="Our technology expertise"
            title="Breadth across domains, depth where it counts"
            description="Our network of 120+ technical resources spans application development, quality engineering, data, AI, enterprise platforms and cloud."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {SERVICES.map((s) => {
              const Icon = s.icon
              return (
                <li key={s.id}>
                  <Link
                    to={`/services#${s.id}`}
                    className="flex min-h-14 items-center gap-3 rounded-lg border border-line bg-white px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand-200 hover:text-brand-600"
                  >
                    <Icon className="size-4.5 shrink-0 text-brand-500" aria-hidden="true" />
                    {s.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Delivery approach */}
      <section aria-labelledby="approach-title" className="section-y bg-white">
        <div className="container-x">
          <SectionHeading
            id="approach-title"
            align="center"
            eyebrow="Our delivery approach"
            title="Structured, transparent and client-led"
          />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {approach.map(([title, text], i) => (
              <li key={title} className="bg-white p-7">
                <span className="font-display text-sm font-bold text-brand-500">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-title" className="section-y bg-ice">
        <div className="container-x">
          <SectionHeading id="values-title" eyebrow="Our values" title="What guides how we work" />
          <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={(i % 3) * 80} className="flex gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-white text-brand-600 shadow-card ring-1 ring-line">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Confidentiality commitment */}
      <section aria-labelledby="commitment-title" className="section-y bg-white">
        <div className="container-x">
          <div className="grid items-center gap-10 rounded-2xl border border-brand-100 bg-brand-50 p-8 sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:gap-12">
            <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-card">
              <Lock className="size-7" aria-hidden="true" />
            </span>
            <div>
              <h2 id="commitment-title" className="text-2xl font-bold sm:text-3xl">
                Our commitment to professional, confidential engagement
              </h2>
              <p className="mt-4 max-w-3xl leading-relaxed">
                Clients share requirement details, project context and sometimes sensitive technical problems with us. We
                use that information to understand and respond to the requirement, share it only as needed to arrange
                suitable support, and treat it with discretion throughout the engagement.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <ButtonLink to={contactHref()}>Talk to our team</ButtonLink>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
