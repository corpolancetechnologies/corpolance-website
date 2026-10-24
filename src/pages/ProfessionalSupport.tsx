import { Link } from 'react-router'
import { ArrowRight, ClipboardCheck, ShieldAlert, Check } from 'lucide-react'
import { contactHref } from '../data/services'
import { PRO_COVERAGE, PRO_FAQS, PRO_PREPARE, PRO_STEPS } from '../data/audiences'
import { PAGES, useSeo } from '../lib/seo'
import { ButtonLink } from '../components/common/Button'
import { Reveal } from '../components/common/Reveal'
import { SectionHeading } from '../components/common/SectionHeading'
import { WhatsAppButton } from '../components/common/WhatsAppButton'
import { PageHero } from '../components/sections/PageHero'
import { FeatureGrid } from '../components/sections/FeatureGrid'
import { ProcessTimeline } from '../components/sections/ProcessTimeline'
import { FAQAccordion } from '../components/sections/FAQAccordion'
import { FinalCTA } from '../components/sections/FinalCTA'

const enquire = contactHref({ type: 'individual' })

function HeroPanel() {
  return (
    <div className="card animate-rise p-7 [animation-delay:120ms]" aria-hidden="true">
      <p className="text-xs font-bold tracking-[0.14em] text-brand-500 uppercase">A typical request</p>
      <div className="mt-4 rounded-lg bg-ice p-4 font-mono text-xs leading-relaxed text-navy-700 ring-1 ring-line">
        Airflow task fails with a timeout after the upgrade.
        <br />
        Expected: daily load completes by 06:00 UTC.
        <br />
        Stack: Python 3.11 · Airflow 2.x · Snowflake
      </div>
      <ul className="mt-5 space-y-2.5 text-sm text-ink">
        {['Requirement discussed', 'Relevant specialist identified', 'Approach and terms agreed'].map((t) => (
          <li key={t} className="flex items-center gap-2.5">
            <Check className="size-4 text-brand-500" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ProfessionalSupport() {
  useSeo(PAGES.professional)
  return (
    <>
      <PageHero
        breadcrumb="Professional Technical Support"
        eyebrow="For professionals"
        title="Professional Technical Support for Your Technology Challenges"
        description="Get requirement-focused technical assistance and practical guidance from professionals whose skills align with your technology stack and project needs."
        visual={<HeroPanel />}
      >
        <ButtonLink to={enquire} size="lg">
          Discuss Your Requirement <ArrowRight className="size-4" aria-hidden="true" />
        </ButtonLink>
        <WhatsAppButton topic="individual technical support" size="lg" />
      </PageHero>

      <section aria-labelledby="coverage-title" className="section-y bg-white">
        <div className="container-x">
          <SectionHeading
            id="coverage-title"
            eyebrow="What support can cover"
            title="Possible engagement areas"
            description="Support is matched to your requirement. These are areas we commonly help with — availability for a specific technology is confirmed when we discuss your needs."
          />
          <div className="mt-12">
            <FeatureGrid items={PRO_COVERAGE} columns={3} compact />
          </div>
        </div>
      </section>

      <ProcessTimeline
        eyebrow="How it works"
        title="A straightforward way to get the right help"
        description="We understand your challenge first, then propose someone with relevant experience — and nothing proceeds until the approach is agreed."
        steps={PRO_STEPS}
        highlight={3}
        ctaLabel="Discuss Your Requirement"
        ctaTo={enquire}
        ctaNote="The initial discussion helps us understand whether we can help."
        className="border-t border-line bg-ice"
      />

      <section aria-labelledby="prepare-title" className="section-y bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-line bg-white p-7 shadow-card sm:p-9">
            <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <ClipboardCheck className="size-5" aria-hidden="true" />
            </span>
            <h2 id="prepare-title" className="mt-5 text-2xl font-bold">
              What helps the first discussion
            </h2>
            <p className="mt-2">Sharing a little context helps us understand the requirement quickly:</p>
            <ul className="mt-6 space-y-3">
              {PRO_PREPARE.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-ink">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="rounded-2xl border border-amber-200 bg-amber-50 p-7 sm:p-9">
            <span className="inline-flex size-11 items-center justify-center rounded-lg bg-white text-amber-700 ring-1 ring-amber-200">
              <ShieldAlert className="size-5" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-2xl font-bold">Please don't share</h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-amber-950">
              {['Passwords or access credentials', 'Production keys, tokens or connection strings', 'Confidential employer or client data', 'Sensitive system or security details'].map(
                (t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-600" aria-hidden="true" />
                    {t}
                  </li>
                ),
              )}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-amber-950">
              Our support is guidance and assistance for your own work. We do not impersonate anyone, access systems
              without authorization, or complete assessments or interviews on anyone's behalf.
            </p>
          </Reveal>
        </div>
      </section>

      <FAQAccordion
        items={PRO_FAQS}
        title="Questions about technical support"
        description="More answers about how we work are available on our FAQ page."
        className="border-t border-line bg-white"
        aside={
          <Link to="/faq" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-navy-800">
            View all FAQs <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        }
      />

      <FinalCTA
        title="Tell us about the technical challenge you're facing."
        text="Share a short summary and the technologies involved. We'll discuss your requirement and explain the next steps before anything is agreed."
        primaryLabel="Discuss Your Requirement"
        primaryTo={enquire}
        whatsappLabel="WhatsApp Us"
      />
    </>
  )
}
