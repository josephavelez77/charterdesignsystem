import React, { useId, useRef, useState } from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faChevronUp, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import styles from './NumberField.module.css'

export interface NumberFieldProps {
  label?: string
  error?: string
  hint?: string
  leadingIcon?: IconDefinition
  suffix?: string
  required?: boolean
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  placeholder?: string
  disabled?: boolean
  className?: string
  onChange?: (value: number | undefined) => void
}

export const NumberField = React.forwardRef<HTMLInputElement, NumberFieldProps>(
  (
    {
      label,
      error,
      hint,
      leadingIcon,
      suffix,
      required,
      value,
      defaultValue,
      min,
      max,
      step = 1,
      placeholder,
      disabled,
      className,
      onChange,
    },
    ref,
  ) => {
    const generatedId = useId()
    const errorId = error ? `${generatedId}-error` : undefined
    const hintId = hint ? `${generatedId}-hint` : undefined

    const isControlled = value !== undefined
    const [internalValue, setInternalValue] = useState<number | undefined>(defaultValue)
    const currentValue = isControlled ? value : internalValue
    const inputRef = useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState(false)

    const update = (next: number | undefined) => {
      if (!isControlled) setInternalValue(next)
      onChange?.(next)
    }

    const increment = () => {
      const base = currentValue ?? 0
      const next = base + step
      update(max !== undefined ? Math.min(max, next) : next)
    }

    const decrement = () => {
      const base = currentValue ?? 0
      const next = base - step
      update(min !== undefined ? Math.max(min, next) : next)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value
      if (raw === '') { update(undefined); return }
      const num = parseFloat(raw)
      if (!isNaN(num)) update(num)
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

    const atMin = min !== undefined && (currentValue ?? 0) <= min
    const atMax = max !== undefined && (currentValue ?? 0) >= max

    return (
      <div className={[styles.root, disabled ? styles.disabled : '', className ?? ''].filter(Boolean).join(' ')}>
        {label && (
          <label htmlFor={generatedId} className={styles.label}>
            {label}
            {required && <span className={styles.required} aria-hidden> *</span>}
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
            id={generatedId}
            type="number"
            className={styles.input}
            value={currentValue ?? ''}
            placeholder={placeholder}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={[errorId, hintId].filter(Boolean).join(' ') || undefined}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {suffix && currentValue !== undefined && (
            <span className={styles.suffix}>{suffix}</span>
          )}

          {error ? (
            <Icon
              icon={faTriangleExclamation}
              className={styles.errorIcon}
              color="var(--icon-color-themeable-state-error)"
            />
          ) : (
            <div className={styles.stepper}>
              <button
                type="button"
                className={styles.stepperBtn}
                onClick={increment}
                disabled={disabled || atMax}
                aria-label="Increment"
                tabIndex={-1}
              >
                <Icon icon={faChevronUp} size="xs" />
              </button>
              <div className={styles.stepperDivider} />
              <button
                type="button"
                className={styles.stepperBtn}
                onClick={decrement}
                disabled={disabled || atMin}
                aria-label="Decrement"
                tabIndex={-1}
              >
                <Icon icon={faChevronDown} size="xs" />
              </button>
            </div>
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

NumberField.displayName = 'NumberField'
