import React, { useId } from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import type { TimeValue } from '../TimePicker/TimePicker'
import styles from './TimeField.module.css'

const defaultFormat = (time: TimeValue, format: '12h' | '24h'): string => {
  if (format === '12h') {
    const period = time.hours < 12 ? 'AM' : 'PM'
    const h = time.hours === 0 ? 12 : time.hours > 12 ? time.hours - 12 : time.hours
    return `${h}:${String(time.minutes).padStart(2, '0')} ${period}`
  }
  return `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}`
}

export interface TimeFieldProps {
  /** Visible label text displayed above the trigger button. */
  label?: string
  /** Validation error message shown below the field; also applies error styling to the trigger. */
  error?: string
  /** Helper text shown below the field when there is no error. */
  hint?: string
  /** Optional leading icon inside the trigger — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  leadingIcon?: IconDefinition
  /** Currently selected time value, or `null` to show the placeholder. */
  value?: TimeValue | null
  /** Text shown inside the trigger when no time is selected. */
  placeholder?: string
  /** When true, the trigger button is non-interactive and appears muted. */
  disabled?: boolean
  /** When true, shows a red asterisk after the label. */
  required?: boolean
  /** Clock format used for display: `12h` (with AM/PM) or `24h`. Defaults to `12h`. */
  format?: '12h' | '24h'
  /** Custom function to format the selected `TimeValue` for display in the trigger, overriding `format`. */
  formatTime?: (time: TimeValue) => string
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
  /** Called when the user clicks the trigger button — use this to open a `TimePicker` popover. */
  onOpen?: () => void
}

export const TimeField = ({
  label,
  error,
  hint,
  leadingIcon,
  value,
  placeholder = 'Select a time',
  disabled = false,
  required = false,
  format = '12h',
  formatTime,
  className,
  onOpen,
}: TimeFieldProps) => {
  const id = useId()
  const errorId = error ? `${id}-error` : undefined
  const hintId = hint ? `${id}-hint` : undefined

  const displayText = value
    ? (formatTime ? formatTime(value) : defaultFormat(value, format))
    : null

  const iconColor = disabled
    ? 'var(--icon-color-themeable-disabled)'
    : 'var(--icon-color-themeable-primary)'

  const triggerClass = [
    styles.trigger,
    error ? styles.triggerError : '',
    disabled ? styles.triggerDisabled : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={[styles.root, disabled ? styles.disabled : '', className ?? ''].filter(Boolean).join(' ')}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required} aria-hidden> *</span>}
        </label>
      )}

      <button
        id={id}
        type="button"
        className={triggerClass}
        disabled={disabled}
        aria-haspopup="dialog"
        aria-describedby={[errorId, hintId].filter(Boolean).join(' ') || undefined}
        onClick={onOpen}
      >
        <div className={styles.triggerContent}>
          {leadingIcon && <Icon icon={leadingIcon} color={iconColor} />}
          <span className={[styles.triggerText, displayText ? styles.value : styles.placeholder].join(' ')}>
            {displayText ?? placeholder}
          </span>
        </div>
        <span aria-hidden="true">
          <Icon icon={faClock} color="var(--icon-color-static-brand-primary)" />
        </span>
      </button>

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
}

TimeField.displayName = 'TimeField'
