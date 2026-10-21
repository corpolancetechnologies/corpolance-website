import { CalendarCheck2, CheckCircle2, FileText, ScanSearch } from 'lucide-react'

/**
 * Custom hero illustration: a requirement brief connected (via the logo's circuit
 * motif) to matched specialist profiles and an evaluation step. Built in HTML/SVG,
 * so it stays crisp, light and responsive. Roles are illustrative, not real people.
 */
const specialists = [
  { role: 'Data Engineer', stack: ['PySpark', 'Airflow', 'Snowflake'], match: 'Strong match' },
  { role: 'Cloud Engineer', stack: ['AWS', 'Terraform', 'Docker'], match: 'Good match' },
]

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none" aria-hidden="true">
      {/* soft backdrop */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand-50 via-white to-brand-50/40 sm:-inset-10" />
      <div className="grid-bg absolute -inset-6 rounded-[2rem] [mask-image:radial-gradient(closest-side,black,transparent)] sm:-inset-10" />

      <div className="relative grid gap-4 sm:grid-cols-[1fr_1.1fr] sm:gap-5">
        {/* Requirement brief */}
        <div className="card animate-rise p-5 [animation-delay:250ms] sm:row-span-2 sm:self-center">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex size-8 items-center justify-center rounded-md bg-brand-50 text-brand-600">
              <FileText className="size-4" />
            </span>
            <p className="font-display text-sm font-bold text-ink">Requirement brief</p>
          </div>
          <dl className="mt-4 space-y-2.5 text-xs">
            {[
              ['Stack', 'Python · Spark · AWS'],
              ['Scope', 'Pipeline optimisation'],
              ['Engagement', 'Ongoing support'],
              ['Time zone', 'EST overlap'],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-3 border-b border-dashed border-line pb-2 last:border-0 last:pb-0">
                <dt className="text-muted">{k}</dt>
                <dd className="text-right font-medium text-ink">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 flex items-center gap-2 rounded-md bg-brand-50 px-3 py-2 text-xs font-medium text-brand-700">
            <ScanSearch className="size-3.5" />
            Matching on skills & experience
          </div>
        </div>

        {/* Specialist profiles */}
        {specialists.map((s, i) => (
          <div
            key={s.role}
            className={`card relative animate-rise p-4 sm:p-5 ${i > 0 ? 'hidden sm:block' : ''}`}
            style={{ animationDelay: `${450 + i * 150}ms` }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-brand-500 font-display text-sm font-bold text-white">
                  {s.role
                    .split(' ')
                    .map((w) => w[0])
                    .join('')}
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-ink">{s.role}</p>
                  <p className="text-xs text-muted">Proposed specialist</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[0.68rem] font-semibold text-emerald-700 ring-1 ring-emerald-100">
                {s.match}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {s.stack.map((t) => (
                <span key={t} className="rounded-md border border-line bg-ice px-2 py-0.5 text-[0.7rem] font-medium text-body">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Evaluation step */}
        <div className="animate-rise rounded-xl bg-navy-800 p-4 text-white shadow-lift [animation-delay:800ms] sm:col-span-2 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-9 items-center justify-center rounded-md bg-white/10">
                <CalendarCheck2 className="size-4.5 text-brand-300" />
              </span>
              <div>
                <p className="text-sm font-semibold">Technical evaluation scheduled</p>
                <p className="text-xs text-brand-100/70">You meet the specialist before allocation</p>
              </div>
            </div>
            <ol className="flex items-center gap-1.5 text-[0.68rem] font-medium text-brand-100/80">
              {['Discover', 'Match', 'Evaluate', 'Allocate'].map((step, i) => (
                <li key={step} className="flex items-center gap-1.5">
                  <span className={i < 3 ? 'flex items-center gap-1 text-white' : 'flex items-center gap-1 opacity-60'}>
                    {i < 3 ? <CheckCircle2 className="size-3.5 text-brand-300" /> : <span className="size-3.5 rounded-full border border-current" />}
                    {step}
                  </span>
                  {i < 3 && <span className="h-px w-2.5 bg-white/25" />}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Logo mark badge */}
      <div className="absolute -top-5 -left-5 hidden size-14 animate-fade items-center justify-center rounded-xl bg-white shadow-lift ring-1 ring-line [animation-delay:1s] sm:flex">
        <img src="/images/logo-mark.png" alt="" width={198} height={205} className="size-9" />
      </div>
    </div>
  )
}
