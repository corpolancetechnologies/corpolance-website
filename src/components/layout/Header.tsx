import { useEffect, useId, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { AnimatePresence, m } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { MAIN_NAV } from '../../data/navigation'
import { SITE } from '../../config/site'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { cn } from '../../lib/cn'
import { Logo } from '../common/Logo'
import { ButtonLink } from '../common/Button'
import { WhatsAppButton, WhatsAppIcon } from '../common/WhatsAppButton'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const menuId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the menu on navigation.
  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const mql = window.matchMedia('(min-width: 1024px)')
    const onResize = () => mql.matches && setOpen(false)
    document.addEventListener('keydown', onKey)
    mql.addEventListener('change', onResize)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      mql.removeEventListener('change', onResize)
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300',
        solid ? 'border-b border-line/80 bg-white/95 shadow-[0_6px_24px_-18px_rgb(11_51_80/0.5)] backdrop-blur-md' : 'border-b border-transparent bg-white',
      )}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <Logo onNavigate={() => setOpen(false)} />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {MAIN_NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'relative inline-flex min-h-11 items-center rounded-md px-3.5 text-[0.94rem] font-medium transition-colors',
                      'after:absolute after:inset-x-3.5 after:bottom-1.5 after:h-0.5 after:origin-left after:rounded-full after:bg-brand-500 after:transition-transform after:duration-300',
                      isActive ? 'text-navy-800 after:scale-x-100' : 'text-body after:scale-x-0 hover:text-navy-800 hover:after:scale-x-100',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-11 items-center justify-center rounded-lg border border-line text-whatsapp transition-colors hover:border-brand-200 hover:bg-brand-50"
            aria-label={`Chat on WhatsApp at ${SITE.contact.whatsappDisplay} (opens in a new tab)`}
          >
            <WhatsAppIcon className="size-5" />
          </a>
          <ButtonLink to="/contact" variant="primary">
            Discuss Your Requirement
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-lg text-navy-800 hover:bg-brand-50 lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            id={menuId}
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-white lg:hidden"
          >
            <nav aria-label="Mobile" className="container-x flex flex-col py-6">
              <ul className="divide-y divide-line">
                {MAIN_NAV.map((item, i) => (
                  <m.li
                    key={item.to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i + 0.05, duration: 0.25 }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        cn(
                          'flex min-h-14 items-center justify-between font-display text-lg font-semibold',
                          isActive ? 'text-brand-600' : 'text-navy-800',
                        )
                      }
                    >
                      {item.label}
                      <ArrowRight className="size-4 text-brand-400" aria-hidden="true" />
                    </NavLink>
                  </m.li>
                ))}
              </ul>
              <div className="mt-8 grid gap-3">
                <ButtonLink to="/contact" variant="primary" size="lg">
                  Discuss Your Requirement
                </ButtonLink>
                <WhatsAppButton size="lg" label={`WhatsApp ${SITE.contact.whatsappDisplay}`} />
              </div>
              <p className="mt-8 text-sm text-muted">
                Operating from India since {SITE.foundedYear}, supporting clients worldwide.
              </p>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
