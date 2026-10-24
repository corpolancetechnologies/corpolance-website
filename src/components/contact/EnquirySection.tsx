import { ShieldAlert } from 'lucide-react'
import { SITE } from '../../config/site'
import type { EnquiryTypeId } from '../../lib/whatsapp'
import { SectionHeading } from '../common/SectionHeading'
import { WhatsAppButton } from '../common/WhatsAppButton'
import { ContactForm } from './ContactForm'

interface EnquirySectionProps {
  type: EnquiryTypeId
  eyebrow: string
  title: string
  description: string
  whatsappTopic: string
}

/** On-page enquiry form for an audience page, with the enquiry type fixed. */
export function EnquirySection({ type, eyebrow, title, description, whatsappTopic }: EnquirySectionProps) {
  return (
    <section id="enquiry" aria-labelledby="enquiry-title" className="section-y scroll-mt-24 bg-ice">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading id="enquiry-title" eyebrow={eyebrow} title={title} description={description} />
          <div className="mt-8 space-y-4">
            <WhatsAppButton topic={whatsappTopic} label={`WhatsApp ${SITE.contact.whatsappDisplay}`} />
            <p className="flex gap-2 text-sm text-muted">
              <ShieldAlert className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden="true" />
              Please don't include passwords, credentials or confidential client data in this form.
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-10">
          <ContactForm fixedType={type} />
        </div>
      </div>
    </section>
  )
}
