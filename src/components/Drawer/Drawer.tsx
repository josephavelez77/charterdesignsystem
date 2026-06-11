import React, { useEffect, useId, useState } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../Button/Button'
import { IconButton } from '../IconButton/IconButton'
import styles from './Drawer.module.css'

export interface DrawerAction {
  /** Visible text for this action button. */
  label: string
  /** Called when the user clicks this action button. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  /** When true, the action button is non-interactive. */
  disabled?: boolean
}

export interface DrawerProps {
  /** When true, slides the drawer into view; when false, slides it out with an exit animation. */
  open: boolean
  /** Called when the user clicks the scrim or the dismiss ✕ button. */
  onClose?: () => void
  /** Heading text shown in the drawer header. */
  title: string
  /** Optional secondary text displayed below the title. */
  subtitle?: string
  /** When true (default), renders an ✕ button in the header to close the drawer. */
  dismissible?: boolean
  /** Fallback body text rendered when no `children` are provided. */
  content?: string
  /** Custom content rendered in the drawer body — takes precedence over `content`. */
  children?: React.ReactNode
  /** Primary call-to-action button shown in the drawer footer. */
  primaryAction?: DrawerAction
  /** Secondary action button shown alongside the primary action in the footer. */
  secondaryAction?: DrawerAction
  /** Additional CSS class applied to the drawer panel for layout overrides. */
  className?: string
}

export const Drawer = ({
  open,
  onClose,
  title,
  subtitle,
  dismissible = true,
  content,
  children,
  primaryAction,
  secondaryAction,
  className,
}: DrawerProps) => {
  const titleId = useId()
  const [isVisible, setIsVisible] = useState(open)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    if (open) {
      setIsVisible(true)
      setIsExiting(false)
    } else if (isVisible) {
      setIsExiting(true)
    }
  }, [open])

  const handleAnimationEnd = () => {
    if (isExiting) {
      setIsVisible(false)
      setIsExiting(false)
    }
  }

  if (!isVisible) return null

  return (
    <div className={[styles.scrim, isExiting ? styles.scrimExit : styles.scrimEnter].join(' ')} onClick={onClose}>
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={[styles.drawer, isExiting ? styles.drawerExit : styles.drawerEnter, className].filter(Boolean).join(' ')}
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2 id={titleId} className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          {dismissible && (
            <IconButton
              icon={faXmark}
              variant="brandPrimary"
              aria-label="Dismiss drawer"
              onClick={onClose}
            />
          )}
        </div>

        <div className={styles.content}>
          {children ?? (content && <p className={styles.contentText}>{content}</p>)}
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
      </aside>
    </div>
  )
}

Drawer.displayName = 'Drawer'
