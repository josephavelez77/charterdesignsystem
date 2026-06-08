import React, { useEffect, useRef, useState } from 'react'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { faSquareCheck, faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import styles from './Checkbox.module.css'

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  required?: boolean
  indeterminate?: boolean
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, required, disabled, indeterminate = false, className, id, checked, defaultChecked, onChange, ...props }, ref) => {
    const isControlled = checked !== undefined
    const [isChecked, setIsChecked] = useState(isControlled ? checked : (defaultChecked ?? false))
    const innerRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      if (isControlled) setIsChecked(checked)
    }, [checked, isControlled])

    useEffect(() => {
      const el = (ref as React.RefObject<HTMLInputElement>)?.current ?? innerRef.current
      if (el) el.indeterminate = indeterminate
    }, [indeterminate, ref])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setIsChecked(e.target.checked)
      onChange?.(e)
    }

    const isActive = indeterminate || isChecked
    const icon = indeterminate ? faSquareMinus : isChecked ? faSquareCheck : faSquare
    const iconColor = disabled
      ? 'var(--icon-color-themeable-disabled)'
      : isActive
        ? 'var(--icon-color-static-brand-primary)'
        : 'var(--icon-color-themeable-primary)'

    return (
      <label className={[styles.wrapper, disabled ? styles.disabled : '', isActive ? styles.checked : '', className ?? ''].filter(Boolean).join(' ')}>
        <span className={styles.hitArea}>
          <input
            ref={ref ?? innerRef}
            type="checkbox"
            id={id}
            className={styles.input}
            disabled={disabled}
            required={required}
            checked={isControlled ? checked : isChecked}
            onChange={handleChange}
            {...props}
          />
          <Icon icon={icon} size="medium" color={iconColor} />
        </span>

        {label && (
          <span className={styles.label}>
            {label}
            {required && <span className={styles.asterisk} aria-hidden="true">*</span>}
          </span>
        )}
      </label>
    )
  },
)

Checkbox.displayName = 'Checkbox'
