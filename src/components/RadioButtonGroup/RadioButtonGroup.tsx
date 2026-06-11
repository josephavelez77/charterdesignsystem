import React, { useState } from 'react'
import styles from './RadioButtonGroup.module.css'

export type RadioButtonGroupOrientation = 'vertical' | 'horizontal'

export interface RadioButtonGroupProps {
  /** Content rendered inside the component — should be `RadioButtonItem` elements. */
  children: React.ReactNode
  /** Layout direction: `vertical` (stacked) or `horizontal` (inline). */
  orientation?: RadioButtonGroupOrientation
  /** Optional group legend text rendered above the options inside a `<fieldset>`. */
  label?: string
  /** Shared name for all radio inputs — required for native radio group behavior. */
  name: string
  /** Controlled selected value; when provided the component is controlled. */
  value?: string
  /** Initial selected value for uncontrolled usage — ignored when `value` is provided. */
  defaultValue?: string
  /** Called with the value of the newly selected option when selection changes. */
  onChange?: (value: string) => void
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

export const RadioButtonGroup = ({
  children,
  orientation = 'vertical',
  label,
  name,
  value,
  defaultValue,
  onChange,
  className,
}: RadioButtonGroupProps) => {
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue ?? '')

  const selectedValue = isControlled ? value : internalValue

  const handleChange = (itemValue: string) => {
    if (!isControlled) setInternalValue(itemValue)
    onChange?.(itemValue)
  }

  const groupClass = [styles.group, className ?? ''].filter(Boolean).join(' ')
  const itemsClass = [
    styles.items,
    orientation === 'horizontal' ? styles.horizontal : styles.vertical,
  ].join(' ')

  const clonedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child
    const childValue = (child.props as { value?: string }).value
    return React.cloneElement(child as React.ReactElement<{
      name?: string
      checked?: boolean
      onChange?: React.ChangeEventHandler<HTMLInputElement>
    }>, {
      name,
      checked: childValue !== undefined ? childValue === selectedValue : undefined,
      onChange: childValue !== undefined
        ? () => handleChange(childValue)
        : (child.props as { onChange?: React.ChangeEventHandler<HTMLInputElement> }).onChange,
    })
  })

  return (
    <fieldset className={groupClass}>
      {label && <legend className={styles.legend}>{label}</legend>}
      <div className={itemsClass}>{clonedChildren}</div>
    </fieldset>
  )
}

RadioButtonGroup.displayName = 'RadioButtonGroup'
