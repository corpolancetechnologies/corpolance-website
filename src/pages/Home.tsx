import { PAGES, useSeo } from '../lib/seo'
import { Hero } from '../components/sections/Hero'
import { StatsSection } from '../components/sections/StatsSection'
import { EngagementModels } from '../components/sections/EngagementModels'
import { ServicesGrid } from '../components/sections/ServicesGrid'
import { ProcessTimeline } from '../components/sections/ProcessTimeline'
import { WhyChoose } from '../components/sections/WhyChoose'
import { GlobalDelivery } from '../components/sections/GlobalDelivery'
import { Testimonials } from '../components/sections/Testimonials'
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
      <ProcessTimeline />
      <WhyChoose />
      <GlobalDelivery />
      <Testimonials />
      <FAQAccordion />
      <FinalCTA />
    </>
  )
}
