import { Link } from 'react-router'
import { Linkedin, Mail } from 'lucide-react'
import { SITE } from '../../config/site'
import { FOOTER_ENGAGEMENT_LINKS, FOOTER_SERVICE_LINKS, MAIN_NAV } from '../../data/navigation'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { WhatsAppIcon } from '../common/WhatsAppButton'

function FooterColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h2 className="font-display text-sm font-semibold tracking-wide text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.to + l.label}>
            <Link to={l.to} className="text-sm text-brand-100/75 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-brand-100/80">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-[0.08] invert" />
      <div className="container-x relative pt-16 pb-24 sm:pb-10 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            {/* The logo is dark artwork, so it sits on a white plate rather than being recoloured. */}
            <Link to="/" className="inline-flex rounded-lg bg-white px-4 py-3" aria-label={`${SITE.name} home`}>
              <img src={SITE.images.logoFull} alt={`${SITE.name} logo`} width={640} height={185} loading="lazy" className="h-12 w-auto" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              Technical support and IT resource services for individual professionals, agencies and organizations.
              Based in India, operating since {SITE.foundedYear}, serving clients globally.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-5">
            <FooterColumn title="Company" links={[...MAIN_NAV, { label: 'Privacy Policy', to: '/privacy-policy' }]} />
            <FooterColumn title="Services" links={FOOTER_SERVICE_LINKS} />
            <FooterColumn title="Engagements" links={FOOTER_ENGAGEMENT_LINKS} />
          </div>

          <div className="lg:col-span-4 lg:pl-6">
            <h2 className="font-display text-sm font-semibold tracking-wide text-white">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 transition-colors hover:text-white"
                >
                  <span className="inline-flex size-9 items-center justify-center rounded-md bg-white/8 text-[#4ad18a] ring-1 ring-white/10">
                    <WhatsAppIcon className="size-4.5" />
                  </span>
                  <span>
                    <span className="block text-xs text-brand-100/55">WhatsApp</span>
                    {SITE.contact.whatsappDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.contact.email}`} className="inline-flex items-center gap-3 transition-colors hover:text-white [overflow-wrap:anywhere]">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-white/8 text-brand-300 ring-1 ring-white/10">
                    <Mail className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-brand-100/55">Email</span>
                    {SITE.contact.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 transition-colors hover:text-white"
                >
                  <span className="inline-flex size-9 items-center justify-center rounded-md bg-white/8 text-brand-300 ring-1 ring-white/10">
                    <Linkedin className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-brand-100/55">LinkedIn</span>
                    Corpolance Technologies
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-brand-100/60 sm:flex-row sm:items-center sm:justify-between sm:pr-20">
          <p>
            © <span suppressHydrationWarning>{year}</span> {SITE.name}. All rights reserved.
          </p>
          <p className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>Based in India · Serving clients worldwide</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
