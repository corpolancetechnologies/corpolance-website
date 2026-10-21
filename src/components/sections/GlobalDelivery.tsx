import { Clock3, MapPin, Video } from 'lucide-react'
import { MAP_SIZE, mapPoints } from '../../data/mapPoints'
import { useInView } from '../../hooks/useInView'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

const destinations = [
  { key: 'usa', label: 'United States' },
  { key: 'canada', label: 'Canada' },
  { key: 'europe', label: 'Europe' },
] as const

/** Quadratic arc from India to a client region, bowed upward. */
function arcPath(from: { x: number; y: number }, to: { x: number; y: number }) {
  const mx = (from.x + to.x) / 2
  const my = Math.min(from.y, to.y) - Math.abs(from.x - to.x) * 0.28
  return `M${from.x} ${from.y} Q${mx} ${my} ${to.x} ${to.y}`
}

const facts = [
  { icon: MapPin, title: 'Delivery team in India', text: 'Our team and resource network operate from India.' },
  { icon: Clock3, title: 'Time-zone-aware scheduling', text: 'Discussions and evaluations are arranged around your working hours.' },
  { icon: Video, title: 'Remote collaboration', text: 'Meetings, demos and engagement communication happen online.' },
]

export function GlobalDelivery() {
  const { ref, inView } = useInView<HTMLDivElement>('0px 0px -15% 0px')
  const india = mapPoints.india

  return (
    <section aria-labelledby="global-title" className="section-y relative overflow-hidden bg-navy-900">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent" />
      <div className="container-x grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            id="global-title"
            tone="light"
            eyebrow="Global delivery"
            title="Based in India. Working with clients worldwide."
            description="We support professionals, agencies and organizations in the United States, Europe, Canada, India and other international markets — remotely, from our base in India."
          />
          <ul className="mt-10 space-y-5">
            {facts.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 80} className="flex gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/8 text-brand-300 ring-1 ring-white/10">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-100/75">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <div ref={ref} className="relative">
          <figure className="relative">
            <div className="relative" style={{ aspectRatio: `${MAP_SIZE.width} / ${MAP_SIZE.height}` }}>
              <img
                src="/images/world-dots.svg"
                alt=""
                width={MAP_SIZE.width}
                height={MAP_SIZE.height}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full opacity-40"
              />
              <svg
                viewBox={`0 0 ${MAP_SIZE.width} ${MAP_SIZE.height}`}
                className="absolute inset-0 size-full overflow-visible"
                role="img"
                aria-label="Map showing connections from India to clients in the United States, Canada and Europe"
              >
                <defs>
                  <linearGradient id="arc" x1="1" x2="0" y1="0" y2="0">
                    <stop offset="0" stopColor="#86b9d6" />
                    <stop offset="1" stopColor="#ffffff" />
                  </linearGradient>
                </defs>
                {destinations.map((d, i) => (
                  <path
                    key={d.key}
                    d={arcPath(india, mapPoints[d.key])}
                    fill="none"
                    stroke="url(#arc)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    pathLength={1}
                    strokeDasharray="1"
                    strokeDashoffset={inView ? 0 : 1}
                    style={{ transition: `stroke-dashoffset 1.6s cubic-bezier(0.65,0,0.35,1) ${0.2 + i * 0.25}s` }}
                  />
                ))}
                {destinations.map((d) => (
                  <g key={d.key} transform={`translate(${mapPoints[d.key].x} ${mapPoints[d.key].y})`}>
                    <circle r="11" fill="#86b9d6" opacity="0.18" />
                    <circle r="4.5" fill="#ffffff" />
                  </g>
                ))}
                <g transform={`translate(${india.x} ${india.y})`}>
                  <circle r="22" fill="#4f97bf" opacity="0.18" />
                  <circle r="12" fill="#4f97bf" opacity="0.35" />
                  <circle r="6" fill="#ffffff" />
                </g>
              </svg>

              {/* Labels as HTML for crisp, responsive text */}
              {[...destinations, { key: 'india' as const, label: 'India · Delivery base' }].map((d) => {
                const p = mapPoints[d.key]
                const isIndia = d.key === 'india'
                return (
                  <span
                    key={d.key}
                    aria-hidden="true"
                    className={
                      isIndia
                        ? 'absolute translate-x-[-50%] translate-y-4 rounded-md bg-white px-2 py-1 text-[0.65rem] font-bold whitespace-nowrap text-navy-800 shadow-lift sm:text-xs'
                        : 'absolute translate-x-[-50%] -translate-y-[170%] rounded bg-navy-800/80 px-1.5 py-0.5 text-[0.6rem] font-semibold whitespace-nowrap text-white ring-1 ring-white/15 sm:text-[0.7rem]'
                    }
                    style={{ left: `${(p.x / MAP_SIZE.width) * 100}%`, top: `${(p.y / MAP_SIZE.height) * 100}%` }}
                  >
                    {d.label}
                  </span>
                )
              })}
            </div>
            <figcaption className="mt-6 text-center text-xs text-brand-100/60">
              Illustrative map. Corpolance operates from India and serves clients remotely; we do not have offices in
              other countries.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
