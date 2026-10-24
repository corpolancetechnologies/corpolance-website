import { ENGAGEMENT_MODELS } from './content'
import { SERVICE_GROUPS, SERVICES, servicePath } from './services'

export interface NavItem {
  label: string
  to: string
  description?: string
}

export interface NavGroup {
  title?: string
  items: NavItem[]
}

export interface NavMenu {
  id: string
  label: string
  /** Optional overview link shown at the top of the menu */
  overview?: NavItem
  groups: NavGroup[]
  wide?: boolean
}

export type NavEntry = NavItem | NavMenu

export const isMenu = (e: NavEntry): e is NavMenu => 'groups' in e

const SERVICES_MENU: NavMenu = {
  id: 'services',
  label: 'Services',
  wide: true,
  overview: { label: 'All services', to: '/services', description: 'Overview of every technology area and engagement model' },
  groups: SERVICE_GROUPS.map((g) => ({
    title: g.title,
    items: SERVICES.filter((s) => s.group === g.id).map((s) => ({ label: s.title, to: servicePath(s.id) })),
  })),
}

const AUDIENCE_MENU: NavMenu = {
  id: 'who-we-help',
  label: 'Who We Help',
  groups: [
    {
      items: ENGAGEMENT_MODELS.map((m) => ({ label: m.navLabel, to: m.path, description: m.audience })),
    },
  ],
}

const ABOUT_MENU: NavMenu = {
  id: 'about',
  label: 'About',
  groups: [
    {
      items: [
        { label: 'About Corpolance', to: '/about', description: 'Our story, approach and values' },
        { label: 'Mission & Vision', to: '/mission-vision', description: 'Why we exist and where we are heading' },
        { label: 'FAQ', to: '/faq', description: 'Answers to common questions' },
      ],
    },
  ],
}

export const MAIN_NAV: NavEntry[] = [
  { label: 'Home', to: '/' },
  SERVICES_MENU,
  AUDIENCE_MENU,
  { label: 'How We Work', to: '/how-we-work' },
  ABOUT_MENU,
  { label: 'Contact', to: '/contact' },
]

/** All paths a menu links to, for active-state detection. */
export function menuPaths(menu: NavMenu): string[] {
  return [...(menu.overview ? [menu.overview.to] : []), ...menu.groups.flatMap((g) => g.items.map((i) => i.to))]
}

export const FOOTER_COMPANY_LINKS: NavItem[] = [
  { label: 'About Us', to: '/about' },
  { label: 'Mission & Vision', to: '/mission-vision' },
  { label: 'How We Work', to: '/how-we-work' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

export const FOOTER_SERVICE_LINKS: NavItem[] = [
  ...['software-development', 'software-testing-qa', 'data-engineering', 'data-analytics-bi', 'ai-development', 'cloud-services'].map(
    (id) => ({ label: SERVICES.find((s) => s.id === id)!.title, to: servicePath(id) }),
  ),
  { label: 'All services', to: '/services' },
]

export const FOOTER_AUDIENCE_LINKS: NavItem[] = ENGAGEMENT_MODELS.map((m) => ({ label: m.navLabel, to: m.path }))
