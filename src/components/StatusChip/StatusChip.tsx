import React from 'react'
import styles from './StatusChip.module.css'

export type StatusType = 'positive' | 'caution' | 'negative' | 'neutral'
export type StatusLevel = 1 | 2 | 3

export interface StatusChipProps {
  label: string
  statusType: StatusType
  level: StatusLevel
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
