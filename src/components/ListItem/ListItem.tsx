import React from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar } from '../Avatar/Avatar'
import type { AvatarProps } from '../Avatar/Avatar'
import styles from './ListItem.module.css'

type LeadingSlot =
  /** Mutually exclusive leading slot: provide either an icon or an avatar, not both. */
  | { /** Leading icon — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */ leadingIcon: IconDefinition; leadingAvatar?: never }
  | { /** Leading avatar displayed before the text content. */ leadingAvatar: AvatarProps; leadingIcon?: never }
  | { leadingIcon?: never; leadingAvatar?: never }

type InteractiveProps =
  /** When `interactive` is true the item renders as a `<button>` and shows a trailing chevron. */
  | { /** When true, renders the item as a clickable button with a trailing chevron. */ interactive: true; /** Called when the interactive item is clicked. */ onClick?: React.MouseEventHandler<HTMLButtonElement>; /** When true, the item is non-interactive and appears muted. */ disabled?: boolean }
  | { interactive?: false; onClick?: never; disabled?: never }

export type ListItemProps = {
  /** Primary text displayed in the list item. */
  title: string
  /** Optional secondary text or node displayed below the title. */
  subtitle?: React.ReactNode
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
} & LeadingSlot &
  InteractiveProps

export const ListItem = React.forwardRef<HTMLElement, ListItemProps>(
  (
    {
      title,
      subtitle,
      leadingIcon,
      leadingAvatar,
      interactive = false,
      disabled,
      onClick,
      className,
    },
    ref,
  ) => {
    const classNames = [
      styles.listItem,
      interactive ? styles.interactive : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ')

    const iconColor = disabled
      ? 'var(--icon-color-themeable-disabled)'
      : 'var(--icon-color-themeable-primary)'

    const leading = leadingIcon ? (
      <FontAwesomeIcon
        icon={leadingIcon}
        style={{ color: iconColor, width: 16, height: 16, flexShrink: 0 }}
        aria-hidden
      />
    ) : leadingAvatar ? (
      <Avatar {...leadingAvatar} size="small" />
    ) : null

    const content = (
      <>
        {leading && <span className={styles.leading}>{leading}</span>}
        <span className={styles.text}>
          <span className={styles.title}>{title}</span>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </span>
        {interactive && (
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ color: iconColor, width: 12, height: 12, flexShrink: 0 }}
            aria-hidden
          />
        )}
      </>
    )

    if (interactive) {
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          type="button"
          className={classNames}
          disabled={disabled}
          onClick={onClick}
        >
          {content}
        </button>
      )
    }

    return (
      <div ref={ref as React.Ref<HTMLDivElement>} className={classNames}>
        {content}
      </div>
    )
  },
)

ListItem.displayName = 'ListItem'
