import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { AnimatePresence, m } from 'framer-motion'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import { MAIN_NAV, isMenu, menuPaths, type NavMenu } from '../../data/navigation'
import { SITE } from '../../config/site'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { cn } from '../../lib/cn'
import { Logo } from '../common/Logo'
import { ButtonLink } from '../common/Button'
import { WhatsAppButton, WhatsAppIcon } from '../common/WhatsAppButton'

const topLinkClass = (active: boolean) =>
  cn(
    'relative inline-flex min-h-11 items-center gap-1 rounded-md px-2.5 text-[0.94rem] font-medium whitespace-nowrap transition-colors xl:px-3.5',
    'after:absolute after:inset-x-2.5 after:bottom-1.5 after:h-0.5 after:origin-left after:rounded-full after:bg-brand-500 after:transition-transform after:duration-300 xl:after:inset-x-3.5',
    active ? 'text-navy-800 after:scale-x-100' : 'text-body after:scale-x-0 hover:text-navy-800 hover:after:scale-x-100',
  )

/** Desktop disclosure menu: opens on click or hover, closes on Escape, outside click or blur. */
function DesktopMenu({ menu, pathname }: { menu: NavMenu; pathname: string }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const wrapRef = useRef<HTMLLIElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const hoverTimer = useRef<number | undefined>(undefined)
  const active = menuPaths(menu).some((p) => (p === '/' ? pathname === '/' : pathname === p || pathname.startsWith(`${p}/`)))

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const hover = (next: boolean) => {
    window.clearTimeout(hoverTimer.current)
    hoverTimer.current = window.setTimeout(() => setOpen(next), next ? 60 : 160)
  }

  return (
    <li
      ref={wrapRef}
      className={cn(!menu.wide && 'relative')}
      onPointerEnter={(e) => e.pointerType === 'mouse' && hover(true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && hover(false)}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false)
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={topLinkClass(active)}
      >
        {menu.label}
        <ChevronDown className={cn('size-4 transition-transform duration-200', open && 'rotate-180')} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <m.div
            id={panelId}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className={cn(
              'absolute top-full z-50 pt-2',
              menu.wide ? 'inset-x-4 mx-auto max-w-[52rem] sm:inset-x-6 lg:inset-x-8' : 'left-0 w-80',
            )}
          >
            <div className="overflow-hidden rounded-xl border border-line bg-white shadow-lift">
              {menu.overview && (
                <Link
                  to={menu.overview.to}
                  className="group flex items-center justify-between gap-4 border-b border-line bg-ice px-6 py-4 hover:bg-brand-50"
                >
                  <span>
                    <span className="block font-display text-sm font-bold text-navy-800">{menu.overview.label}</span>
                    {menu.overview.description && <span className="text-xs text-muted">{menu.overview.description}</span>}
                  </span>
                  <ArrowRight className="size-4 text-brand-500 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              )}
              <div className={cn(menu.wide ? 'grid grid-cols-3 gap-6 p-6' : 'p-2')}>
                {menu.groups.map((g, gi) => (
                  <div key={g.title ?? gi}>
                    {g.title && <p className="mb-2 px-2 text-xs font-bold tracking-[0.12em] text-brand-600 uppercase">{g.title}</p>}
                    <ul>
                      {g.items.map((item) => (
                        <li key={item.to}>
                          <NavLink
                            to={item.to}
                            end
                            className={({ isActive }) =>
                              cn(
                                'block rounded-md px-2 py-2 text-sm transition-colors hover:bg-brand-50',
                                isActive ? 'font-semibold text-brand-600' : 'text-ink',
                                item.description && 'py-2.5',
                              )
                            }
                          >
                            <span className={cn(item.description && 'block font-semibold')}>{item.label}</span>
                            {item.description && <span className="mt-0.5 block text-xs font-normal text-muted">{item.description}</span>}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </li>
  )
}

/** Mobile accordion section for a menu. */
function MobileMenuSection({ menu, pathname }: { menu: NavMenu; pathname: string }) {
  const active = menuPaths(menu).includes(pathname)
  const [open, setOpen] = useState(active)
  const panelId = useId()
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn('flex min-h-14 w-full items-center justify-between font-display text-lg font-semibold', active ? 'text-brand-600' : 'text-navy-800')}
      >
        {menu.label}
        <ChevronDown className={cn('size-5 text-brand-400 transition-transform duration-200', open && 'rotate-180')} aria-hidden="true" />
      </button>
      {open && (
        <div id={panelId} className="pb-4">
          {menu.overview && (
            <Link to={menu.overview.to} className="flex min-h-11 items-center rounded-md px-3 text-sm font-semibold text-brand-600">
              {menu.overview.label}
            </Link>
          )}
          {menu.groups.map((g, gi) => (
            <div key={g.title ?? gi} className="mt-1">
              {g.title && <p className="px-3 pt-3 pb-1 text-xs font-bold tracking-[0.12em] text-muted uppercase">{g.title}</p>}
              <ul>
                {g.items.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end
                      className={({ isActive }) =>
                        cn('flex min-h-11 items-center rounded-md px-3 text-[0.95rem]', isActive ? 'bg-brand-50 font-semibold text-brand-600' : 'text-ink')
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

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
      <div className="container-x relative flex h-[4.5rem] items-center justify-between gap-6 lg:h-20 lg:gap-4 xl:gap-6">
        <Logo onNavigate={() => setOpen(false)} />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-0.5 xl:gap-1">
            {MAIN_NAV.map((item) =>
              isMenu(item) ? (
                <DesktopMenu key={item.id} menu={item} pathname={pathname} />
              ) : (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'} className={({ isActive }) => topLinkClass(isActive)}>
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden size-11 items-center justify-center rounded-lg border border-line text-whatsapp transition-colors hover:border-brand-200 hover:bg-brand-50 xl:inline-flex"
            aria-label={`Chat on WhatsApp at ${SITE.contact.whatsappDisplay} (opens in a new tab)`}
          >
            <WhatsAppIcon className="size-5" />
          </a>
          <ButtonLink to="/contact" variant="primary" className="lg:px-4 xl:px-5">
            {/* Shorter label on small laptops so the full navigation fits. */}
            <span className="xl:hidden">Get in Touch</span>
            <span className="hidden xl:inline">Discuss Your Requirement</span>
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
            <nav aria-label="Mobile" className="container-x flex flex-col py-4">
              <ul className="divide-y divide-line">
                {MAIN_NAV.map((item) => (
                  <li key={isMenu(item) ? item.id : item.to}>
                    {isMenu(item) ? (
                      <MobileMenuSection menu={item} pathname={pathname} />
                    ) : (
                      <NavLink
                        to={item.to}
                        end={item.to === '/'}
                        className={({ isActive }) =>
                          cn('flex min-h-14 items-center justify-between font-display text-lg font-semibold', isActive ? 'text-brand-600' : 'text-navy-800')
                        }
                      >
                        {item.label}
                        <ArrowRight className="size-4 text-brand-400" aria-hidden="true" />
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-3">
                <ButtonLink to="/contact" variant="primary" size="lg">
                  Discuss Your Requirement
                </ButtonLink>
                <WhatsAppButton size="lg" label={`WhatsApp ${SITE.contact.whatsappDisplay}`} />
              </div>
              <p className="mt-6 text-sm text-muted">Operating from India since {SITE.foundedYear}, supporting clients worldwide.</p>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
