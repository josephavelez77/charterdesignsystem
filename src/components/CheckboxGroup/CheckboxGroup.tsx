import React from 'react'
import styles from './CheckboxGroup.module.css'

export type CheckboxGroupOrientation = 'vertical' | 'horizontal'

export interface CheckboxGroupProps {
  /** Content rendered inside the component — should be `Checkbox` or `CheckboxItem` elements. */
  children: React.ReactNode
  /** Layout direction of the checkboxes: `vertical` (stacked) or `horizontal` (inline). */
  orientation?: CheckboxGroupOrientation
  /** Optional group legend text rendered above the checkboxes inside a `<fieldset>`. */
  label?: string
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

export const CheckboxGroup = ({
  children,
  orientation = 'vertical',
  label,
  className,
}: CheckboxGroupProps) => {
  const groupClass = [
    styles.group,
    className ?? '',
  ].filter(Boolean).join(' ')

  const itemsClass = [
    styles.items,
    orientation === 'horizontal' ? styles.horizontal : styles.vertical,
  ].join(' ')

  return (
    <fieldset className={groupClass}>
      {label && <legend className={styles.legend}>{label}</legend>}
      <div className={itemsClass}>
        {children}
      </div>
    </fieldset>
  )
}

CheckboxGroup.displayName = 'CheckboxGroup'
