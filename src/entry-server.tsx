// Used only at build time by scripts/prerender.mjs to produce static HTML per route.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { SITE } from './config/site'
import { PAGES, SERVICE_PAGES, renderHead, type PageMeta } from './lib/seo'

export const ROUTES: PageMeta[] = [
  PAGES.home,
  PAGES.services,
  ...SERVICE_PAGES,
  PAGES.professional,
  PAGES.agency,
  PAGES.hire,
  PAGES.howWeWork,
  PAGES.about,
  PAGES.missionVision,
  PAGES.faq,
  PAGES.contact,
  PAGES.privacy,
]
export const NOT_FOUND: PageMeta = PAGES.notFound
export const SITE_URL = SITE.url

export function render(url: string, meta: PageMeta) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
  return { html, head: renderHead(meta) }
}
