import React from 'react'
import styles from './Badge.module.css'

export type BadgeVariant = 'numeric' | 'dot'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** `numeric` shows a count; `dot` shows a small colored indicator with no text. */
  variant?: BadgeVariant
  /** The numeric count to display when `variant="numeric"`. */
  value?: number
  /** When set and `value` exceeds this number, the badge shows `{max}+` instead of the raw count. */
  max?: number
}

export const Badge = ({ variant = 'numeric', value = 0, max, className, ...props }: BadgeProps) => {
  const classNames = [styles.badge, styles[variant], className].filter(Boolean).join(' ')

  if (variant === 'dot') {
    return <span className={classNames} aria-hidden="true" {...props} />
  }

  const overMax = max !== undefined && value > max
  const displayValue = overMax ? max : value

  return (
    <span className={classNames} aria-label={`${value} notifications`} {...props}>
      <span className={styles.value}>{displayValue}</span>
      {overMax && <span className={styles.plus}>+</span>}
    </span>
  )
}

Badge.displayName = 'Badge'
