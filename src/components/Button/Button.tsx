import React from 'react'
import styles from './Button.module.css'

export type ButtonVariant = 'brandPrimary' | 'brandSecondary' | 'neutral'
export type ButtonEmphasis = 'primary' | 'secondary' | 'tertiary'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  emphasis?: ButtonEmphasis
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  fullWidth?: boolean
  loading?: boolean
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
