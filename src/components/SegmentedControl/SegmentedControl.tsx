import React, { useId, useState } from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Icon } from '../Icon/Icon'
import styles from './SegmentedControl.module.css'

export type SegmentedControlVariant = 'brandPrimary' | 'brandSecondary' | 'neutral'

export interface SegmentedControlOption {
  /** Value reported to `onChange` and matched against `value` / `defaultValue`. Must be unique within the control. */
  value: string
  /** Visible text label for the segment. Keep it short — one or two words. */
  label: string
  /** Optional icon shown before the label — an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  leadingIcon?: IconDefinition
  /** Optional icon shown after the label — an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  trailingIcon?: IconDefinition
  /** When true, only this segment is non-interactive. Defaults to `false`. */
  disabled?: boolean
}

export interface SegmentedControlProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  /** The segments to render, in order. Two to five options are recommended. */
  options: SegmentedControlOption[]
  /** Value of the active segment (controlled). Pair with `onChange`. */
  value?: string
  /** Value of the initially active segment (uncontrolled). Defaults to the first option's value. */
  defaultValue?: string
  /** Called with the newly selected option's `value` when the user picks a segment. */
  onChange?: (value: string) => void
  /** Fill colour of the active segment: `brandPrimary` (blue), `brandSecondary` (rose) or `neutral` (inverse). Defaults to `brandPrimary`. */
  variant?: SegmentedControlVariant
  /** When true, the whole control is non-interactive and rendered in the disabled colours. Defaults to `false`. */
  disabled?: boolean
  /** When true, every segment takes the width of the widest one so the control reads as an even row. When false, each segment hugs its own label. Defaults to `true`. */
  equalWidth?: boolean
  /** Form field name shared by the underlying radio inputs. Defaults to an auto-generated id. */
  name?: string
  /** Accessible name for the group. Required unless `aria-labelledby` is provided. */
  'aria-label'?: string
  /** Id of an element that labels the group, as an alternative to `aria-label`. */
  'aria-labelledby'?: string
  /** Additional CSS class applied to the root element. */
  className?: string
}

export const SegmentedControl = React.forwardRef<HTMLDivElement, SegmentedControlProps>(
  (
    {
      options,
      value: valueProp,
      defaultValue,
      onChange,
      variant = 'brandPrimary',
      disabled = false,
      equalWidth = true,
      name,
      className,
      ...props
    },
    ref,
  ) => {
    const autoName = useId()
    const groupName = name ?? autoName
    const [internal, setInternal] = useState(defaultValue ?? options[0]?.value)
    const isControlled = valueProp !== undefined
    const selected = isControlled ? valueProp : internal

    const handleChange = (next: string) => {
      if (!isControlled) setInternal(next)
      onChange?.(next)
    }

    return (
      <div
        ref={ref}
        role="radiogroup"
        aria-disabled={disabled || undefined}
        className={[
          styles.root,
          styles[variant],
          equalWidth ? styles.equalWidth : '',
          disabled ? styles.disabled : '',
          className ?? '',
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {options.map((option) => {
          const isActive = option.value === selected
          const isDisabled = disabled || option.disabled
          return (
            <label
              key={option.value}
              className={[
                styles.segment,
                isActive ? styles.active : '',
                isDisabled ? styles.segmentDisabled : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <input
                type="radio"
                className={styles.input}
                name={groupName}
                value={option.value}
                checked={isActive}
                disabled={isDisabled}
                onChange={() => handleChange(option.value)}
              />
              {option.leadingIcon && <Icon icon={option.leadingIcon} size="small" />}
              <span>{option.label}</span>
              {option.trailingIcon && <Icon icon={option.trailingIcon} size="small" />}
            </label>
          )
        })}
      </div>
    )
  },
)

SegmentedControl.displayName = 'SegmentedControl'
