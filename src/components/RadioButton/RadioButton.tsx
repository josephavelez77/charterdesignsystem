import React from 'react'
import { faCircle, faCircleDot } from '@fortawesome/free-regular-svg-icons'
import { Icon } from '../Icon/Icon'
import styles from './RadioButton.module.css'

export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Whether this radio option is currently selected. */
  checked?: boolean
  /** The `name` attribute shared across all radio buttons in the same group — required for native exclusivity. */
  name?: string
}

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ disabled, className, id, checked = false, onChange, name, ...props }, ref) => {
    const iconColor = disabled
      ? 'var(--icon-color-themeable-disabled)'
      : checked
        ? 'var(--icon-color-static-brand-primary)'
        : 'var(--icon-color-themeable-primary)'

    return (
      <span
        className={[
          styles.hitArea,
          checked ? styles.checked : '',
          disabled ? styles.disabled : '',
          className ?? '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <input
          ref={ref}
          type="radio"
          id={id}
          name={name}
          className={styles.input}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <Icon icon={checked ? faCircleDot : faCircle} size="medium" color={iconColor} />
      </span>
    )
  },
)

RadioButton.displayName = 'RadioButton'
