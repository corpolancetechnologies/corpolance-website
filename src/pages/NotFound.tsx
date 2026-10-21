import { ArrowRight } from 'lucide-react'
import { PAGES, useSeo } from '../lib/seo'
import { ButtonLink } from '../components/common/Button'

export default function NotFound() {
  useSeo(PAGES.notFound)
  return (
    <section className="section-y bg-ice">
      <div className="container-x max-w-2xl text-center">
        <p className="font-display text-sm font-bold tracking-[0.16em] text-brand-500 uppercase">Error 404</p>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">This page could not be found</h1>
        <p className="mt-5 text-lg">The link may be outdated, or the page may have moved.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink to="/" size="lg">
            Go to homepage <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink to="/contact" variant="secondary" size="lg">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
