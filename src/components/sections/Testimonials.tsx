import { Quote } from 'lucide-react'
import { TESTIMONIALS, type Testimonial } from '../../data/content'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="card flex h-full flex-col p-7">
      <Quote className="size-7 text-brand-300" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 leading-relaxed text-ink">{testimonial.quote}</blockquote>
      <figcaption className="mt-6 border-t border-line pt-4 text-sm">
        <span className="font-semibold text-ink">{testimonial.name}</span>
        {testimonial.role && <span className="block text-muted">{testimonial.role}</span>}
      </figcaption>
    </figure>
  )
}

/** Renders only when genuine, approved testimonials exist in data/content.ts. */
export function Testimonials() {
  const items = TESTIMONIALS.filter((t) => t.approved)
  if (items.length === 0) return null
  return (
    <section aria-labelledby="testimonials-title" className="section-y bg-white">
      <div className="container-x">
        <SectionHeading id="testimonials-title" align="center" eyebrow="Client feedback" title="What our clients say" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name + i} delay={(i % 3) * 80} className="h-full">
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
