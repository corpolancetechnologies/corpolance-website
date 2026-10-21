import { SITE } from '../../config/site'
import { buildWhatsAppUrl, quickWhatsAppMessage } from '../../lib/whatsapp'
import { cn } from '../../lib/cn'
import { buttonClass, type ButtonVariant } from './buttonStyles'

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} fill="currentColor">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91a9.85 9.85 0 0 0-2.9-7.01Zm-7.01 15.24h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23a8.2 8.2 0 0 1 5.83 2.42 8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23a7.46 7.46 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  )
}

interface WhatsAppButtonProps {
  /** Optional topic for a contextual opening message */
  topic?: string
  message?: string
  label?: string
  variant?: ButtonVariant
  size?: 'md' | 'lg'
  className?: string
}

/** The single WhatsApp CTA used across the site, always pointing to the official number. */
export function WhatsAppButton({
  topic,
  message,
  label = 'WhatsApp Us',
  variant = 'secondary',
  size = 'md',
  className,
}: WhatsAppButtonProps) {
  const greenIcon = variant === 'secondary' || variant === 'light' || variant === 'ghost'
  return (
    <a
      href={buildWhatsAppUrl(message ?? quickWhatsAppMessage(topic))}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass(variant, size, className)}
      aria-label={`${label}: chat on WhatsApp at ${SITE.contact.whatsappDisplay} (opens in a new tab)`}
    >
      <WhatsAppIcon className={cn('size-[1.15em] shrink-0', greenIcon && 'text-whatsapp')} />
      {label}
    </a>
  )
}

/** Small floating shortcut, bottom-right on every page. */
export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp at ${SITE.contact.whatsappDisplay} (opens in a new tab)`}
      className="fixed right-4 bottom-4 z-40 inline-flex size-13 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift transition-transform duration-200 hover:scale-105 sm:right-6 sm:bottom-6 sm:size-14"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
