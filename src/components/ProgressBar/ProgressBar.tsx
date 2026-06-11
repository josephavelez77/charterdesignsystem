import React from 'react'
import styles from './ProgressBar.module.css'

export interface ProgressBarProps {
  /** Completion percentage from 0–100. Omit or pass `undefined` to enable indeterminate (looping animation) mode. */
  value?: number
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

export const ProgressBar = ({ value, className }: ProgressBarProps) => {
  const isIndeterminate = value === undefined
  const clamped = isIndeterminate ? 0 : Math.min(100, Math.max(0, value))

  return (
    <div
      role="progressbar"
      aria-valuemin={isIndeterminate ? undefined : 0}
      aria-valuemax={isIndeterminate ? undefined : 100}
      aria-valuenow={isIndeterminate ? undefined : clamped}
      className={[styles.track, className ?? ''].filter(Boolean).join(' ')}
    >
      <div
        className={[styles.fill, isIndeterminate ? styles.indeterminate : ''].filter(Boolean).join(' ')}
        style={isIndeterminate ? undefined : { width: `${clamped}%` }}
      />
    </div>
  )
}

ProgressBar.displayName = 'ProgressBar'
