import React, { useId, useState } from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import styles from './TextArea.module.css'

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
  /** Visible label text displayed above the textarea. */
  label?: string
  /** Validation error message shown below the field; also applies error styling. */
  error?: string
  /** Helper text shown below the field when there is no error. */
  hint?: string
  /** Optional icon displayed in the top-left of the textarea — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  leadingIcon?: IconDefinition
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, hint, leadingIcon, className, disabled, onFocus, onBlur, rows = 5, ...props }, ref) => {
    const generatedId = useId()
    const id = props['aria-label'] ? undefined : generatedId
    const errorId = error ? `${generatedId}-error` : undefined
    const hintId = hint ? `${generatedId}-hint` : undefined

    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false)
      onBlur?.(e)
    }

    const iconColor = disabled
      ? 'var(--icon-color-themeable-disabled)'
      : 'var(--icon-color-themeable-primary)'

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
            {props.required && <span className={styles.required} aria-hidden> *</span>}
          </label>
        )}

        <div className={wrapperClass}>
          {leadingIcon && (
            <Icon icon={leadingIcon} className={styles.leadingIcon} color={iconColor} />
          )}

          <textarea
            ref={ref}
            id={id}
            rows={rows}
            className={styles.textarea}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={[errorId, hintId].filter(Boolean).join(' ') || undefined}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />

          {error && (
            <Icon
              icon={faTriangleExclamation}
              className={styles.errorIcon}
              color="var(--icon-color-themeable-state-error)"
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

TextArea.displayName = 'TextArea'
