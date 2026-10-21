// Single source of truth for company facts and contact details.
// Only verified information belongs here — see README "Business information to verify".

const envSiteUrl = import.meta.env.VITE_SITE_URL as string | undefined

export const SITE = {
  name: 'Corpolance Technologies',
  shortName: 'Corpolance',
  tagline: 'quietly powering your success',
  /** Production origin, no trailing slash. corpolance.com currently redirects to www. */
  url: (envSiteUrl || 'https://www.corpolance.com').replace(/\/$/, ''),
  foundedYear: 2023,
  country: 'India',
  description:
    'Corpolance Technologies is an India-based technical support and IT resource services company helping individual professionals, agencies and organizations worldwide.',
  contact: {
    whatsappDisplay: '+91 72057 06992',
    /** Digits only, international format, as required by wa.me */
    whatsappNumber: '917205706992',
    phoneE164: '+917205706992',
    /** Published on the existing corpolance.com website */
    email: 'corpolancetechnologies@gmail.com',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/corpolance-technologies',
  },
  markets: ['United States', 'Europe', 'Canada', 'India'],
  images: {
    logoHeader: '/images/logo-header.webp',
    logoFull: '/images/logo-full.webp',
    logoPng: '/images/logo-full.png',
    og: '/images/og-image.jpg',
  },
} as const

export const STATS = [
  { value: 120, suffix: '+', label: 'Technical Resources', detail: 'Across development, data, cloud and enterprise technologies' },
  { value: 350, suffix: '+', label: 'Clients Served', detail: 'Individual clients served directly and through partners' },
  { value: 4, suffix: '+', label: 'Agency Partnerships', detail: 'Ongoing B2B relationships with service providers' },
  { value: 2023, suffix: '', label: 'Operating Since', detail: 'Established in India, serving clients globally', noCount: true },
] as const
