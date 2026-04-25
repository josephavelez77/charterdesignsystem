import React from 'react'
import styles from './Spinner.module.css'

export type SpinnerSize = 'small' | 'medium' | 'large'
export type SpinnerColor = 'brand' | 'light' | 'neutral'

const SIZE_MAP: Record<SpinnerSize, { px: number; stroke: number }> = {
  small:  { px: 16, stroke: 2 },
  medium: { px: 24, stroke: 2 },
  large:  { px: 32, stroke: 3 },
}

export interface SpinnerProps {
  size?: SpinnerSize
  color?: SpinnerColor
  className?: string
}

export const Spinner = ({ size = 'medium', color = 'brand', className }: SpinnerProps) => {
  const { px, stroke } = SIZE_MAP[size]
  const radius = (px - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const arc = circumference * 0.75
  const gap = circumference - arc

  return (
    <svg
      width={px}
      height={px}
      viewBox={`0 0 ${px} ${px}`}
      fill="none"
      aria-hidden
      className={[styles.spinner, styles[color], className ?? ''].filter(Boolean).join(' ')}
    >
      <circle
        cx={px / 2}
        cy={px / 2}
        r={radius}
        stroke="currentColor"
        strokeWidth={stroke}
        strokeDasharray={`${arc} ${gap}`}
        strokeLinecap="round"
      />
    </svg>
  )
}

Spinner.displayName = 'Spinner'
