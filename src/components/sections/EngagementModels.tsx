import { Link } from 'react-router'
import { ArrowRight, Check } from 'lucide-react'
import { ENGAGEMENT_MODELS, type EngagementModel } from '../../data/content'
import { contactHref } from '../../data/services'
import { cn } from '../../lib/cn'
import { ButtonLink } from '../common/Button'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

const tones = {
  agency: {
    card: 'bg-navy-800 text-brand-100/85 border-navy-800',
    title: 'text-white',
    icon: 'bg-white/10 text-brand-300 ring-white/15',
    tag: 'bg-white/10 text-brand-200',
    check: 'text-brand-300',
    audience: 'text-brand-200',
    button: 'light' as const,
    link: 'text-brand-200 hover:text-white',
  },
  individual: {
    card: 'bg-white border-line',
    title: 'text-ink',
    icon: 'bg-brand-50 text-brand-600 ring-brand-100',
    tag: 'bg-brand-50 text-brand-700',
    check: 'text-brand-500',
    audience: 'text-brand-600',
    button: 'primary' as const,
    link: 'text-brand-600 hover:text-navy-800',
  },
  organization: {
    card: 'bg-brand-50 border-brand-100',
    title: 'text-ink',
    icon: 'bg-white text-navy-700 ring-brand-100',
    tag: 'bg-white text-navy-700',
    check: 'text-navy-600',
    audience: 'text-navy-600',
    button: 'primary' as const,
    link: 'text-navy-700 hover:text-brand-600',
  },
}

function ModelCard({ model, index }: { model: EngagementModel; index: number }) {
  const t = tones[model.id]
  const Icon = model.icon
  return (
    <Reveal delay={index * 90} className="h-full">
      <article
        className={cn(
          'flex h-full flex-col rounded-2xl border p-7 shadow-card transition-shadow duration-300 hover:shadow-lift sm:p-8',
          t.card,
        )}
        aria-labelledby={`model-${model.id}`}
      >
        <div className="flex items-center justify-between">
          <span className={cn('inline-flex size-12 items-center justify-center rounded-xl ring-1', t.icon)}>
            <Icon className="size-6" aria-hidden="true" />
          </span>
          <span className={cn('rounded-full px-3 py-1 text-xs font-semibold tracking-wide', t.tag)}>{model.eyebrow}</span>
        </div>
        <h3 id={`model-${model.id}`} className={cn('mt-6 text-2xl font-bold', t.title)}>
          {model.title}
        </h3>
        <p className={cn('mt-2 text-sm font-medium', t.audience)}>{model.audience}</p>
        <p className="mt-4 leading-relaxed">{model.summary}</p>
        <ul className="mt-6 space-y-3 text-sm">
          {model.points.map((p) => (
            <li key={p} className="flex gap-3">
              <Check className={cn('mt-0.5 size-4 shrink-0', t.check)} aria-hidden="true" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-8">
          <ButtonLink to={contactHref({ type: model.id })} variant={t.button}>
            {model.cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </ButtonLink>
          <Link to={`/services#${model.anchor}`} className={cn('inline-flex min-h-11 items-center text-sm font-semibold', t.link)}>
            Learn more<span className="sr-only"> about {model.title}</span>
          </Link>
        </div>
      </article>
    </Reveal>
  )
}

export function EngagementModels() {
  return (
    <section aria-labelledby="models-title" className="section-y bg-white">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="models-title"
            eyebrow="Engagement models"
            title="Three ways to work with Corpolance"
            description="Whether you are an agency extending delivery capacity, a professional who needs expert help, or an organization adding technical talent — there is a clear path for you."
          />
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {ENGAGEMENT_MODELS.map((m, i) => (
            <ModelCard key={m.id} model={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
