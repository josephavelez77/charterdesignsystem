import React from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Icon } from '../Icon/Icon'
import styles from './MenuItem.module.css'

export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visible text displayed in the menu item. */
  label: string
  /** Optional icon to the left of the label — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  leadingIcon?: IconDefinition
  /** Optional icon to the right of the label — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  trailingIcon?: IconDefinition
  /** When true, applies the selected/active highlight style to the item. */
  selected?: boolean
  /** `default` uses standard text color; `danger` uses the error/destructive color. */
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
        ? 'var(--icon-color-static-primary-light)'
        : variant === 'danger'
          ? 'var(--icon-color-themeable-state-error)'
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
          <Icon icon={leadingIcon} size="small" color={iconColor} />
        )}
        <span className={styles.label}>{label}</span>
        {trailingIcon && (
          <Icon icon={trailingIcon} size="small" color={iconColor} className={styles.trailingIcon} />
        )}
      </button>
    )
  },
)

MenuItem.displayName = 'MenuItem'
