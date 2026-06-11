import React from 'react'
import styles from './SwitchGroup.module.css'

export type SwitchGroupOrientation = 'vertical' | 'horizontal'

export interface SwitchGroupProps {
  /** Content rendered inside the component — should be `SwitchItem` elements. */
  children: React.ReactNode
  /** Layout direction: `vertical` (stacked) or `horizontal` (inline). */
  orientation?: SwitchGroupOrientation
  /** Optional group legend text rendered above the switches inside a `<fieldset>`. */
  label?: string
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

export const SwitchGroup = ({
  children,
  orientation = 'vertical',
  label,
  className,
}: SwitchGroupProps) => {
  const groupClass = [styles.group, className ?? ''].filter(Boolean).join(' ')

  const itemsClass = [
    styles.items,
    orientation === 'horizontal' ? styles.horizontal : styles.vertical,
  ].join(' ')

  return (
    <fieldset className={groupClass}>
      {label && <legend className={styles.legend}>{label}</legend>}
      <div className={itemsClass}>{children}</div>
    </fieldset>
  )
}

SwitchGroup.displayName = 'SwitchGroup'
