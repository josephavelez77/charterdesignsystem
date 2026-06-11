import React from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import styles from './AttributeChip.module.css'

export interface AttributeChipProps {
  /** Text displayed inside the chip. */
  label: string
  /** Optional leading icon — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  icon?: IconDefinition
  /** When true, the dismiss button is disabled and the chip appears muted. */
  disabled?: boolean
  /** Called when the user clicks the ✕ dismiss button inside the chip. */
  onDismiss?: () => void
  /** Additional CSS class applied to the root element for layout overrides. */
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
