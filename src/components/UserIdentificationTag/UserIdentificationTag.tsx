import React from 'react'
import { Avatar } from '../Avatar/Avatar'
import type { AvatarType } from '../Avatar/Avatar'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import styles from './UserIdentificationTag.module.css'

export interface UserIdentificationTagProps {
  name: string
  userId: string
  avatarType?: AvatarType
  avatarSrc?: string
  avatarInitials?: string
  avatarIcon?: IconDefinition
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
