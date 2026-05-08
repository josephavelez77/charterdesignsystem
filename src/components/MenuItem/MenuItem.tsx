import React from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './MenuItem.module.css'

export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  leadingIcon?: IconDefinition
  trailingIcon?: IconDefinition
  selected?: boolean
  variant?: 'default' | 'danger'
}

export const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  ({ label, leadingIcon, trailingIcon, selected = false, variant = 'default', disabled, className, ...props }, ref) => {
    const classNames = [
      styles.menuItem,
      selected ? styles.selected : '',
      variant === 'danger' ? styles.danger : '',
      className ?? '',
    ].filter(Boolean).join(' ')

    const iconColor = disabled
      ? 'var(--icon-color-themeable-disabled)'
      : selected
        ? 'var(--icon-color-static-light)'
        : variant === 'danger'
          ? 'var(--icon-color-static-state-error)'
          : 'var(--icon-color-themeable-primary)'

    return (
      <button
        ref={ref}
        type="button"
        role="menuitem"
        className={classNames}
        disabled={disabled}
        aria-selected={selected}
        {...props}
      >
        {leadingIcon && (
          <FontAwesomeIcon
            icon={leadingIcon}
            style={{ color: iconColor, width: 14, height: 14, flexShrink: 0 }}
            aria-hidden
          />
        )}
        <span className={styles.label}>{label}</span>
        {trailingIcon && (
          <FontAwesomeIcon
            icon={trailingIcon}
            style={{ color: iconColor, width: 14, height: 14, flexShrink: 0, marginLeft: 'auto' }}
            aria-hidden
          />
        )}
      </button>
    )
  },
)

MenuItem.displayName = 'MenuItem'
