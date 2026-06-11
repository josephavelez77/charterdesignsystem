import React from 'react'
import styles from './Divider.module.css'

export interface DividerProps {
  /** `horizontal` renders a full-width ruled line; `vertical` renders a 1 px tall rule for inline use. */
  orientation?: 'horizontal' | 'vertical'
  /** Additional CSS class applied to the root element for layout overrides. */
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
