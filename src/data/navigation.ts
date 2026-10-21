export interface NavItem {
  label: string
  to: string
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
]

export const FOOTER_SERVICE_LINKS: NavItem[] = [
  { label: 'Software Development', to: '/services#software-development' },
  { label: 'Data Engineering', to: '/services#data-engineering' },
  { label: 'AI Development', to: '/services#ai-development' },
  { label: 'Cloud Services', to: '/services#cloud-services' },
  { label: 'Testing & QA', to: '/services#testing-qa' },
  { label: 'SAP & Enterprise', to: '/services#sap-enterprise' },
]

export const FOOTER_ENGAGEMENT_LINKS: NavItem[] = [
  { label: 'Agency Partnerships', to: '/services#agency-partnerships' },
  { label: 'Individual Support', to: '/services#individual-support' },
  { label: 'Freelance IT Resources', to: '/services#freelance-resources' },
]
