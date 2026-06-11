import React, { useEffect, useId, useRef, useState } from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import { Menu } from '../Menu/Menu'
import { MenuItem } from '../MenuItem/MenuItem'
import styles from './SelectField.module.css'

export interface SelectOption {
  /** Internal value passed to `onChange` when this option is selected. */
  value: string
  /** Human-readable text displayed in the dropdown. */
  label: string
  /** Optional icon shown to the left of the option label — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  icon?: IconDefinition
  /** When true, this option is non-interactive in the dropdown. */
  disabled?: boolean
}

export interface SelectFieldProps {
  /** Visible label text displayed above the trigger. */
  label?: string
  /** Validation error message shown below the field; also applies error styling. */
  error?: string
  /** Helper text shown below the field when there is no error. */
  hint?: string
  /** Optional leading icon inside the trigger — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  leadingIcon?: IconDefinition
  /** Array of selectable options rendered in the dropdown. */
  options: SelectOption[]
  /** Controlled selected value; when provided the component is controlled. */
  value?: string
  /** Text shown in the trigger when no option is selected. */
  placeholder?: string
  /** When true, the trigger is non-interactive and the dropdown cannot be opened. */
  disabled?: boolean
  /** When true, shows a red asterisk after the label. */
  required?: boolean
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
  /** Called with the selected option's `value` string when the user picks an option. */
  onChange?: (value: string) => void
}

export const SelectField = ({
  label,
  error,
  hint,
  leadingIcon,
  options,
  value,
  placeholder = 'Select an option',
  disabled = false,
  required,
  className,
  onChange,
}: SelectFieldProps) => {
  const generatedId = useId()
  const errorId = error ? `${generatedId}-error` : undefined
  const hintId = hint ? `${generatedId}-hint` : undefined

  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = useState<string | undefined>()
  const currentValue = isControlled ? value : internalValue
  const selectedOption = options.find((o) => o.value === currentValue)

  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const handleMouseDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleMouseDown)
    return () => document.removeEventListener('mousedown', handleMouseDown)
  }, [isOpen])

  const handleToggle = () => {
    if (!disabled) setIsOpen((o) => !o)
  }

  const handleSelect = (optionValue: string) => {
    if (!isControlled) setInternalValue(optionValue)
    onChange?.(optionValue)
    setIsOpen(false)
  }

  const iconColor = disabled
    ? 'var(--icon-color-themeable-disabled)'
    : 'var(--icon-color-themeable-primary)'

  const triggerClass = [
    styles.trigger,
    isOpen ? styles.triggerOpen : '',
    error ? styles.triggerError : '',
    disabled ? styles.triggerDisabled : '',
  ].filter(Boolean).join(' ')

  const chevronClass = [styles.chevron, isOpen ? styles.chevronOpen : ''].filter(Boolean).join(' ')

  return (
    <div
      ref={rootRef}
      className={[styles.root, disabled ? styles.disabled : '', className ?? ''].filter(Boolean).join(' ')}
    >
      {label && (
        <label htmlFor={generatedId} className={styles.label}>
          {label}
          {required && <span className={styles.required} aria-hidden> *</span>}
        </label>
      )}

      <div className={styles.triggerWrapper}>
        <button
          id={generatedId}
          type="button"
          className={triggerClass}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-describedby={[errorId, hintId].filter(Boolean).join(' ') || undefined}
          onClick={handleToggle}
        >
          <div className={styles.triggerContent}>
            {(selectedOption?.icon ?? leadingIcon) && (
              <Icon icon={(selectedOption?.icon ?? leadingIcon)!} color={iconColor} />
            )}
            <span className={[styles.triggerText, selectedOption ? styles.value : styles.placeholder].join(' ')}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
          </div>

          <span className={chevronClass}>
            <Icon icon={faChevronDown} size="xs" />
          </span>
        </button>

        {isOpen && (
          <div className={styles.menuWrapper}>
            <Menu role="listbox">
              {options.map((option) => (
                <MenuItem
                  key={option.value}
                  label={option.label}
                  leadingIcon={option.icon}
                  selected={option.value === currentValue}
                  disabled={option.disabled}
                  role="option"
                  onClick={() => handleSelect(option.value)}
                />
              ))}
            </Menu>
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
}

SelectField.displayName = 'SelectField'
