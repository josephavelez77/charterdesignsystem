import React from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Icon, type IconSize } from '../Icon/Icon'
import styles from './IconButton.module.css'

export type IconButtonVariant = 'brandPrimary' | 'brandSecondary' | 'neutral' | 'ghost'

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconDefinition
  variant?: IconButtonVariant
  iconSize?: IconSize
  /** Required for accessibility when there is no surrounding visible label */
  'aria-label': string
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, variant = 'neutral', iconSize = 'medium', disabled, className, ...props }, ref) => {
    const classNames = [styles.iconButton, styles[variant], className].filter(Boolean).join(' ')

    return (
      <button ref={ref} type="button" className={classNames} disabled={disabled} {...props}>
        <Icon icon={icon} size={iconSize} />
      </button>
    )
  },
)

IconButton.displayName = 'IconButton'
