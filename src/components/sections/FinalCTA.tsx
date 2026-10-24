import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '../common/Button'
import { Reveal } from '../common/Reveal'
import { WhatsAppButton } from '../common/WhatsAppButton'

interface FinalCTAProps {
  title?: string
  text?: string
  primaryLabel?: string
  primaryTo?: string
  /** Adds an "Explore Our Services" button */
  showServices?: boolean
  whatsappLabel?: string
}

export function FinalCTA({
  title = "Let's Find the Right Technical Support for Your Requirement.",
  text = "Share your technical challenge, project requirement, or resource needs with our team. We'll discuss your objectives and help you understand the next steps.",
  primaryLabel = 'Contact Our Team',
  primaryTo = '/contact',
  showServices = false,
  whatsappLabel = 'Chat on WhatsApp',
}: FinalCTAProps) {
  return (
    <section aria-labelledby="cta-title" className="bg-white pb-20 sm:pb-24 lg:pb-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-navy-800 px-6 py-14 sm:px-12 lg:px-16 lg:py-16">
            <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-20 invert" />
            <svg aria-hidden="true" viewBox="0 0 400 300" className="absolute -right-10 -bottom-10 w-72 text-brand-500/30 sm:w-96" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
              {/* circuit motif echoing the logo mark */}
              <path d="M40 300V200l60-60h80l50-50V40" />
              <circle cx="230" cy="28" r="14" />
              <path d="M140 300v-60l40-40h120" />
              <circle cx="316" cy="200" r="14" />
              <path d="M240 300v-40l30-30" />
              <circle cx="280" cy="220" r="10" />
            </svg>
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 id="cta-title" className="text-3xl leading-tight font-bold text-white sm:text-4xl">
                  {title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-100/85 sm:text-lg">{text}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col lg:items-end">
                <ButtonLink to={primaryTo} variant="light" size="lg" className="lg:w-72">
                  {primaryLabel}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </ButtonLink>
                {showServices && (
                  <ButtonLink to="/services" variant="outline-light" size="lg" className="lg:w-72">
                    Explore Our Services
                  </ButtonLink>
                )}
                <WhatsAppButton variant="outline-light" size="lg" label={whatsappLabel} className="lg:w-72" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
