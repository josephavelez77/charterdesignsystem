import React from 'react'
import type { ButtonVariant, ButtonEmphasis } from '../Button/Button'
import styles from './ButtonGroup.module.css'

export interface ButtonGroupItem {
  label: string
  onClick?: () => void
  disabled?: boolean
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
          {item.label}
        </button>
      ))}
    </div>
  )
}

ButtonGroup.displayName = 'ButtonGroup'
