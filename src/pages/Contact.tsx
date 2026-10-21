import { CalendarClock, Clock3, Linkedin, Mail, MessageSquareText, UserRoundCheck } from 'lucide-react'
import { SITE } from '../config/site'
import { PAGES, useSeo } from '../lib/seo'
import { buttonClass } from '../components/common/buttonStyles'
import { WhatsAppButton, WhatsAppIcon } from '../components/common/WhatsAppButton'
import { PageHero } from '../components/sections/PageHero'
import { ContactForm } from '../components/contact/ContactForm'

const nextSteps = [
  { icon: MessageSquareText, title: 'Share your requirement', text: 'Send the enquiry on WhatsApp or by email.' },
  { icon: CalendarClock, title: 'Requirement discussion', text: 'We schedule a meeting around your time zone.' },
  { icon: UserRoundCheck, title: 'Match & evaluate', text: 'Meet the proposed professional before allocation.' },
]

export default function Contact() {
  useSeo(PAGES.contact)
  return (
    <>
      <PageHero
        breadcrumb="Contact Us"
        eyebrow="Contact us"
        title={
          <>
            Let's discuss your <span className="text-brand-600">technical requirement</span>
          </>
        }
        description="Tell us what you are working on and what kind of support you need. Our team will review it and help you understand the next steps."
      >
        <a href="#enquiry" className={buttonClass('primary', 'lg')}>
          Fill in the enquiry form
        </a>
        <WhatsAppButton size="lg" label={`WhatsApp ${SITE.contact.whatsappDisplay}`} />
      </PageHero>

      <section aria-label="Contact options and enquiry form" className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <aside className="order-2 space-y-6 lg:sticky lg:top-28 lg:order-none lg:self-start">
            <div className="rounded-2xl bg-navy-800 p-7 text-brand-100/85 sm:p-8">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-white/10 text-[#4ad18a] ring-1 ring-white/15">
                <WhatsAppIcon className="size-6" />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-white">Prefer to chat directly?</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Skip the form and message our team on WhatsApp. A short description of your requirement is all we need
                to get started.
              </p>
              <p className="mt-5 font-display text-xl font-bold tracking-tight text-white">{SITE.contact.whatsappDisplay}</p>
              <WhatsAppButton variant="light" size="lg" label="Chat on WhatsApp" className="mt-6 w-full" />
            </div>

            <div className="rounded-2xl border border-line p-7">
              <h2 className="text-lg font-bold">Other ways to reach us</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4.5 shrink-0 text-brand-500" aria-hidden="true" />
                  <span>
                    <span className="block text-xs text-muted">Email</span>
                    <a href={`mailto:${SITE.contact.email}`} className="font-medium break-all text-navy-800 hover:text-brand-600">
                      {SITE.contact.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Linkedin className="mt-0.5 size-4.5 shrink-0 text-brand-500" aria-hidden="true" />
                  <span>
                    <span className="block text-xs text-muted">LinkedIn</span>
                    <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium text-navy-800 hover:text-brand-600">
                      Corpolance Technologies
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 size-4.5 shrink-0 text-brand-500" aria-hidden="true" />
                  <span>
                    <span className="block text-xs text-muted">Location</span>
                    <span className="font-medium text-navy-800">Based in India · Meetings across time zones</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-ice p-7">
              <h2 className="text-lg font-bold">What happens next</h2>
              <ol className="mt-5 space-y-5">
                {nextSteps.map(({ icon: Icon, title, text }, i) => (
                  <li key={title} className="flex gap-4">
                    <span className="relative inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand-600 ring-1 ring-line">
                      <Icon className="size-4.5" aria-hidden="true" />
                      <span className="sr-only">Step {i + 1}</span>
                    </span>
                    <div>
                      <h3 className="text-sm font-bold">{title}</h3>
                      <p className="mt-0.5 text-sm">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div id="enquiry" className="order-1 scroll-mt-28 rounded-2xl lg:order-none border border-line bg-white p-6 shadow-card sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">Enquiry form</h2>
            <p className="mt-2 mb-6 text-body">
              Complete the details below and we'll prepare a message for you to send to our team on WhatsApp.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
