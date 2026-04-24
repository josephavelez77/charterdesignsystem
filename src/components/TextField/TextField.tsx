import React, { useId, useRef, useState } from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faCircleXmark, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import { IconButton } from '../IconButton/IconButton'
import styles from './TextField.module.css'

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'> {
  label?: string
  error?: string
  hint?: string
  leadingIcon?: IconDefinition
  trailingIcon?: IconDefinition
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { label, error, hint, leadingIcon, trailingIcon, className, disabled, onFocus, onBlur, ...props },
    ref,
  ) => {
    const generatedId = useId()
    const id = props['aria-label'] ? undefined : generatedId
    const errorId = error ? `${generatedId}-error` : undefined
    const hintId = hint ? `${generatedId}-hint` : undefined

    const inputRef = useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      onBlur?.(e)
    }

    const handleClear = () => {
      const input = inputRef.current
      if (!input) return
      const nativeValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set
      nativeValueSetter?.call(input, '')
      input.dispatchEvent(new Event('input', { bubbles: true }))
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

    const trailingSlot = (() => {
      if (error) {
        return <Icon icon={faTriangleExclamation} color="var(--icon-color-static-state-error)" />
      }
      if (isFocused) {
        return (
          <IconButton
            icon={faCircleXmark}
            variant="brandPrimary"
            iconSize="small"
            aria-label="Clear"
            tabIndex={-1}
            onMouseDown={(e) => { e.preventDefault(); handleClear() }}
          />
        )
      }
      if (trailingIcon) {
        return <Icon icon={trailingIcon} color={iconColor} />
      }
      return null
    })()

    return (
      <div className={[styles.root, disabled ? styles.disabled : '', className ?? ''].filter(Boolean).join(' ')}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}

        <div className={wrapperClass}>
          {leadingIcon && <Icon icon={leadingIcon} color={iconColor} />}
          <input
            ref={(el) => {
              (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = el
              if (typeof ref === 'function') ref(el)
              else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = el
            }}
            id={id}
            className={styles.input}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={[errorId, hintId].filter(Boolean).join(' ') || undefined}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          {trailingSlot}
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

TextField.displayName = 'TextField'
