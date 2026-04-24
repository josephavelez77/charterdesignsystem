import React from 'react'
import styles from './SwitchGroup.module.css'

export type SwitchGroupOrientation = 'vertical' | 'horizontal'

export interface SwitchGroupProps {
  children: React.ReactNode
  orientation?: SwitchGroupOrientation
  label?: string
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
