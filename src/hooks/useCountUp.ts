import { useEffect, useState, type RefObject } from 'react'

/**
 * Counts from 0 to `target` once `start` is true. Server render and first client
 * render show the final value, so the real figure is always in the HTML. If the
 * element is already on screen after hydration, the final value is kept as-is.
 */
export function useCountUp(
  target: number,
  start: boolean,
  ref: RefObject<Element | null>,
  duration = 1400,
) {
  const [value, setValue] = useState(target)
  const [armed, setArmed] = useState(false)

  useEffect(() => {
    const el = ref.current
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !el) return
    const rect = el.getBoundingClientRect()
    const visible = rect.top < window.innerHeight && rect.bottom > 0
    if (!visible) {
      setValue(0)
      setArmed(true)
    }
    // Run once after hydration only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!start || !armed) return
    let frame = 0
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, armed, target, duration])

  return value
}
