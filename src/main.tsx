import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App'
import './styles/index.css'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Production pages are prerendered per route. Hydrate only when the HTML was
// rendered for the current path; otherwise (dev server, 404 page, or a host's
// SPA fallback serving another page's HTML) render fresh to avoid a mismatch.
const path = window.location.pathname.replace(/\/+$/, '').replace(/(\/index)?\.html$/, '') || '/'
if (path !== window.location.pathname) {
  window.history.replaceState(null, '', path + window.location.search + window.location.hash)
}
if (container.firstElementChild && container.dataset.route === path) {
  hydrateRoot(container, app)
} else {
  container.textContent = ''
  createRoot(container).render(app)
}
