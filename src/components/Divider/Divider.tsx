import React from 'react'
import styles from './Divider.module.css'

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export const Divider = ({ orientation = 'horizontal', className }: DividerProps) => {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={[
        styles.divider,
        orientation === 'vertical' ? styles.vertical : styles.horizontal,
        className ?? '',
      ].filter(Boolean).join(' ')}
    />
  )
}

Divider.displayName = 'Divider'
