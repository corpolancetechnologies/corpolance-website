import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { servicePath, type Service } from '../../data/services'

/** Card linking to a dedicated service page. The whole card is the link. */
export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <Link
      to={servicePath(service.id)}
      className="group relative flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
    >
      <span className="flex items-start justify-between">
        <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <ArrowUpRight
          className="size-5 text-brand-300 transition-[transform,color] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600"
          aria-hidden="true"
        />
      </span>
      <span className="mt-5 font-display text-lg font-bold text-ink">{service.title}</span>
      <span className="mt-2 text-sm leading-relaxed text-body">{service.summary}</span>
    </Link>
  )
}
