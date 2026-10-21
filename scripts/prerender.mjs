// Prerenders every public route to static HTML (dist/<route>/index.html) so search
// engines and social previews receive full content and metadata without running JS.
// Also writes sitemap.xml, robots.txt and 404.html. Run after both Vite builds.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const ssrEntry = resolve(root, 'dist-ssr/entry-server.js')

const { render, ROUTES, NOT_FOUND, SITE_URL } = await import(pathToFileURL(ssrEntry).href)
const template = readFileSync(resolve(dist, 'index.html'), 'utf8')

function page(url, meta) {
  const { html, head } = render(url, meta)
  return template
    .replace('<!--app-head-->', head)
    .replace('<div id="root"><!--app-html--></div>', `<div id="root" data-route="${url}">${html}</div>`)
}

for (const meta of ROUTES) {
  const html = page(meta.path, meta)
  if (meta.path === '/') {
    writeFileSync(resolve(dist, 'index.html'), html)
  } else {
    // Both /about/index.html and /about.html, so any static host can serve the clean URL /about.
    mkdirSync(resolve(dist, `.${meta.path}`), { recursive: true })
    writeFileSync(resolve(dist, `.${meta.path}/index.html`), html)
    writeFileSync(resolve(dist, `.${meta.path}.html`), html)
  }
  console.log(`prerendered ${meta.path}`)
}

writeFileSync(resolve(dist, '404.html'), page('/404', NOT_FOUND))
console.log('prerendered 404.html')

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r.path === '/' ? '1.0' : r.path === '/privacy-policy' ? '0.3' : '0.8'}</priority>
  </url>`,
).join('\n')}
</urlset>
`
writeFileSync(resolve(dist, 'sitemap.xml'), sitemap)
writeFileSync(resolve(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
console.log('wrote sitemap.xml and robots.txt')

rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })
