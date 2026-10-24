import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { ENGAGEMENT_MODELS } from '../data/content'
import { PAGES, useSeo } from '../lib/seo'
import { ButtonLink } from '../components/common/Button'
import { SectionHeading } from '../components/common/SectionHeading'
import { WhatsAppButton } from '../components/common/WhatsAppButton'
import { PageHero } from '../components/sections/PageHero'
import { ServicesGrid } from '../components/sections/ServicesGrid'
import { EngagementModels } from '../components/sections/EngagementModels'
import { ProcessTimeline } from '../components/sections/ProcessTimeline'
import { FinalCTA } from '../components/sections/FinalCTA'

const comparison: { label: string; values: Record<string, string> }[] = [
  {
    label: 'Who it is for',
    values: {
      individual: 'Working professionals',
      agency: 'Agencies, consulting firms and service providers',
      organization: 'Companies and teams',
    },
  },
  {
    label: 'Typical need',
    values: {
      individual: 'Guidance and hands-on help with a technical problem or project',
      agency: 'Technical resources to support your own client engagements',
      organization: 'Additional technical capacity for a project or ongoing work',
    },
  },
  {
    label: 'How it runs',
    values: {
      individual: 'Direct engagement with a matched specialist',
      agency: 'Ongoing B2B relationship, requirement by requirement',
      organization: 'Freelance or contract engagement agreed with your team',
    },
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
        description="Explore our technology specializations and the three ways to engage with us. Every engagement starts with understanding your requirement and gives you the chance to evaluate the proposed professional."
      >
        <ButtonLink to="/contact" size="lg">
          Discuss Your Requirement <ArrowRight className="size-4" aria-hidden="true" />
        </ButtonLink>
        <WhatsAppButton size="lg" />
      </PageHero>

      <ServicesGrid
        eyebrow="Technology specializations"
        title="Ten areas of technical expertise"
        description="Select a service to see the challenges it addresses, example requirements, typical technologies and how we can help."
        showAllLink={false}
        className="bg-white"
      />

      <EngagementModels
        eyebrow="Engagement models"
        title="Choose how you'd like to work with us"
        description="Our three models serve different clients. The process — discovery, matching, evaluation and allocation — stays the same."
        className="border-t border-line bg-ice"
      />

      <section aria-labelledby="compare-title" className="bg-ice pb-20 sm:pb-24 lg:pb-28">
        <div className="container-x">
          <SectionHeading id="compare-title" title="At a glance" className="[&_h2]:text-2xl sm:[&_h2]:text-3xl" />
          <div className="mt-8 overflow-x-auto rounded-xl border border-line bg-white">
            <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
              <caption className="sr-only">Comparison of engagement models</caption>
              <thead className="bg-white">
                <tr>
                  <th scope="col" className="w-40 p-4">
                    <span className="sr-only">Aspect</span>
                  </th>
                  {ENGAGEMENT_MODELS.map((m) => (
                    <th key={m.id} scope="col" className="p-4 font-display text-base font-bold text-ink">
                      <Link to={m.path} className="hover:text-brand-600">
                        {m.homeTitle}
                      </Link>
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
                    {ENGAGEMENT_MODELS.map((m) => (
                      <td key={m.id} className="p-4 align-top">
                        {row.values[m.id]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted">
            Individual technical support is guidance and assistance for your own work. We do not impersonate clients,
            access systems without authorization, or complete assessments or interviews on anyone's behalf.
          </p>
        </div>
      </section>

      <ProcessTimeline ctaLabel="See How We Work" ctaTo="/how-we-work" />
      <FinalCTA primaryLabel="Discuss Your Requirement" whatsappLabel="WhatsApp Us" />
    </>
  )
}
