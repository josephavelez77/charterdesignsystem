import React from 'react'
import { faMagnifyingGlass, faMessage, faBell, faGear } from '@fortawesome/free-solid-svg-icons'
import { TextField } from '../TextField/TextField'
import { IconButton } from '../IconButton/IconButton'
import { Avatar } from '../Avatar/Avatar'
import styles from './GlobalToolbar.module.css'

export interface GlobalToolbarProps {
  /** URL of the current user's avatar photo; when omitted, falls back to initials. */
  avatarSrc?: string
  /** 1–2 character initials displayed in the avatar when no `avatarSrc` is provided. Defaults to `"AB"`. */
  avatarInitials?: string
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

export const GlobalToolbar = ({
  avatarSrc,
  avatarInitials = 'AB',
  className,
}: GlobalToolbarProps) => {
  return (
    <div className={[styles.toolbar, className ?? ''].filter(Boolean).join(' ')}>
      <div className={styles.search}>
        <TextField
          aria-label="Search"
          placeholder="Search"
          leadingIcon={faMagnifyingGlass}
        />
      </div>

      <div className={styles.actions}>
        <IconButton
          icon={faMessage}
          variant="brandPrimary"
          aria-label="Messages"
        />
        <IconButton
          icon={faBell}
          variant="brandPrimary"
          aria-label="Notifications"
        />
        <IconButton
          icon={faGear}
          variant="brandPrimary"
          aria-label="Settings"
        />
        <button type="button" className={styles.avatarButton} aria-label="Account menu">
          <Avatar
            type={avatarSrc ? 'image' : 'initials'}
            src={avatarSrc}
            initials={avatarInitials}
            size="small"
          />
        </button>
      </div>
    </div>
  )
}

GlobalToolbar.displayName = 'GlobalToolbar'
