import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { buttonClass, type ButtonVariant, type ButtonSize } from './buttonStyles'

interface CommonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

/** Internal route link styled as a button. */
export function ButtonLink({ to, children, variant, size, className }: CommonProps & { to: string }) {
  return (
    <Link to={to} className={buttonClass(variant, size, className)}>
      {children}
    </Link>
  )
}
