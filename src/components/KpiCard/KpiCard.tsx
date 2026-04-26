import React from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './KpiCard.module.css'

export interface KpiCardProps {
  value: string
  description: string
  trailingIcon?: IconDefinition
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
