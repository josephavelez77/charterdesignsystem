import React from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import type { ButtonVariant, ButtonEmphasis } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import styles from './ButtonGroup.module.css'

export interface ButtonGroupItem {
  label: string
  onClick?: () => void
  disabled?: boolean
  leadingIcon?: IconDefinition
  trailingIcon?: IconDefinition
}

export interface ButtonGroupProps {
  items: ButtonGroupItem[]
  variant?: ButtonVariant
  emphasis?: ButtonEmphasis
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
