import React, { useId, useState } from 'react'
import { faEye, faEyeSlash, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import { IconButton } from '../IconButton/IconButton'
import styles from './PasswordField.module.css'

export interface PasswordFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'type'> {
  /** Visible label text displayed above the input. */
  label?: string
  /** Validation error message shown below the field; also applies error styling. */
  error?: string
  /** Helper text shown below the field when there is no error. */
  hint?: string
  /** When true, shows a red asterisk after the label. */
  required?: boolean
}

export const PasswordField = React.forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ label, error, hint, required, className, disabled, onFocus, onBlur, ...props }, ref) => {
    const generatedId = useId()
    const id = props['aria-label'] ? undefined : generatedId
    const errorId = error ? `${generatedId}-error` : undefined
    const hintId = hint ? `${generatedId}-hint` : undefined

    const [isFocused, setIsFocused] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      onBlur?.(e)
    }

    const wrapperClass = [
      styles.inputWrapper,
      isFocused ? styles.wrapperFocused : '',
      error ? styles.wrapperError : '',
      disabled ? styles.wrapperDisabled : '',
    ].filter(Boolean).join(' ')

    return (
      <div className={[styles.root, disabled ? styles.disabled : '', className ?? ''].filter(Boolean).join(' ')}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
            {required && <span className={styles.required} aria-hidden> *</span>}
          </label>
        )}

        <div className={wrapperClass}>
          <input
            ref={ref}
            id={id}
            type={isVisible ? 'text' : 'password'}
            className={styles.input}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={[errorId, hintId].filter(Boolean).join(' ') || undefined}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />

          {error ? (
            <Icon
              icon={faTriangleExclamation}
              className={styles.errorIcon}
              color="var(--icon-color-themeable-state-error)"
            />
          ) : (
            <IconButton
              icon={isVisible ? faEyeSlash : faEye}
              variant="brandPrimary"
              iconSize="small"
              aria-label={isVisible ? 'Hide password' : 'Show password'}
              disabled={disabled}
              tabIndex={-1}
              onMouseDown={(e) => {
                e.preventDefault()
                setIsVisible((v) => !v)
              }}
            />
          )}
        </div>

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

PasswordField.displayName = 'PasswordField'
