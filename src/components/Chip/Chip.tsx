import React, { useState } from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Icon } from '../Icon/Icon'
import styles from './Chip.module.css'

export interface ChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Visible text inside the chip. */
  label: string
  /** Optional leading icon — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  icon?: IconDefinition
  /** Controlled selected state; when provided the component is controlled. */
  selected?: boolean
  /** Initial selected state for uncontrolled usage — ignored when `selected` is provided. */
  defaultSelected?: boolean
  /** Called when the chip is toggled; receives the new selected state as a boolean. */
  onChange?: (selected: boolean) => void
}

export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ label, icon, selected, defaultSelected = false, disabled, onChange, className, onClick, ...props }, ref) => {
    const isControlled = selected !== undefined
    const [isSelected, setIsSelected] = useState(isControlled ? selected : defaultSelected)

    const currentSelected = isControlled ? selected : isSelected

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isControlled) setIsSelected((prev) => !prev)
      onChange?.(!currentSelected)
      onClick?.(e)
    }

    const classNames = [
      styles.chip,
      currentSelected ? styles.selected : '',
      className ?? '',
    ].filter(Boolean).join(' ')

    const iconColor = disabled
      ? 'var(--icon-color-themeable-disabled)'
      : currentSelected
        ? 'var(--icon-color-static-primary-light)'
        : 'var(--icon-color-themeable-primary)'

    return (
      <button
        ref={ref}
        type="button"
        className={classNames}
        disabled={disabled}
        aria-pressed={currentSelected}
        onClick={handleClick}
        {...props}
      >
        {icon && <Icon icon={icon} size="xs" color={iconColor} />}
        <span className={styles.label}>{label}</span>
      </button>
    )
  },
)

Chip.displayName = 'Chip'
