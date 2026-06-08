import React from 'react'
import {
  faTriangleExclamation,
  faCircleExclamation,
  faCircleInfo,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Icon } from '../Icon/Icon'
import styles from './PriorityChip.module.css'

export type PriorityLevel = 'urgent' | 'high' | 'medium' | 'low'

const PRIORITY_ICONS: Record<PriorityLevel, IconDefinition> = {
  urgent: faTriangleExclamation,
  high:   faCircleExclamation,
  medium: faCircleInfo,
  low:    faCircleCheck,
}

const DEFAULT_LABELS: Record<PriorityLevel, string> = {
  urgent: 'Urgent',
  high:   'High',
  medium: 'Medium',
  low:    'Low',
}

export interface PriorityChipProps {
  priority: PriorityLevel
  label?: string
  className?: string
}

export const PriorityChip = React.forwardRef<HTMLDivElement, PriorityChipProps>(
  ({ priority, label, className }, ref) => {
    return (
      <div
        ref={ref}
        className={[styles.chip, className ?? ''].filter(Boolean).join(' ')}
        data-priority={priority}
      >
        {/* Color is inherited from data-priority CSS selectors — no color prop needed */}
        <Icon icon={PRIORITY_ICONS[priority]} size="small" />
        <span className={styles.label}>{label ?? DEFAULT_LABELS[priority]}</span>
      </div>
    )
  },
)

PriorityChip.displayName = 'PriorityChip'
