import { Link } from 'react-router'
import { ArrowRight, Check, Clock3, FileSignature, MessageSquareText } from 'lucide-react'
import { ENGAGEMENT_MODELS, PROCESS_STEPS } from '../data/content'
import { PAGES, useSeo } from '../lib/seo'
import { ButtonLink } from '../components/common/Button'
import { Reveal } from '../components/common/Reveal'
import { SectionHeading } from '../components/common/SectionHeading'
import { WhatsAppButton } from '../components/common/WhatsAppButton'
import { PageHero } from '../components/sections/PageHero'
import { ProcessTimeline } from '../components/sections/ProcessTimeline'
import { FinalCTA } from '../components/sections/FinalCTA'

const PREPARE = [
  'What you are trying to achieve, and why now',
  'The technologies, tools and environment involved',
  'Scope: a specific issue, a defined project or ongoing work',
  'Required skills and level of experience',
  'Timeline, availability and preferred meeting times (with time zone)',
  'Engagement expectations, if you already have them',
]

const DETAILS = [
  {
    icon: MessageSquareText,
    title: 'How requirements are clarified',
    text: 'In the discovery meeting we ask questions until the requirement is specific enough to match: the problem or deliverable, the stack, the experience it needs and how success will be judged. If something is unclear, we say so rather than guess.',
  },
  {
    icon: FileSignature,
    title: 'How scope and terms are agreed',
    text: 'Once you have evaluated and approved a professional, we confirm the scope, working arrangements, communication, availability and terms with you. Allocation happens only after mutual approval.',
  },
  {
    icon: Clock3,
    title: 'Availability and timing',
    text: 'How quickly a suitable professional can be identified depends on the specific skills, scope and timing involved. We confirm availability for each requirement rather than promising fixed turnaround times.',
  },
]

export default function HowWeWork() {
  useSeo(PAGES.howWeWork)
  return (
    <>
      <PageHero
        breadcrumb="How We Work"
        eyebrow="How we work"
        title="A Clear Process for Finding the Right Technical Expertise"
        description="Every engagement — for professionals, agencies and organizations — follows the same four stages. You understand what happens next at each step, and you evaluate the proposed professional before anything is allocated."
      >
        <ButtonLink to="/contact" size="lg">
          Schedule a Requirement Discussion <ArrowRight className="size-4" aria-hidden="true" />
        </ButtonLink>
        <WhatsAppButton size="lg" />
      </PageHero>

      <ProcessTimeline
        eyebrow="Four stages"
        title="From first conversation to kick-off"
        description="A structured sequence that keeps you informed and in control."
        steps={PROCESS_STEPS}
        ctaLabel="Schedule a Requirement Discussion"
      />

      <section aria-labelledby="prepare-title" className="section-y border-t border-line bg-ice">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              id="prepare-title"
              eyebrow="Before the first meeting"
              title="What to prepare"
              description="You don't need everything below — a rough outline is enough to start. The more context you share, the more productive the first discussion."
            />
            <p className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
              Please don't share passwords, credentials or confidential data in enquiry forms or messages.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
              {PREPARE.map((p) => (
                <li key={p} className="flex gap-4 p-5 text-ink">
                  <Check className="mt-0.5 size-5 shrink-0 text-brand-500" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="details-title" className="section-y bg-white">
        <div className="container-x">
          <SectionHeading id="details-title" eyebrow="The details" title="Clarity at every stage" />
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {DETAILS.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 80} className="h-full">
                <div className="h-full rounded-2xl border border-line p-7">
                  <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="paths-title" className="section-y border-t border-line bg-ice">
        <div className="container-x">
          <SectionHeading
            id="paths-title"
            eyebrow="One process, three engagement models"
            title="Find the path that fits you"
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {ENGAGEMENT_MODELS.map((m) => {
              const Icon = m.icon
              return (
                <li key={m.id}>
                  <Link
                    to={m.path}
                    className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-brand-200 hover:shadow-lift"
                  >
                    <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="mt-4 font-display text-lg font-bold text-ink">{m.homeTitle}</span>
                    <span className="mt-2 flex-1 text-sm leading-relaxed text-body">{m.homeSummary}</span>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                      {m.homeCta} <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <FinalCTA
        title="Ready to start with a requirement discussion?"
        text="Tell us what you need. We'll arrange a meeting to understand the requirement and explain what happens next."
        primaryLabel="Schedule a Requirement Discussion"
        whatsappLabel="WhatsApp Us"
      />
    </>
  )
}
