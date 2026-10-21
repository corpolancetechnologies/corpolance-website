import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  description: ReactNode
  breadcrumb: string
  children?: ReactNode
}

export function PageHero({ eyebrow, title, description, breadcrumb, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ice">
      <div aria-hidden="true" className="grid-bg absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <svg
        aria-hidden="true"
        viewBox="0 0 400 300"
        className="absolute -top-6 -right-16 hidden w-[26rem] text-brand-200/70 md:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      >
        <path d="M60 300V200l60-60h80l50-50V0" />
        <path d="M160 300v-60l40-40h140" />
        <circle cx="356" cy="200" r="14" />
        <path d="M0 120h70l30-30" />
        <circle cx="112" cy="78" r="14" />
      </svg>
      <div className="container-x relative pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pb-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-muted">
            <li>
              <Link to="/" className="hover:text-navy-800">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-3.5" />
            </li>
            <li aria-current="page" className="font-medium text-navy-800">
              {breadcrumb}
            </li>
          </ol>
        </nav>
        <div className="mt-10 max-w-3xl">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="text-4xl leading-[1.1] font-extrabold tracking-[-0.03em] sm:text-5xl lg:text-[3.4rem]">{title}</h1>
          <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">{description}</p>
          {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div>}
        </div>
      </div>
    </section>
  )
}
