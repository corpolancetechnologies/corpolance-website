import { useRef } from 'react'
import { STATS } from '../../config/site'
import { useInView } from '../../hooks/useInView'
import { useCountUp } from '../../hooks/useCountUp'

type Stat = (typeof STATS)[number]

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const counted = useCountUp(stat.value, start && !('noCount' in stat), ref)
  const value = 'noCount' in stat ? stat.value : counted
  return (
    <div className="relative px-1 py-2 sm:px-6 lg:px-8">
      <p ref={ref} className="font-display text-4xl font-extrabold tracking-tight text-navy-800 tabular-nums sm:text-5xl">
        {value}
        <span className="text-brand-500">{stat.suffix}</span>
      </p>
      <p className="mt-2 font-display text-base font-semibold text-ink">{stat.label}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted">{stat.detail}</p>
    </div>
  )
}

export function StatsSection() {
  const { ref, inView } = useInView<HTMLDivElement>('0px 0px -15% 0px')
  return (
    <section aria-label="Company facts" className="border-y border-line bg-ice">
      <div className="container-x py-12 sm:py-14">
        <div
          ref={ref}
          className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-line"
        >
          {STATS.map((s) => (
            <StatItem key={s.label} stat={s} start={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
