import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { HOME_FAQS } from '../data/content'
import { PAGES, useSeo } from '../lib/seo'
import { WhatsAppButton } from '../components/common/WhatsAppButton'
import { Hero } from '../components/sections/Hero'
import { StatsSection } from '../components/sections/StatsSection'
import { EngagementModels } from '../components/sections/EngagementModels'
import { ServicesGrid } from '../components/sections/ServicesGrid'
import { ProcessTimeline } from '../components/sections/ProcessTimeline'
import { WhyChoose } from '../components/sections/WhyChoose'
import { ScenariosSection } from '../components/sections/ScenariosSection'
import { ApproachSection } from '../components/sections/ApproachSection'
import { FAQAccordion } from '../components/sections/FAQAccordion'
import { FinalCTA } from '../components/sections/FinalCTA'

export default function Home() {
  useSeo(PAGES.home)
  return (
    <>
      <Hero />
      <StatsSection />
      <EngagementModels />
      <ServicesGrid />
      <ProcessTimeline
        ctaLabel="See How We Work"
        ctaTo="/how-we-work"
        description="We first understand the requirement, identify a suitable professional, arrange a technical evaluation, and coordinate allocation only after mutual approval."
      />
      <WhyChoose />
      <ScenariosSection />
      <ApproachSection />
      <FAQAccordion
        items={HOME_FAQS}
        className="bg-white"
        aside={
          <>
            <Link
              to="/faq"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-line px-5 text-sm font-semibold text-navy-800 hover:border-brand-300 hover:bg-brand-50"
            >
              View all FAQs <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <WhatsAppButton variant="ghost" label="Ask on WhatsApp" className="px-2" />
          </>
        }
      />
      <FinalCTA
        title="Let's Find the Right Technical Expertise for Your Requirement."
        text="Tell us about your project, technical challenge, or resource requirement. Our team will discuss your needs and explain the next steps."
        primaryLabel="Discuss Your Requirement"
        whatsappLabel="WhatsApp Us"
      />
    </>
  )
}
