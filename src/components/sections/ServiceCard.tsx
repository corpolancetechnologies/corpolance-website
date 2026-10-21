import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { contactHref, type Service } from '../../data/services'

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
      <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-body">{service.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {service.capabilities.map((c) => (
          <li key={c} className="rounded-md bg-ice px-2 py-1 text-xs font-medium text-body ring-1 ring-line">
            {c}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center gap-4 pt-6 text-sm font-semibold">
        <Link
          to={contactHref({ service: service.id })}
          className="inline-flex min-h-11 items-center gap-1 text-brand-600 hover:text-navy-800"
        >
          Enquire<span className="sr-only"> about {service.title}</span>
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </Link>
        <Link to={`/services#${service.id}`} className="inline-flex min-h-11 items-center text-muted hover:text-navy-800">
          Details<span className="sr-only"> for {service.title}</span>
        </Link>
      </div>
    </article>
  )
}
