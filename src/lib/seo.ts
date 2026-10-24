import { useEffect } from 'react'
import { SITE } from '../config/site'
import { ALL_FAQS } from '../data/content'
import { SERVICES, servicePath, type Service } from '../data/services'

export interface PageMeta {
  path: string
  title: string
  description: string
  /** Breadcrumb label for inner pages */
  breadcrumb?: string
  /** Intermediate breadcrumb level, e.g. Our Services */
  parent?: { name: string; path: string }
  noindex?: boolean
}

export const PAGES = {
  home: {
    path: '/',
    title: 'Corpolance Technologies | Technical Support & Freelance IT Resources',
    description:
      'India-based technical support and IT resource services for professionals, agencies and organizations worldwide — software development, testing, data engineering, AI, SAP and cloud.',
  },
  about: {
    path: '/about',
    title: 'About Us | Corpolance Technologies',
    description:
      'Established in India in 2023, Corpolance Technologies connects technical expertise with the requirements of individual professionals, agencies and organizations worldwide.',
    breadcrumb: 'About',
  },
  missionVision: {
    path: '/mission-vision',
    title: 'Our Mission & Vision | Corpolance Technologies',
    description:
      "Discover Corpolance Technologies' mission, vision and values — requirement-first technical support, IT resource staffing and B2B technology partnerships for clients in India and worldwide.",
    breadcrumb: 'Mission & Vision',
  },
  professional: {
    path: '/professional-technical-support',
    title: 'Professional Technical Support | Corpolance Technologies',
    description:
      'Requirement-focused technical assistance for working professionals — development, debugging, data, cloud, databases, AI and testing — from specialists matched to your technology stack.',
    breadcrumb: 'Professional Technical Support',
  },
  agency: {
    path: '/agency-partnerships',
    title: 'IT Resource Partnerships for Agencies | Corpolance Technologies',
    description:
      'A technical resource partner for agencies: address skill gaps, extend delivery capacity and support client engagements with professionals you evaluate before allocation.',
    breadcrumb: 'Agency Partnerships',
  },
  hire: {
    path: '/hire-it-resources',
    title: 'Hire Freelance IT Resources | Corpolance Technologies',
    description:
      'Explore freelance and contract IT professionals — developers, testers, data, AI, cloud, database, SAP and mainframe specialists — matched to your project and evaluated before allocation.',
    breadcrumb: 'Hire IT Resources',
  },
  howWeWork: {
    path: '/how-we-work',
    title: 'How We Work | Corpolance Technologies',
    description:
      'Our four-stage process: requirement discovery, specialist matching, technical evaluation and allocation — so you can assess a professional before any engagement begins.',
    breadcrumb: 'How We Work',
  },
  faq: {
    path: '/faq',
    title: 'Frequently Asked Questions | Corpolance Technologies',
    description:
      'Answers about Corpolance Technologies: our services, individual technical support, agency partnerships, freelance IT resources and how engagements work.',
    breadcrumb: 'FAQ',
  },
  services: {
    path: '/services',
    title: 'Our Services | IT Technical Support, Data, AI & Cloud | Corpolance',
    description:
      'Software development, testing and QA, data engineering, analytics, AI development, SAP, mainframe, database and AWS, Azure and GCP cloud support — via agency partnerships, individual support or freelance IT resources.',
    breadcrumb: 'Our Services',
  },
  contact: {
    path: '/contact',
    title: 'Contact Us | Discuss Your Requirement | Corpolance Technologies',
    description:
      'Share your technical requirement with Corpolance Technologies. Send an enquiry on WhatsApp or by email and schedule a requirement discussion with our team.',
    breadcrumb: 'Contact Us',
  },
  privacy: {
    path: '/privacy-policy',
    title: 'Privacy Policy | Corpolance Technologies',
    description:
      'How Corpolance Technologies collects, uses and protects information shared through this website, enquiry forms and WhatsApp.',
    breadcrumb: 'Privacy Policy',
  },
  notFound: {
    path: '/404',
    title: 'Page Not Found | Corpolance Technologies',
    description: 'The page you are looking for could not be found.',
    noindex: true,
  },
} satisfies Record<string, PageMeta>

export const absoluteUrl = (path: string) => `${SITE.url}${path === '/' ? '/' : path}`

function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: `${SITE.url}/`,
    logo: absoluteUrl(SITE.images.logoPng),
    description: SITE.description,
    foundingDate: String(SITE.foundedYear),
    email: SITE.contact.email,
    telephone: SITE.contact.phoneE164,
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
    areaServed: ['US', 'CA', 'IN', 'Europe'],
    sameAs: [SITE.social.linkedin],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: SITE.contact.phoneE164,
      email: SITE.contact.email,
      availableLanguage: ['English'],
    },
  }
}

export function structuredData(meta: PageMeta): object[] {
  const graph: object[] = [
    organizationSchema(),
    { '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: `${SITE.url}/`, name: SITE.name, publisher: { '@id': `${SITE.url}/#organization` } },
  ]
  if (meta.breadcrumb) {
    const trail = [
      { name: 'Home', path: '/' },
      ...(meta.parent ? [meta.parent] : []),
      { name: meta.breadcrumb, path: meta.path },
    ]
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: trail.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, item: absoluteUrl(t.path) })),
    })
  }
  if (meta.path === '/faq') {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: ALL_FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    })
  }
  const service = SERVICES.find((s) => servicePath(s.id) === meta.path)
  if (service) {
    graph.push({
      '@type': 'Service',
      name: service.title,
      serviceType: service.title,
      description: service.intro,
      url: absoluteUrl(meta.path),
      provider: { '@id': `${SITE.url}/#organization` },
    })
  }
  if (meta.path === '/services') {
    graph.push({
      '@type': 'ItemList',
      name: 'Technical services',
      itemListElement: SERVICES.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Service',
          name: s.title,
          description: s.summary,
          url: absoluteUrl(servicePath(s.id)),
          provider: { '@id': `${SITE.url}/#organization` },
        },
      })),
    })
  }
  return [{ '@context': 'https://schema.org', '@graph': graph }]
}

export function servicePageMeta(service: Service): PageMeta {
  return {
    path: servicePath(service.id),
    title: service.seoTitle,
    description: service.seoDescription,
    breadcrumb: service.title,
    parent: { name: 'Our Services', path: '/services' },
  }
}

export const SERVICE_PAGES: PageMeta[] = SERVICES.map(servicePageMeta)

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Head markup injected into prerendered HTML. */
export function renderHead(meta: PageMeta): string {
  const url = absoluteUrl(meta.path)
  const image = absoluteUrl(SITE.images.og)
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    meta.noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(SITE.name)} logo" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ]
  if (!meta.noindex) {
    for (const data of structuredData(meta)) {
      tags.push(`<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`)
    }
  }
  return tags.join('\n    ')
}

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

/** Keeps the document head in sync during client-side navigation. */
export function useSeo(meta: PageMeta) {
  useEffect(() => {
    const url = absoluteUrl(meta.path)
    document.title = meta.title
    setMeta('meta[name="description"]', 'name', 'description', meta.description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', meta.title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', meta.description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', url)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description)
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!meta.noindex) {
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
      }
      canonical.href = url
    } else {
      canonical?.remove()
    }
  }, [meta])
}
