import React from 'react'
import styles from './CheckboxGroup.module.css'

export type CheckboxGroupOrientation = 'vertical' | 'horizontal'

export interface CheckboxGroupProps {
  children: React.ReactNode
  orientation?: CheckboxGroupOrientation
  label?: string
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
