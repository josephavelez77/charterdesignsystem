import React, { useId, useRef, useState } from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faChevronUp, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import styles from './NumberField.module.css'

export interface NumberFieldProps {
  /** Visible label text displayed above the input. */
  label?: string
  /** Validation error message shown below the field; also applies error styling. */
  error?: string
  /** Helper text shown below the field when there is no error. */
  hint?: string
  /** Optional leading icon inside the input — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  leadingIcon?: IconDefinition
  /** Static text appended after the number value inside the input (e.g. `"kg"`, `"%"`). Only visible when a value is set. */
  suffix?: string
  /** When true, shows a red asterisk after the label. */
  required?: boolean
  /** Controlled numeric value; when provided the component is controlled. */
  value?: number
  /** Initial value for uncontrolled usage — ignored when `value` is provided. */
  defaultValue?: number
  /** Minimum allowed value; the decrement button is disabled at this boundary. */
  min?: number
  /** Maximum allowed value; the increment button is disabled at this boundary. */
  max?: number
  /** Amount added or subtracted on each stepper click. Defaults to `1`. */
  step?: number
  /** Placeholder text shown when the input is empty. */
  placeholder?: string
  /** When true, the input and stepper buttons are non-interactive. */
  disabled?: boolean
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
  /** Called with the new numeric value (or `undefined` when cleared) on each change. */
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
