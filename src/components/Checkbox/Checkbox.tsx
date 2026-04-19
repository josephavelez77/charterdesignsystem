import React from 'react'
import styles from './Checkbox.module.css'

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  required?: boolean
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, required, disabled, className, id, ...props }, ref) => {
    return (
      <label className={[styles.wrapper, disabled ? styles.disabled : '', className ?? ''].filter(Boolean).join(' ')}>
        <span className={styles.hitArea}>
          <input
            ref={ref}
            type="checkbox"
            id={id}
            className={styles.input}
            disabled={disabled}
            required={required}
            {...props}
          />
          <span className={styles.box} aria-hidden="true">
            <svg className={styles.check} viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </span>

        {label && (
          <span className={styles.label}>
            {label}
            {required && <span className={styles.asterisk} aria-hidden="true">*</span>}
          </span>
        )}
      </label>
    )
  },
)

Checkbox.displayName = 'Checkbox'
