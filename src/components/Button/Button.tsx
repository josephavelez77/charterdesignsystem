import React from 'react'
import styles from './Button.module.css'

export type ButtonVariant = 'brandPrimary' | 'brandSecondary' | 'neutral' | 'statusError'
export type ButtonEmphasis = 'primary' | 'secondary' | 'tertiary'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Color scheme: `brandPrimary` (blue), `brandSecondary` (amber), `neutral` (gray), or `statusError` (red). */
  variant?: ButtonVariant
  /** Fill style: `primary` (filled), `secondary` (outlined), `tertiary` (ghost/text-only). */
  emphasis?: ButtonEmphasis
  /** Node rendered to the left of the button label — typically an `<Icon>` element. */
  leadingIcon?: React.ReactNode
  /** Node rendered to the right of the button label — typically an `<Icon>` element. */
  trailingIcon?: React.ReactNode
  /** When true, the button stretches to fill its container's full width. */
  fullWidth?: boolean
  /** When true, replaces button content with a spinner and keeps the button width stable; also disables click. */
  loading?: boolean
  /** Content rendered inside the component. */
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'brandPrimary',
      emphasis = 'primary',
      leadingIcon,
      trailingIcon,
      fullWidth = false,
      loading = false,
      disabled,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const classNames = [
      styles.button,
      styles[variant],
      styles[emphasis],
      fullWidth ? styles.fullWidth : '',
      loading ? styles.loading : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? (
          <span className={styles.spinner} aria-hidden="true" />
        ) : (
          <>
            {leadingIcon}
            {children}
            {trailingIcon}
          </>
        )}
      </button>
    )
  },
)

Button.displayName = 'Button'
