import React from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
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
        {icon && <Icon icon={icon} size="xs" color={iconColor} />}
        <span className={styles.label}>{label}</span>
        <button
          type="button"
          className={styles.dismiss}
          onClick={(e) => { e.stopPropagation(); onDismiss?.() }}
          disabled={disabled}
          aria-label={`Remove ${label}`}
        >
          <Icon icon={faXmark} size="xs" />
        </button>
      </div>
    )
  },
)

AttributeChip.displayName = 'AttributeChip'
