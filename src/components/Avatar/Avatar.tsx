import React from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import styles from './Avatar.module.css'

export type AvatarType = 'initials' | 'icon' | 'image'
export type AvatarSize = 'default' | 'small'
export type AvatarColor = 'brandPrimary' | 'brandSecondary'

export interface AvatarProps {
  type?: AvatarType
  size?: AvatarSize
  /** Background color for initials and icon types */
  color?: AvatarColor
  /** For type="initials" — 1 or 2 characters */
  initials?: string
  /** For type="icon" — defaults to faUser */
  icon?: IconDefinition
  /** For type="image" */
  src?: string
  alt?: string
  className?: string
}

export const Avatar = ({
  type = 'initials',
  size = 'default',
  color = 'brandSecondary',
  initials = 'AB',
  icon = faUser,
  src,
  alt = '',
  className,
}: AvatarProps) => {
  const classNames = [
    styles.avatar,
    styles[type],
    styles[size],
    type !== 'image' ? styles[color] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classNames} aria-label={type === 'initials' ? initials : undefined}>
      {type === 'initials' && (
        <span className={`${styles.initialsText} ${styles[`initialsText_${size}`]}`}>
          {initials}
        </span>
      )}

      {type === 'icon' && (
        <Icon icon={icon} size={size === 'default' ? 'medium' : 'small'} />
      )}

      {type === 'image' && src && (
        <img className={styles.img} src={src} alt={alt} />
      )}
    </div>
  )
}

Avatar.displayName = 'Avatar'
