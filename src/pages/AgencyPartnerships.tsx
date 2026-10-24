import { Link } from 'react-router'
import { ArrowRight, ChevronRight, Lightbulb } from 'lucide-react'
import { STATS } from '../config/site'
import { AGENCY_FAQS, AGENCY_SCENARIOS, AGENCY_STEPS, AGENCY_VALUE } from '../data/audiences'
import { PAGES, useSeo } from '../lib/seo'
import { buttonClass } from '../components/common/buttonStyles'
import { Reveal } from '../components/common/Reveal'
import { SectionHeading } from '../components/common/SectionHeading'
import { WhatsAppButton } from '../components/common/WhatsAppButton'
import { ProcessTimeline } from '../components/sections/ProcessTimeline'
import { FAQAccordion } from '../components/sections/FAQAccordion'
import { EnquirySection } from '../components/contact/EnquirySection'

const agencyStat = STATS.find((s) => s.label === 'Agency Partnerships')!
const resourceStat = STATS.find((s) => s.label === 'Technical Resources')!

export default function AgencyPartnerships() {
  useSeo(PAGES.agency)
  return (
    <>
      {/* Distinctive dark hero */}
      <section className="relative overflow-hidden bg-navy-900 text-brand-100/85">
        <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-25 invert [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <svg
          aria-hidden="true"
          viewBox="0 0 400 300"
          className="absolute -right-16 -bottom-10 hidden w-[30rem] text-brand-500/25 md:block"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        >
          <path d="M60 300V200l60-60h80l50-50V0" />
          <path d="M160 300v-60l40-40h140" />
          <circle cx="356" cy="200" r="14" />
          <circle cx="250" cy="90" r="14" />
        </svg>
        <div className="container-x relative pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pb-24">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-brand-100/60">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-3.5" />
              </li>
              <li aria-current="page" className="font-medium text-white">
                Agency Partnerships
              </li>
            </ol>
          </nav>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow mb-4 text-brand-300 before:bg-brand-300">For agencies</p>
              <h1 className="text-4xl leading-[1.1] font-extrabold tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.3rem]">
                Your Technical Resource Partner for Growing Agency Delivery
              </h1>
              <p className="mt-6 font-display text-xl font-semibold text-brand-200 sm:text-2xl">
                Grow your agency's delivery capacity with the right technical expertise.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
                When new client opportunities arrive, agencies need access to relevant technical skills and delivery
                capacity. Corpolance works with agency partners to understand their resource requirements and identify
                suitable professionals who can support their client engagements.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#enquiry" className={buttonClass('light', 'lg')}>
                  Discuss an Agency Partnership <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <WhatsAppButton topic="an agency partnership" variant="outline-light" size="lg" />
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10">
              {[agencyStat, resourceStat].map((s) => (
                <div key={s.label} className="bg-navy-900/90 p-6">
                  <dt className="text-sm text-brand-100/70">{s.label}</dt>
                  <dd className="mt-1 font-display text-4xl font-extrabold text-white">
                    {s.value}
                    <span className="text-brand-300">{s.suffix}</span>
                  </dd>
                </div>
              ))}
              <div className="col-span-2 bg-navy-900/90 p-6 text-sm leading-relaxed">
                Requirements are discussed one at a time, and every proposed professional is evaluated by you before
                allocation.
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Value */}
      <section aria-labelledby="value-title" className="section-y bg-white">
        <div className="container-x">
          <SectionHeading
            id="value-title"
            eyebrow="How we create value for agencies"
            title="More room to say yes to the right opportunities"
            description="A dependable resource partner gives your agency more flexibility in how it staffs client work."
          />
          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {AGENCY_VALUE.map(({ title, text, icon: Icon }, i) => (
              <Reveal as="li" key={title} delay={(i % 2) * 90} className="h-full">
                <div className="flex h-full gap-5 rounded-2xl border border-line bg-white p-7 shadow-card sm:p-8">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-brand-300">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="mt-2 leading-relaxed">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Outcomes such as additional client wins depend on your agency's own business. We focus on helping you access
            suitable technical expertise.
          </p>
        </div>
      </section>

      {/* Scenarios */}
      <section aria-labelledby="scenarios-title" className="section-y border-t border-line bg-ice">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            id="scenarios-title"
            eyebrow="Typical scenarios"
            title="When agencies usually reach out"
            description="Representative situations — not descriptions of specific client projects."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {AGENCY_SCENARIOS.map((s, i) => (
              <Reveal as="li" key={s} delay={(i % 2) * 80} className="flex gap-4 rounded-xl border border-line bg-white p-5">
                <Lightbulb className="mt-0.5 size-5 shrink-0 text-brand-500" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-ink">{s}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ProcessTimeline
        eyebrow="The partnership process"
        title="Five clear steps from requirement to allocation"
        description="Every requirement follows the same transparent sequence, and you evaluate the proposed professional before anything is allocated."
        steps={AGENCY_STEPS}
        highlight={3}
        ctaLabel="Discuss an Agency Partnership"
        ctaTo="#enquiry"
        ctaNote="Terms are agreed with you before any allocation."
      />

      <FAQAccordion
        items={AGENCY_FAQS}
        title="Agency partnership questions"
        description="Common questions from agencies considering a resource partner."
        className="border-t border-line bg-white"
        aside={
          <Link to="/faq" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-navy-800">
            View all FAQs <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        }
      />

      <EnquirySection
        type="agency"
        eyebrow="Agency enquiry"
        title="Discuss an agency partnership"
        description="Tell us about your agency and the resource requirement. We'll prepare a message for you to send on WhatsApp, or you can send it by email."
        whatsappTopic="an agency partnership"
      />
    </>
  )
}
