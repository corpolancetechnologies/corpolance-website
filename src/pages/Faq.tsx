import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { FAQ_GROUPS } from '../data/content'
import { PAGES, useSeo } from '../lib/seo'
import { ButtonLink } from '../components/common/Button'
import { WhatsAppButton } from '../components/common/WhatsAppButton'
import { PageHero } from '../components/sections/PageHero'
import { FaqList } from '../components/sections/FAQAccordion'

const RELATED: Record<string, { label: string; to: string }> = {
  general: { label: 'Explore our services', to: '/services' },
  individual: { label: 'Professional technical support', to: '/professional-technical-support' },
  agency: { label: 'Agency partnerships', to: '/agency-partnerships' },
  organization: { label: 'Hire IT resources', to: '/hire-it-resources' },
  process: { label: 'How we work', to: '/how-we-work' },
}

export default function Faq() {
  useSeo(PAGES.faq)
  return (
    <>
      <PageHero
        breadcrumb="FAQ"
        eyebrow="Help"
        title="Frequently Asked Questions"
        description="Answers about our services, how each engagement model works, and what to expect from the process. Can't find what you need? Our team is happy to help."
      />

      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[15rem_1fr] lg:gap-16">
          <nav aria-label="FAQ categories" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold tracking-[0.16em] text-muted uppercase">Categories</p>
            <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {FAQ_GROUPS.map((g) => (
                <li key={g.id}>
                  <a
                    href={`#${g.id}`}
                    className="inline-flex min-h-10 items-center rounded-md border border-line px-3 text-sm text-body hover:border-brand-200 hover:text-navy-800 lg:w-full lg:border-0 lg:border-l-2 lg:border-transparent lg:rounded-none lg:hover:border-brand-500"
                  >
                    {g.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 space-y-16">
            {FAQ_GROUPS.map((g) => (
              <section key={g.id} id={g.id} aria-labelledby={`${g.id}-title`} className="scroll-mt-28">
                <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                  <h2 id={`${g.id}-title`} className="text-2xl font-bold sm:text-3xl">
                    {g.title}
                  </h2>
                  <Link
                    to={RELATED[g.id].to}
                    className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-navy-800"
                  >
                    {RELATED[g.id].label} <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
                <FaqList items={g.items} firstOpen={false} />
              </section>
            ))}

            <div className="rounded-2xl border border-brand-100 bg-brand-50 p-7 sm:p-9">
              <h2 className="text-2xl font-bold">Still have a question?</h2>
              <p className="mt-2">Send us a message and we'll get back to you.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink to="/contact" size="lg">
                  Contact Our Team <ArrowRight className="size-4" aria-hidden="true" />
                </ButtonLink>
                <WhatsAppButton size="lg" label="WhatsApp Us" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
