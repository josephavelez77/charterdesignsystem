import React, { useEffect, useId, useRef, useState } from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import { Menu } from '../Menu/Menu'
import { MenuItem } from '../MenuItem/MenuItem'
import styles from './SelectField.module.css'

export interface SelectOption {
  value: string
  label: string
  icon?: IconDefinition
  disabled?: boolean
}

export interface SelectFieldProps {
  label?: string
  error?: string
  hint?: string
  leadingIcon?: IconDefinition
  options: SelectOption[]
  value?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  className?: string
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
