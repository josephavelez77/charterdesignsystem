import React from 'react'
import { Button } from '../Button/Button'
import styles from './Card.module.css'

export interface CardAction {
  label: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

export interface CardProps {
  title: string
  subtitle?: string
  content?: string
  children?: React.ReactNode
  mediaSrc?: string
  mediaAlt?: string
  primaryAction?: CardAction
  secondaryAction?: CardAction
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
