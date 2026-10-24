# Corpolance Technologies — Website

Marketing website for **Corpolance Technologies**, an India-based technical support and IT resource services company.

Built with React 19, TypeScript, Vite 7, Tailwind CSS 4, React Router 7, Framer Motion 12 and Lucide icons. Every route is **prerendered to static HTML** at build time, so search engines and social previews get full content and metadata without running JavaScript. The app then hydrates in the browser.

## Quick start

Requires Node.js 20.19+ (tested on Node 24).

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type check + client build + prerender → dist/
npm run preview    # serve dist/ at http://localhost:4173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with hot reload (client-rendered) |
| `npm run build` | `tsc -b`, client build, SSR build, prerender of every route, `sitemap.xml`, `robots.txt`, `404.html` |
| `npm run preview` | Serves the production build locally |
| `npm run typecheck` | TypeScript project check |
| `npm run lint` | ESLint |
| `npm run check` | Type check + lint |
| `npm run assets` | Regenerates logo variants, favicons, OG image and world map (needs Python 3 with Pillow + NumPy) |

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: hero, stats, who we help, grouped services, process, why us, challenges we support, delivery approach, FAQ preview, CTA |
| `/services` | Services overview: ten specializations in three groups, engagement models, comparison, process |
| `/services/<slug>` | Ten dedicated service pages from one template (`src/pages/ServicePage.tsx`, content in `src/data/services.ts`) |
| `/professional-technical-support` | Individual technical support (B2C) |
| `/agency-partnerships` | Agency partnerships (B2B), with an agency enquiry form |
| `/hire-it-resources` | Freelance IT resources for organizations, with an enquiry form |
| `/how-we-work` | The four-stage engagement process in detail |
| `/about` | Company story, approach, values, global delivery |
| `/mission-vision` | Mission, vision and values |
| `/faq` | Categorised FAQ (also emitted as FAQPage structured data) |
| `/contact` | Enquiry form → WhatsApp (or email), direct WhatsApp |
| `/privacy-policy` | Privacy Policy |
| anything else | 404 page |

Service slugs: `software-development`, `software-testing-qa`, `data-engineering`, `data-analytics-bi`, `data-science-machine-learning`, `ai-development`, `sap-enterprise-technologies`, `mainframe-support`, `database-development`, `cloud-services`.

The header uses three dropdowns (Services, Who We Help, About). Navigation data lives in `src/data/navigation.ts`.

## Project structure

```
public/
  images/                 corpolance-logo.png (original, untouched) + generated logo variants,
                          og-image.jpg, world-dots.svg
  favicon.ico, favicon.png, apple-touch-icon.png, icon-192/512.png, site.webmanifest
scripts/
  make-brand-assets.py    logo background removal/cropping, favicons, OG image
  make-world-map.mjs      dotted world map + projected region coordinates
  prerender.mjs           static HTML per route, sitemap.xml, robots.txt, 404.html
src/
  config/site.ts          ← company facts, contact details, production URL, statistics
  data/                   services, engagement models, process, benefits, FAQs, testimonials, navigation
  lib/whatsapp.ts         ← WhatsApp / email message + URL builders
  lib/seo.ts              page titles/descriptions, head tags, JSON-LD, client head updates
  components/common/      Button, SectionHeading, Logo, Reveal, WhatsAppButton
  components/layout/      Header, Footer, Layout (scroll handling, skip link)
  components/sections/    Hero, StatsSection, EngagementModels, ServicesGrid, ServiceCard,
                          ProcessTimeline, WhyChoose, GlobalDelivery, Testimonials, FAQAccordion, FinalCTA, PageHero
  components/contact/     ContactForm
  pages/                  Home, About, Services, Contact, PrivacyPolicy, NotFound
  entry-server.tsx        build-time renderer used by the prerender script
  main.tsx                browser entry (hydrates prerendered HTML)
```

Content lives in `src/config` and `src/data`, separate from presentation. To change a phone number, statistic or service description, edit those files only.

## How WhatsApp contact works

- All WhatsApp links use `SITE.contact.whatsappNumber` (`917205706992`) via `src/lib/whatsapp.ts`, so the number is defined in one place.
- The enquiry form validates input, then builds a message from the submitted values (name, email, contact, country, enquiry type, organization, service, engagement preference, meeting time, requirement). It opens `https://wa.me/917205706992?text=<URL-encoded message>` in a new tab.
- **The visitor must press Send in WhatsApp.** The website does not deliver anything by itself, and the confirmation message says so. There is no backend or database.
- "Send by email instead" opens the visitor's email app with the same message, addressed to `corpolancetechnologies@gmail.com`.
- Links such as `/contact?type=agency&service=cloud-services` preselect the enquiry type and service. Every service and engagement CTA uses this.

Automatic delivery of enquiries without the visitor pressing send would need a backend plus the official WhatsApp Business Platform, or an email service. Neither is included.

## SEO

- Static HTML per route: unique `<title>`, meta description, canonical URL, Open Graph and Twitter tags, and JSON-LD (`Organization`, `WebSite`, `BreadcrumbList`, `FAQPage` on Home, `ItemList` of `Service` on Services).
- `sitemap.xml` and `robots.txt` are generated at build time from the production URL.
- Each route is written as both `/about/index.html` and `/about.html`, so `/about` works on any static host.
- The production URL comes from `VITE_SITE_URL` (see `.env.example`). It defaults to `https://www.corpolance.com`, because `corpolance.com` currently redirects to `www`.

## Deployment

**Cloudflare (Workers Builds):** `wrangler.jsonc` is included. Use build command `npm run build` and deploy command `npx wrangler deploy`. It serves `dist/` with clean URLs and returns `404.html` for unknown paths.

The `dist/` folder is a plain static site. It works on Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3/CloudFront, Apache or nginx.

1. Set `VITE_SITE_URL` to the final domain (no trailing slash) if it isn't `https://www.corpolance.com`.
2. Build command `npm run build`; output directory `dist`.
3. Configure the host to serve `404.html` for unknown paths. Netlify and Cloudflare Pages do this automatically. For nginx, use `try_files $uri $uri.html $uri/ =404; error_page 404 /404.html;`.
4. **Don't** enable a blanket "rewrite everything to `/index.html`" SPA rule. It isn't needed, and it would serve the homepage HTML for other routes.
5. After launch, submit `https://<domain>/sitemap.xml` in Google Search Console.

## Business information to verify before launch

- **Canonical domain:** confirmed as `https://www.corpolance.com` (the default). Point the apex `corpolance.com` to it with a permanent redirect at the host.
- **Privacy Policy.** Items marked "Owner to verify" appear only in `npm run dev`, never in production. They cover: legal entity name/address, hosting and analytics, confidentiality agreements with network professionals, tools used, retention period and security measures, and applicable law (e.g. India DPDP Act 2023, GDPR). The "Last updated" date is in `src/pages/PrivacyPolicy.tsx`. Legal review is recommended.
- **Testimonials:** the site intentionally has no testimonials, reviews or ratings.
- **Technology names on service pages.** Each service page lists example tools (in `src/data/services.ts`). Confirm they reflect skills genuinely available in your network, especially SAP (ABAP), mainframe (COBOL, JCL, DB2, CICS, z/OS) and the database and cloud product examples.
- **Analytics.** The previous site used Google Analytics. None is included here. If you add it, update the Privacy Policy and add consent handling where required.
- **Contact details.** WhatsApp `+91 72057 06992`, email `corpolancetechnologies@gmail.com` and LinkedIn `linkedin.com/company/corpolance-technologies` are taken from the existing public website.

## Notes

- Fonts (Inter, Manrope) are self-hosted, Latin subset only, so there are no third-party font requests.
- Animations respect `prefers-reduced-motion`. Scroll-reveal content stays visible when JavaScript is disabled.
- The original logo (`public/images/corpolance-logo.png`) is preserved unchanged. The site uses derived copies whose flat background was removed; colours and shapes are not altered.
