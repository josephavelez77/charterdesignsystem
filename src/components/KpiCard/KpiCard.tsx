import React from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './KpiCard.module.css'

export interface KpiCardProps {
  /** Primary metric string displayed prominently on the left (e.g. `"1,234"` or `"$98K"`). */
  value: string
  /** Short description of the metric shown below `value`. */
  description: string
  /** Optional decorative icon displayed on the right side of the card — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  trailingIcon?: IconDefinition
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

export const KpiCard = ({ value, description, trailingIcon, className }: KpiCardProps) => {
  return (
    <div className={[styles.card, className ?? ''].filter(Boolean).join(' ')}>
      <div className={styles.valueSection}>
        <span className={styles.value}>{value}</span>
        <span className={styles.description}>{description}</span>
      </div>
      {trailingIcon && (
        <FontAwesomeIcon
          icon={trailingIcon}
          className={styles.icon}
          aria-hidden
        />
      )}
    </div>
  )
}

KpiCard.displayName = 'KpiCard'
