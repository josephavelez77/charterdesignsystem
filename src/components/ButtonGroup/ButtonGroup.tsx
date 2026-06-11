import React from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import type { ButtonVariant, ButtonEmphasis } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import styles from './ButtonGroup.module.css'

export interface ButtonGroupItem {
  /** Visible text label for this button. */
  label: string
  /** Called when the user clicks this button. */
  onClick?: () => void
  /** When true, this button is non-interactive and appears muted. */
  disabled?: boolean
  /** Optional icon displayed to the left of the label — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  leadingIcon?: IconDefinition
  /** Optional icon displayed to the right of the label — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  trailingIcon?: IconDefinition
}

export interface ButtonGroupProps {
  /** Array of button definitions rendered as a connected segmented control. */
  items: ButtonGroupItem[]
  /** Color scheme applied to every button: `brandPrimary` (blue), `brandSecondary` (amber), `neutral` (gray), or `statusError` (red). */
  variant?: ButtonVariant
  /** Fill style applied to every button: `primary` (filled), `secondary` (outlined), `tertiary` (ghost). */
  emphasis?: ButtonEmphasis
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

export const ButtonGroup = ({
  items,
  variant = 'brandPrimary',
  emphasis = 'primary',
  className,
}: ButtonGroupProps) => {
  return (
    <div
      className={[styles.buttonGroup, className ?? ''].filter(Boolean).join(' ')}
      role="group"
    >
      {items.map((item, i) => (
        <button
          key={i}
          type="button"
          disabled={item.disabled}
          onClick={item.onClick}
          className={[
            styles.item,
            styles[variant],
            styles[emphasis],
          ].join(' ')}
        >
          {item.leadingIcon && <Icon icon={item.leadingIcon} size="small" />}
          {item.label}
          {item.trailingIcon && <Icon icon={item.trailingIcon} size="small" />}
        </button>
      ))}
    </div>
  )
}

ButtonGroup.displayName = 'ButtonGroup'
