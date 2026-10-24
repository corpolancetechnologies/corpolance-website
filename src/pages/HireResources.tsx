import { Link } from 'react-router'
import { ArrowRight, Check } from 'lucide-react'
import { HIRE_BENEFITS, HIRE_FAQS, HIRE_STEPS, RESOURCE_ROLES } from '../data/audiences'
import { PAGES, useSeo } from '../lib/seo'
import { buttonClass } from '../components/common/buttonStyles'
import { SectionHeading } from '../components/common/SectionHeading'
import { WhatsAppButton } from '../components/common/WhatsAppButton'
import { PageHero } from '../components/sections/PageHero'
import { FeatureGrid } from '../components/sections/FeatureGrid'
import { ProcessTimeline } from '../components/sections/ProcessTimeline'
import { FAQAccordion } from '../components/sections/FAQAccordion'
import { EnquirySection } from '../components/contact/EnquirySection'

function HeroPanel() {
  return (
    <div className="card animate-rise p-7 [animation-delay:120ms]" aria-hidden="true">
      <p className="text-xs font-bold tracking-[0.14em] text-brand-500 uppercase">Resource request</p>
      <dl className="mt-4 space-y-3 text-sm">
        {[
          ['Role', 'Data Engineer'],
          ['Skills', 'Databricks · PySpark · Azure'],
          ['Engagement', 'Project-based, ~4 months'],
          ['Next step', 'Technical evaluation'],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 border-b border-dashed border-line pb-3 last:border-0 last:pb-0">
            <dt className="text-muted">{k}</dt>
            <dd className="text-right font-medium text-ink">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 flex items-center gap-2 rounded-md bg-brand-50 px-3 py-2 text-xs font-medium text-brand-700">
        <Check className="size-3.5" />
        Terms agreed before allocation
      </p>
    </div>
  )
}

export default function HireResources() {
  useSeo(PAGES.hire)
  return (
    <>
      <PageHero
        breadcrumb="Hire IT Resources"
        eyebrow="For organizations"
        title="Find Technical Resources for Your Project Requirements"
        description="Explore technical professionals for your development projects, specialist requirements, or additional delivery capacity. Corpolance helps organizations discuss their needs and evaluate suitable resources before allocation."
        visual={<HeroPanel />}
      >
        <a href="#enquiry" className={buttonClass('primary', 'lg')}>
          Discuss Your Resource Requirement <ArrowRight className="size-4" aria-hidden="true" />
        </a>
        <WhatsAppButton topic="hiring a freelance IT resource" size="lg" />
      </PageHero>

      <section aria-labelledby="roles-title" className="section-y bg-white">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              id="roles-title"
              eyebrow="Resource categories"
              title="Technical roles you can request"
              description="Commonly requested roles. Availability for a specific skill set is confirmed for each requirement."
            />
            <Link to="/services" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-navy-800">
              Explore all services <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12">
            <FeatureGrid items={RESOURCE_ROLES} columns={5} />
          </div>
        </div>
      </section>

      <section aria-labelledby="benefits-title" className="section-y border-t border-line bg-ice">
        <div className="container-x">
          <SectionHeading id="benefits-title" eyebrow="Why organizations work with us" title="A considered way to add technical capacity" />
          <div className="mt-12">
            <FeatureGrid items={HIRE_BENEFITS} columns={3} />
          </div>
        </div>
      </section>

      <ProcessTimeline
        eyebrow="How engagement works"
        title="From requirement to confirmed engagement"
        description="We confirm suitability, availability and terms with you before any resource is allocated."
        steps={HIRE_STEPS}
        ctaLabel="Discuss Your Resource Requirement"
        ctaTo="#enquiry"
        ctaNote="We don't promise immediate placement — availability is confirmed per requirement."
      />

      <FAQAccordion
        items={HIRE_FAQS}
        title="Questions about hiring IT resources"
        description="More answers are available on our FAQ page."
        className="border-t border-line bg-white"
        aside={
          <Link to="/faq" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-navy-800">
            View all FAQs <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        }
      />

      <EnquirySection
        type="organization"
        eyebrow="Resource enquiry"
        title="Discuss your resource requirement"
        description="Share the role, skills and engagement you have in mind. We'll prepare a message for you to send on WhatsApp, or you can send it by email."
        whatsappTopic="hiring a freelance IT resource"
      />
    </>
  )
}
