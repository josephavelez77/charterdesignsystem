import React from 'react'
import styles from './Badge.module.css'

export type BadgeVariant = 'numeric' | 'dot'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  value?: number
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
