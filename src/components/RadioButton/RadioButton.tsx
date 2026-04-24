import React from 'react'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './RadioButton.module.css'

export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean
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
        <FontAwesomeIcon
          icon={checked ? faCircleDot : faCircle}
          style={{ color: iconColor, width: 16, height: 16, flexShrink: 0 }}
          aria-hidden
        />
      </span>
    )
  },
)

RadioButton.displayName = 'RadioButton'
