import React, { useId } from 'react'
import styles from './TextField.module.css'

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'> {
  label?: string
  error?: string
  hint?: string
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, hint, className, disabled, ...props }, ref) => {
    const generatedId = useId()
    const id = props['aria-label'] ? undefined : generatedId
    const errorId = error ? `${generatedId}-error` : undefined
    const hintId = hint ? `${generatedId}-hint` : undefined

    const inputClass = [
      styles.input,
      error ? styles.inputError : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={`${styles.root} ${disabled ? styles.disabled : ''}`}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={inputClass}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={[errorId, hintId].filter(Boolean).join(' ') || undefined}
          {...props}
        />
        {error && (
          <span id={errorId} className={styles.errorText} role="alert">
            {error}
          </span>
        )}
        {hint && !error && (
          <span id={hintId} className={styles.hintText}>
            {hint}
          </span>
        )}
      </div>
    )
  },
)

TextField.displayName = 'TextField'
