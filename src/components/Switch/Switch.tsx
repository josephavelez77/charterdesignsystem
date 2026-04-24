import React, { useEffect, useRef, useState } from 'react'
import styles from './Switch.module.css'

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'role'> {
  /** Controlled checked state */
  checked?: boolean
  /** Uncontrolled default checked state */
  defaultChecked?: boolean
  /** Called when the switch is toggled */
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  className?: string
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ checked, defaultChecked, disabled, onChange, className, id, ...props }, ref) => {
    const isControlled = checked !== undefined
    const [isChecked, setIsChecked] = useState(isControlled ? checked : (defaultChecked ?? false))
    const innerRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      if (isControlled) setIsChecked(checked)
    }, [checked, isControlled])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setIsChecked(e.target.checked)
      onChange?.(e)
    }

    const trackClass = [
      styles.track,
      isChecked ? styles.checked : '',
      disabled ? styles.disabled : '',
      className ?? '',
    ].filter(Boolean).join(' ')

    return (
      <span className={trackClass}>
        <input
          ref={ref ?? innerRef}
          type="checkbox"
          role="switch"
          id={id}
          className={styles.input}
          disabled={disabled}
          checked={isControlled ? checked : isChecked}
          onChange={handleChange}
          aria-checked={isControlled ? checked : isChecked}
          {...props}
        />
        <span className={styles.knob} aria-hidden="true" />
      </span>
    )
  },
)

Switch.displayName = 'Switch'
