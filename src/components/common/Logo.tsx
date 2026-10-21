import { Link } from 'react-router'
import { SITE } from '../../config/site'
import { cn } from '../../lib/cn'

/** Official logo lockup (mark + wordmark). Original artwork with only the background removed. */
export function Logo({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onNavigate}
      className={cn('inline-flex shrink-0 items-center', className)}
      aria-label={`${SITE.name} home`}
    >
      <img src={SITE.images.logoHeader} alt={`${SITE.name} logo`} width={480} height={123} className="h-9 w-auto sm:h-10" />
    </Link>
  )
}
