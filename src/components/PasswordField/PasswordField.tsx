import React, { useId, useState } from 'react'
import { faEye, faEyeSlash, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import { IconButton } from '../IconButton/IconButton'
import styles from './PasswordField.module.css'

export interface PasswordFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'type'> {
  label?: string
  error?: string
  hint?: string
}

export const PasswordField = React.forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ label, error, hint, className, disabled, onFocus, onBlur, ...props }, ref) => {
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
              color="var(--icon-color-static-state-error)"
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
