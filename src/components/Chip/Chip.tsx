import React, { useState } from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Chip.module.css'

export interface ChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  label: string
  icon?: IconDefinition
  selected?: boolean
  defaultSelected?: boolean
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
        ? 'var(--icon-color-static-light)'
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
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            style={{ color: iconColor, width: 8, height: 8, flexShrink: 0 }}
            aria-hidden
          />
        )}
        <span className={styles.label}>{label}</span>
      </button>
    )
  },
)

Chip.displayName = 'Chip'
