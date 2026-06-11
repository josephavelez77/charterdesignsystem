import React from 'react'
import { Button } from '../Button/Button'
import styles from './Card.module.css'

export interface CardAction {
  /** Visible text for the action button. */
  label: string
  /** Called when the user clicks the action button. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  /** When true, the action button is non-interactive. */
  disabled?: boolean
}

export interface CardProps {
  /** Heading text displayed at the top of the card. */
  title: string
  /** Optional secondary text displayed below the title. */
  subtitle?: string
  /** Fallback text body rendered when no `children` are provided. */
  content?: string
  /** Custom content rendered in the card body — takes precedence over `content`. */
  children?: React.ReactNode
  /** URL of an image rendered as a full-width banner above the card header. */
  mediaSrc?: string
  /** Alt text for the media image. */
  mediaAlt?: string
  /** Primary call-to-action button shown in the card footer. */
  primaryAction?: CardAction
  /** Secondary action button shown alongside the primary action in the footer. */
  secondaryAction?: CardAction
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

export const Card = ({
  title,
  subtitle,
  content,
  children,
  mediaSrc,
  mediaAlt = '',
  primaryAction,
  secondaryAction,
  className,
}: CardProps) => {
  const classNames = [styles.card, className].filter(Boolean).join(' ')

  return (
    <div className={classNames}>
      {mediaSrc && (
        <div className={styles.mediaWrapper}>
          <img className={styles.mediaImg} src={mediaSrc} alt={mediaAlt} />
        </div>
      )}

      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      <div className={styles.content}>
        {children ?? (
          content && <p className={styles.contentText}>{content}</p>
        )}
      </div>

      {(primaryAction || secondaryAction) && (
        <div className={styles.actions}>
          {secondaryAction && (
            <Button
              variant="brandPrimary"
              emphasis="tertiary"
              onClick={secondaryAction.onClick}
              disabled={secondaryAction.disabled}
            >
              {secondaryAction.label}
            </Button>
          )}
          {primaryAction && (
            <Button
              variant="brandPrimary"
              emphasis="primary"
              onClick={primaryAction.onClick}
              disabled={primaryAction.disabled}
            >
              {primaryAction.label}
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

Card.displayName = 'Card'
