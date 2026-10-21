import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router'
import { LazyMotion, domAnimation } from 'framer-motion'
import { Header } from './Header'
import { Footer } from './Footer'
import { WhatsAppFloat } from '../common/WhatsAppButton'

/**
 * Scrolls to the hash target, or to the top on page changes. Jumps instantly when
 * the page changes; smooth-scrolls only for anchors within the same page.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  const lastPath = useRef<string | null>(null)
  useEffect(() => {
    const samePage = lastPath.current === pathname
    lastPath.current = pathname
    const behavior: ScrollBehavior = samePage ? 'smooth' : 'instant'
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        el.scrollIntoView({ behavior })
        return
      }
    }
    if (!samePage) window.scrollTo({ top: 0, behavior })
  }, [pathname, hash])
  return null
}

export function Layout() {
  return (
    <LazyMotion features={domAnimation} strict>
      <a
        href="#main"
        className="fixed top-3 left-3 z-[60] -translate-y-20 rounded-md bg-navy-800 px-4 py-2.5 text-sm font-semibold text-white transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </LazyMotion>
  )
}
