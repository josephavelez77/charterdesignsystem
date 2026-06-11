import React from 'react'
import styles from './Logo.module.css'

export type LogoOrientation = 'horizontal' | 'vertical'
export type LogoSize = 'small' | 'large'

export interface LogoProps {
  /** `horizontal` places the mark and wordmark side by side; `vertical` stacks them. */
  orientation?: LogoOrientation
  /** `large` is the standard size; `small` is a compact variant for toolbars. */
  size?: LogoSize
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

export const Logo = ({
  orientation = 'horizontal',
  size = 'large',
  className,
}: LogoProps) => {
  return (
    <div
      className={[
        styles.logo,
        styles[orientation],
        styles[size],
        className ?? '',
      ].filter(Boolean).join(' ')}
      aria-label="base"
      role="img"
    >
      <div className={styles.mark} />
      <span className={styles.wordmark}>base</span>
    </div>
  )
}

Logo.displayName = 'Logo'
