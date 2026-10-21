import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { TriangleAlert } from 'lucide-react'
import { SITE } from '../config/site'
import { PAGES, useSeo } from '../lib/seo'
import { PageHero } from '../components/sections/PageHero'

/** Update when the policy changes. */
const LAST_UPDATED = '20 October 2026'

/**
 * Items the business owner must confirm before publication. Shown only in
 * development builds (npm run dev) so they never appear on the live site.
 */
function Verify({ children }: { children: ReactNode }) {
  if (!import.meta.env.DEV) return null
  return (
    <span className="my-3 flex gap-2 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900">
      <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      <span>
        <strong>Owner to verify:</strong> {children}
      </span>
    </span>
  )
}

const toc = [
  ['who-we-are', 'Who we are'],
  ['information', 'Information we collect'],
  ['purpose', 'Why we collect it'],
  ['handling', 'How enquiries are handled'],
  ['third-parties', 'WhatsApp and other third-party services'],
  ['sharing', 'Data sharing'],
  ['retention', 'Data retention and security'],
  ['rights', 'Your privacy requests'],
  ['international', 'International clients'],
  ['updates', 'Policy updates'],
  ['contact', 'Contact us'],
] as const

export default function PrivacyPolicy() {
  useSeo(PAGES.privacy)
  return (
    <>
      <PageHero
        breadcrumb="Privacy Policy"
        eyebrow="Legal"
        title="Privacy Policy"
        description={`How ${SITE.name} handles information shared through this website, our enquiry form, WhatsApp and email.`}
      />

      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-16">
          <nav aria-label="Policy sections" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold tracking-[0.16em] text-muted uppercase">On this page</p>
            <ol className="mt-4 space-y-1 border-l border-line text-sm">
              {toc.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-body hover:border-brand-500 hover:text-navy-800">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="prose-legal min-w-0 max-w-3xl text-body">
            <p className="text-sm text-muted">Last updated: {LAST_UPDATED}</p>
            <Verify>confirm the effective date and review the full policy (ideally with legal advice) before publishing.</Verify>

            <p className="mt-6">
              This Privacy Policy explains what information {SITE.name} (“Corpolance”, “we”, “us”) collects when you
              visit this website or contact us, why we collect it, and how we handle it. By using this website or
              contacting us, you acknowledge the practices described here.
            </p>

            <h2 id="who-we-are" className="scroll-mt-28">1. Who we are</h2>
            <p>
              {SITE.name} is a technical support and IT resource services business based in India, operating since{' '}
              {SITE.foundedYear}. We work with individual professionals, agencies and organizations in India and
              internationally.
            </p>
            <Verify>add the registered legal entity name and business address if they should appear here.</Verify>

            <h2 id="information" className="scroll-mt-28">2. Information we collect</h2>
            <h3>Information you provide</h3>
            <p>When you use our enquiry form, message us on WhatsApp or email us, you may share:</p>
            <ul>
              <li>Your name, email address, contact or WhatsApp number, and country or region</li>
              <li>Your enquiry type, organization name (if applicable) and the technology or service you need</li>
              <li>A description of your requirement, project context, timelines and preferred meeting times</li>
              <li>Any further details you choose to share during discussions and engagements</li>
            </ul>
            <p>
              Please avoid sharing passwords, access credentials, or confidential information belonging to third parties
              (for example, your employer or clients) unless you are authorized to do so.
            </p>
            <h3>How the enquiry form works</h3>
            <p>
              Our enquiry form does not store or transmit your details to our servers. When you choose “Send Enquiry on
              WhatsApp”, your browser opens WhatsApp with a pre-filled message; when you choose “Send by email instead”,
              your email app opens with a pre-filled email. We only receive your enquiry if you send that message.
            </p>
            <h3>Technical information</h3>
            <p>
              Like most websites, the hosting service that delivers this site may automatically process technical
              information such as your IP address, browser type and the pages requested, for security and to operate
              the site. This website does not currently use analytics or advertising cookies.
            </p>
            <Verify>
              confirm the hosting provider and whether any analytics (e.g. Google Analytics, used on the previous site)
              will be added. If so, update this section and add a cookie notice where required.
            </Verify>

            <h2 id="purpose" className="scroll-mt-28">3. Why we collect it</h2>
            <p>We use the information you share to:</p>
            <ul>
              <li>Understand your requirement and respond to your enquiry</li>
              <li>Schedule requirement discussions, technical evaluations and follow-up meetings</li>
              <li>Identify suitable technical professionals and arrange support or resource allocation</li>
              <li>Communicate with you about an ongoing engagement</li>
              <li>Maintain appropriate business records and meet legal obligations</li>
            </ul>
            <p>We do not sell your personal information.</p>

            <h2 id="handling" className="scroll-mt-28">4. How enquiries are handled</h2>
            <p>
              Enquiries are reviewed by our team to understand the requirement. Where needed, relevant requirement
              details are shared with technical professionals in our network so they can assess whether they are a
              suitable match. We treat requirement details and project context as confidential and share them only to
              the extent needed to provide the requested support.
            </p>
            <Verify>confirm whether professionals in the network are bound by written confidentiality agreements; if so, this can be stated.</Verify>

            <h2 id="third-parties" className="scroll-mt-28">5. WhatsApp and other third-party services</h2>
            <p>
              If you contact us through WhatsApp, your messages are transmitted and processed by WhatsApp, a service
              operated by Meta, under{' '}
              <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                WhatsApp's own Privacy Policy
              </a>
              . Similarly, email is handled by your email provider and ours. We do not control how these providers
              process data, and their own terms and privacy policies apply. Once we receive your message, we handle the
              information you shared as described in this policy.
            </p>
            <p>
              We may also use other tools to run our business, such as video-conferencing services for meetings. Those
              services process information according to their own policies.
            </p>
            <Verify>list the main tools used (e.g. Gmail / Google Workspace, Google Meet, Zoom, Microsoft Teams) if you want to name them.</Verify>

            <h2 id="sharing" className="scroll-mt-28">6. Data sharing</h2>
            <p>We share information only where necessary, including:</p>
            <ul>
              <li>With technical professionals in our network, to evaluate and deliver the support you requested</li>
              <li>With an agency partner, where you reached us through that partner or the engagement involves them</li>
              <li>With service providers that help us communicate and operate, for the purposes above</li>
              <li>Where required by law, regulation or legal process, or to protect our rights</li>
            </ul>

            <h2 id="retention" className="scroll-mt-28">7. Data retention and security</h2>
            <p>
              We keep information for as long as needed to respond to your enquiry, carry out an engagement, and meet
              reasonable business, legal and record-keeping needs. When it is no longer needed, we delete it or keep it
              only in a form that no longer identifies you, where practical.
            </p>
            <p>
              We take reasonable steps to protect the information we hold, such as limiting access to people who need it.
              However, no method of transmission or storage is completely secure, and we cannot guarantee absolute
              security.
            </p>
            <Verify>
              if you have a defined retention period or specific security measures, describe them here. Do not list
              controls (e.g. encryption, firewalls) unless they are actually in place.
            </Verify>

            <h2 id="rights" className="scroll-mt-28">8. Your privacy requests</h2>
            <p>
              You can ask us to access, correct or delete the personal information we hold about you, or to stop
              contacting you. Depending on where you live, you may have additional rights under applicable data
              protection laws. To make a request, contact us using the details below. We may need to verify your
              identity before acting on a request.
            </p>
            <p>
              Messages already delivered to WhatsApp or email accounts may also need to be deleted within those services;
              you can manage your own copies through the relevant app.
            </p>

            <h2 id="international" className="scroll-mt-28">9. International clients</h2>
            <p>
              We are based in India and serve clients in other countries. Information you share with us may therefore be
              processed in India and in the countries where our communication providers operate.
            </p>
            <Verify>
              confirm applicability of India's Digital Personal Data Protection Act, 2023 and any obligations for EU/UK
              (GDPR) or other clients; seek legal advice if you need specific compliance statements.
            </Verify>

            <h2 id="updates" className="scroll-mt-28">10. Policy updates</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised
              “Last updated” date.
            </p>

            <h2 id="contact" className="scroll-mt-28">11. Contact us</h2>
            <p>For privacy questions or requests, contact {SITE.name}:</p>
            <ul>
              <li>
                Email: <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
              </li>
              <li>WhatsApp: {SITE.contact.whatsappDisplay}</li>
            </ul>
            <p className="mt-10 text-sm text-muted">
              Return to the <Link to="/">homepage</Link> or <Link to="/contact">contact our team</Link>.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
