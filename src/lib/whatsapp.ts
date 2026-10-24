import { SITE } from '../config/site'

export type EnquiryTypeId = 'agency' | 'individual' | 'organization'

export const ENQUIRY_TYPES: { id: EnquiryTypeId; label: string; short: string }[] = [
  { id: 'agency', label: 'B2B Agency Partnership', short: 'Agency partnership' },
  { id: 'individual', label: 'Individual Technical Support', short: 'Individual support' },
  { id: 'organization', label: 'Freelance IT Resources for an Organization', short: 'Freelance IT resources' },
]

export function enquiryTypeLabel(id: string | undefined): string {
  return ENQUIRY_TYPES.find((t) => t.id === id)?.label ?? ''
}

export interface EnquiryValues {
  fullName: string
  email: string
  phone: string
  country: string
  enquiryType: EnquiryTypeId | ''
  service: string
  requirement: string
  meetingTime?: string
  organization?: string
  engagement?: string
  resourceNeed?: string
}

const DEFAULT_GREETING = `Hello ${SITE.name},\nI would like to discuss a requirement.`

/** Builds the plain-text enquiry message. Empty optional fields are omitted. */
export function buildEnquiryMessage(values: EnquiryValues): string {
  const line = (label: string, value?: string) => (value && value.trim() ? `${label}: ${value.trim()}` : null)

  const details = [
    line('Name', values.fullName),
    line('Email', values.email),
    line('Contact', values.phone),
    line('Country', values.country),
    line('Enquiry Type', enquiryTypeLabel(values.enquiryType)),
    line('Organization', values.organization),
    line('Technology/Service', values.service),
    line('Engagement Preference', values.engagement),
    line('Resource Requirement', values.resourceNeed),
    line('Preferred Meeting Time / Time Zone', values.meetingTime),
  ].filter(Boolean)

  return [
    `Hello ${SITE.name},`,
    'I would like to discuss a requirement.',
    '',
    ...details,
    '',
    'Requirement:',
    values.requirement.trim(),
    '',
    'Please let me know the next steps for scheduling a discussion.',
  ].join('\n')
}

/** wa.me Click-to-Chat link. The visitor reviews and sends the message themselves. */
export function buildWhatsAppUrl(message: string = DEFAULT_GREETING): string {
  return `https://wa.me/${SITE.contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function whatsAppUrlForEnquiry(values: EnquiryValues): string {
  return buildWhatsAppUrl(buildEnquiryMessage(values))
}

/** A short contextual opener, e.g. for a service-specific WhatsApp button. */
export function quickWhatsAppMessage(topic?: string): string {
  return topic
    ? `Hello ${SITE.name},\nI would like to discuss a requirement related to ${topic}.`
    : DEFAULT_GREETING
}

export function buildMailtoUrl(values: EnquiryValues): string {
  const subject = `Enquiry: ${enquiryTypeLabel(values.enquiryType) || 'Requirement discussion'}${
    values.service ? ` — ${values.service}` : ''
  }`
  return `mailto:${SITE.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    buildEnquiryMessage(values),
  )}`
}
