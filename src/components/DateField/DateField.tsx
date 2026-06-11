import React, { useId } from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import styles from './DateField.module.css'

const defaultFormat = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

export interface DateFieldProps {
  /** Visible label text displayed above the trigger button. */
  label?: string
  /** Validation error message displayed below the field; also applies error styling to the trigger. */
  error?: string
  /** Helper text shown below the field when there is no error. */
  hint?: string
  /** Optional leading icon inside the trigger — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  leadingIcon?: IconDefinition
  /** Currently selected date, or `null` to show the placeholder. */
  value?: Date | null
  /** Text shown inside the trigger when no date is selected. */
  placeholder?: string
  /** When true, the trigger button is non-interactive and appears muted. */
  disabled?: boolean
  /** When true, shows a red asterisk after the label. */
  required?: boolean
  /** Custom function to format the selected `Date` for display in the trigger. */
  formatDate?: (date: Date) => string
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
  /** Called when the user clicks the trigger button — use this to open a `DatePicker` popover. */
  onOpen?: () => void
}

export const DateField = ({
  label,
  error,
  hint,
  leadingIcon,
  value,
  placeholder = 'Select a date',
  disabled = false,
  required = false,
  formatDate = defaultFormat,
  className,
  onOpen,
}: DateFieldProps) => {
  const id = useId()
  const errorId = error ? `${id}-error` : undefined
  const hintId = hint ? `${id}-hint` : undefined

  const displayText = value ? formatDate(value) : null

  const iconColor = disabled
    ? 'var(--icon-color-themeable-disabled)'
    : 'var(--icon-color-themeable-primary)'

  const triggerClass = [
    styles.trigger,
    error ? styles.triggerError : '',
    disabled ? styles.triggerDisabled : '',
  ].filter(Boolean).join(' ')

  return (
    <div
      className={[styles.root, disabled ? styles.disabled : '', className ?? ''].filter(Boolean).join(' ')}
    >
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
          <Icon icon={faCalendar} color="var(--icon-color-static-brand-primary)" />
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

DateField.displayName = 'DateField'
