import React from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from './AttributeChip.module.css'

export interface AttributeChipProps {
  label: string
  icon?: IconDefinition
  disabled?: boolean
  onDismiss?: () => void
  className?: string
}

export const AttributeChip = React.forwardRef<HTMLDivElement, AttributeChipProps>(
  ({ label, icon, disabled, onDismiss, className }, ref) => {
    const iconColor = disabled
      ? 'var(--icon-color-themeable-disabled)'
      : 'var(--icon-color-themeable-primary)'

    return (
      <div
        ref={ref}
        className={[styles.chip, disabled ? styles.disabled : '', className ?? ''].filter(Boolean).join(' ')}
      >
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            style={{ color: iconColor, width: 8, height: 8, flexShrink: 0 }}
            aria-hidden
          />
        )}
        <span className={styles.label}>{label}</span>
        <button
          type="button"
          className={styles.dismiss}
          onClick={(e) => { e.stopPropagation(); onDismiss?.() }}
          disabled={disabled}
          aria-label={`Remove ${label}`}
        >
          <FontAwesomeIcon
            icon={faXmark}
            style={{ width: 8, height: 8 }}
            aria-hidden
          />
        </button>
      </div>
    )
  },
)

AttributeChip.displayName = 'AttributeChip'
