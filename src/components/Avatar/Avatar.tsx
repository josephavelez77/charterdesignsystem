import React from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import styles from './Avatar.module.css'

export type AvatarType = 'initials' | 'icon' | 'image'
export type AvatarSize = 'default' | 'small'
export type AvatarColor = 'brandPrimary' | 'brandSecondary'

export interface AvatarProps {
  /** Rendering mode: `initials` shows text, `icon` shows a FontAwesome icon, `image` shows a photo. */
  type?: AvatarType
  /** `default` is the standard size; `small` is a compact variant used in lists. */
  size?: AvatarSize
  /** Background color for initials and icon types — `brandPrimary` (blue) or `brandSecondary` (amber). */
  color?: AvatarColor
  /** 1- or 2-character string displayed when `type="initials"`. */
  initials?: string
  /** Icon shown when `type="icon"` — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`; defaults to `faUser`. */
  icon?: IconDefinition
  /** Image URL used when `type="image"`. */
  src?: string
  /** Alt text for the image when `type="image"`. */
  alt?: string
  /** Additional CSS class applied to the root element for layout overrides. */
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
