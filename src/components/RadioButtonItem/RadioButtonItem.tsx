import React from 'react'
import { RadioButton } from '../RadioButton'
import type { RadioButtonProps } from '../RadioButton'
import styles from './RadioButtonItem.module.css'

export interface RadioButtonItemProps extends RadioButtonProps {
  /** Label text displayed beside the radio button */
  label?: string
  /** Shows a red asterisk after the label */
  required?: boolean
}

export const RadioButtonItem = React.forwardRef<HTMLInputElement, RadioButtonItemProps>(
  ({ label, required, disabled, id, className, ...radioProps }, ref) => {
    return (
      <label
        className={[styles.wrapper, disabled ? styles.disabled : '', className ?? '']
          .filter(Boolean)
          .join(' ')}
      >
        <RadioButton ref={ref} id={id} disabled={disabled} {...radioProps} />

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

RadioButtonItem.displayName = 'RadioButtonItem'
