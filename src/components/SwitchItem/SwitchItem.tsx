import React from 'react'
import { Switch } from '../Switch'
import type { SwitchProps } from '../Switch'
import styles from './SwitchItem.module.css'

export interface SwitchItemProps extends SwitchProps {
  /** Label text displayed beside the switch */
  label?: string
  /** Shows a red asterisk after the label */
  required?: boolean
}

export const SwitchItem = React.forwardRef<HTMLInputElement, SwitchItemProps>(
  ({ label, required, disabled, id, className, ...switchProps }, ref) => {
    return (
      <label
        className={[styles.wrapper, disabled ? styles.disabled : '', className ?? ''].filter(Boolean).join(' ')}
      >
        <Switch ref={ref} id={id} disabled={disabled} {...switchProps} />

        {label && (
          <span className={styles.label}>
            {label}
            {required && (
              <span className={styles.asterisk} aria-hidden="true">
                *
              </span>
            )}
          </span>
        )}
      </label>
    )
  },
)

SwitchItem.displayName = 'SwitchItem'
