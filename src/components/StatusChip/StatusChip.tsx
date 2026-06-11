import React from 'react'
import styles from './StatusChip.module.css'

export type StatusType = 'positive' | 'caution' | 'negative' | 'neutral'
export type StatusLevel = 1 | 2 | 3

export interface StatusChipProps {
  /** Text displayed inside the chip. */
  label: string
  /** Semantic category: `positive` (green), `caution` (amber), `negative` (red), or `neutral` (gray). */
  statusType: StatusType
  /** Visual intensity level within the type: `1` (lightest) to `3` (most saturated). */
  level: StatusLevel
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

export const StatusChip = React.forwardRef<HTMLDivElement, StatusChipProps>(
  ({ label, statusType, level, className }, ref) => {
    return (
      <div
        ref={ref}
        className={[styles.chip, className ?? ''].filter(Boolean).join(' ')}
        data-status={statusType}
        data-level={level}
      >
        <span className={styles.label}>{label}</span>
      </div>
    )
  },
)

StatusChip.displayName = 'StatusChip'
