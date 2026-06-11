import React from 'react'
import { Avatar } from '../Avatar/Avatar'
import type { AvatarType } from '../Avatar/Avatar'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import styles from './UserIdentificationTag.module.css'

export interface UserIdentificationTagProps {
  /** Full display name shown below the avatar. */
  name: string
  /** User identifier string (e.g. email or system ID) shown beneath the name. */
  userId: string
  /** Avatar rendering mode: `initials`, `icon`, or `image`. Defaults to `initials`. */
  avatarType?: AvatarType
  /** Image URL used when `avatarType="image"`. */
  avatarSrc?: string
  /** 1–2 character string used when `avatarType="initials"`. */
  avatarInitials?: string
  /** Icon used when `avatarType="icon"` — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  avatarIcon?: IconDefinition
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

export const UserIdentificationTag = ({
  name,
  userId,
  avatarType = 'initials',
  avatarSrc,
  avatarInitials,
  avatarIcon,
  className,
}: UserIdentificationTagProps) => {
  const classNames = [styles.root, className].filter(Boolean).join(' ')

  return (
    <div className={classNames}>
      <Avatar
        type={avatarType}
        size="default"
        src={avatarSrc}
        initials={avatarInitials}
        icon={avatarIcon}
        alt={name}
      />
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.userId}>{userId}</span>
      </div>
    </div>
  )
}

UserIdentificationTag.displayName = 'UserIdentificationTag'
