import React, { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import { Menu } from '../Menu/Menu'
import { MenuItem } from '../MenuItem/MenuItem'
import { AttributeChip } from '../AttributeChip/AttributeChip'
import type { SelectOption } from '../SelectField/SelectField'
import styles from './MultiSelectField.module.css'

const CHIP_GAP = 8

export interface MultiSelectFieldProps {
  /** Visible label text displayed above the trigger. */
  label?: string
  /** Validation error message shown below the field; also applies error styling. */
  error?: string
  /** Helper text shown below the field when there is no error. */
  hint?: string
  /** Optional leading icon inside the trigger — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  leadingIcon?: IconDefinition
  /** Array of selectable options; each requires a `value` string and a `label` string. */
  options: SelectOption[]
  /** Controlled array of selected option values; when provided the component is controlled. */
  value?: string[]
  /** Initial selection for uncontrolled usage — ignored when `value` is provided. */
  defaultValue?: string[]
  /** Text shown when no options are selected. */
  placeholder?: string
  /** When true, the trigger is non-interactive and all options are hidden. */
  disabled?: boolean
  /** When true, shows a red asterisk after the label. */
  required?: boolean
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
  /** Called with the updated array of selected values whenever the selection changes. */
  onChange?: (values: string[]) => void
}

export const MultiSelectField = ({
  label,
  error,
  hint,
  leadingIcon,
  options,
  value,
  defaultValue = [],
  placeholder = 'Select options',
  disabled = false,
  required = false,
  className,
  onChange,
}: MultiSelectFieldProps) => {
  const generatedId = useId()
  const errorId = error ? `${generatedId}-error` : undefined
  const hintId = hint ? `${generatedId}-hint` : undefined

  const isControlled = value !== undefined
  const [internalValues, setInternalValues] = useState<string[]>(defaultValue)
  const currentValues = isControlled ? (value ?? []) : internalValues

  const [isOpen, setIsOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState<number | null>(null)

  const rootRef = useRef<HTMLDivElement>(null)
  const chipAreaRef = useRef<HTMLDivElement>(null)
  const chipMeasureRefs = useRef<(HTMLDivElement | null)[]>([])
  const overflowMeasureRef = useRef<HTMLSpanElement>(null)

  const selectedOptions = options.filter((o) => currentValues.includes(o.value))
  const selectedKey = selectedOptions.map((o) => o.value).join(',')

  // Close on outside click
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

  // Chip overflow measurement
  useLayoutEffect(() => {
    if (!chipAreaRef.current || selectedOptions.length === 0) {
      setVisibleCount(selectedOptions.length)
      return
    }

    const calculate = () => {
      const containerW = chipAreaRef.current!.offsetWidth
      const overflowW = overflowMeasureRef.current?.offsetWidth ?? 40

      let usedW = 0
      let count = 0

      for (let i = 0; i < selectedOptions.length; i++) {
        const el = chipMeasureRefs.current[i]
        if (!el) { count++; continue }

        const chipW = el.offsetWidth
        const gap = i > 0 ? CHIP_GAP : 0
        const isLast = i === selectedOptions.length - 1
        // If this isn't the last chip, reserve space for the overflow chip
        const overflowSpace = isLast ? 0 : CHIP_GAP + overflowW

        if (usedW + gap + chipW + overflowSpace <= containerW) {
          usedW += gap + chipW
          count++
        } else {
          break
        }
      }

      setVisibleCount(count)
    }

    calculate()
    const ro = new ResizeObserver(calculate)
    ro.observe(chipAreaRef.current)
    return () => ro.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions.length, selectedKey])

  const handleToggle = () => {
    if (!disabled) setIsOpen((o) => !o)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleToggle() }
    if (e.key === 'Escape') setIsOpen(false)
  }

  const handleToggleOption = (optionValue: string) => {
    const next = currentValues.includes(optionValue)
      ? currentValues.filter((v) => v !== optionValue)
      : [...currentValues, optionValue]
    if (!isControlled) setInternalValues(next)
    onChange?.(next)
  }

  const handleDeselect = (optionValue: string) => {
    const next = currentValues.filter((v) => v !== optionValue)
    if (!isControlled) setInternalValues(next)
    onChange?.(next)
  }

  const triggerClass = [
    styles.trigger,
    isOpen ? styles.triggerOpen : '',
    error ? styles.triggerError : '',
    disabled ? styles.triggerDisabled : '',
  ].filter(Boolean).join(' ')

  const chevronClass = [styles.chevron, isOpen ? styles.chevronOpen : ''].filter(Boolean).join(' ')

  const iconColor = disabled
    ? 'var(--icon-color-themeable-disabled)'
    : 'var(--icon-color-themeable-primary)'

  const visibleOptions = selectedOptions.slice(0, visibleCount ?? selectedOptions.length)
  const hiddenCount = selectedOptions.length - visibleOptions.length

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
        {/* div + role="combobox" instead of <button> so we can nest dismiss buttons inside */}
        <div
          id={generatedId}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-multiselectable="true"
          aria-disabled={disabled || undefined}
          aria-describedby={[errorId, hintId].filter(Boolean).join(' ') || undefined}
          tabIndex={disabled ? -1 : 0}
          className={triggerClass}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
        >
          <div className={styles.triggerContent}>
            {leadingIcon && <Icon icon={leadingIcon} color={iconColor} />}

            {selectedOptions.length === 0 ? (
              <span className={styles.placeholder}>{placeholder}</span>
            ) : (
              <div ref={chipAreaRef} className={styles.chipArea}>
                {/* Hidden measurement chips — always rendered so we know their widths */}
                <div className={styles.measureContainer} aria-hidden>
                  {selectedOptions.map((opt, i) => (
                    <AttributeChip
                      key={opt.value}
                      label={opt.label}
                      ref={(el) => { chipMeasureRefs.current[i] = el }}
                    />
                  ))}
                  <span ref={overflowMeasureRef} className={styles.overflowChip}>
                    +{selectedOptions.length}
                  </span>
                </div>

                {/* Visible chips */}
                {visibleOptions.map((opt) => (
                  <AttributeChip
                    key={opt.value}
                    label={opt.label}
                    disabled={disabled}
                    onDismiss={() => handleDeselect(opt.value)}
                  />
                ))}
                {hiddenCount > 0 && (
                  <span className={styles.overflowChip}>+{hiddenCount}</span>
                )}
              </div>
            )}
          </div>

          <span className={chevronClass}>
            <Icon icon={faChevronDown} size="xs" />
          </span>
        </div>

        {isOpen && (
          <div className={styles.menuWrapper}>
            <Menu role="listbox">
              {options.map((option) => (
                <MenuItem
                  key={option.value}
                  label={option.label}
                  selected={currentValues.includes(option.value)}
                  trailingIcon={currentValues.includes(option.value) ? faCheck : undefined}
                  disabled={option.disabled}
                  role="option"
                  aria-selected={currentValues.includes(option.value)}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleToggleOption(option.value)
                  }}
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

MultiSelectField.displayName = 'MultiSelectField'
