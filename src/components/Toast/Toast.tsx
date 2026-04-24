import React, { useEffect, useState } from 'react'
import {
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import styles from './Toast.module.css'

export type ToastUrgency = 'error' | 'warning' | 'success' | 'information' | 'none'

export interface ToastProps {
  urgency?: ToastUrgency
  children: React.ReactNode
  /** Label for the optional action button, e.g. "Undo" */
  action?: string
  onAction?: () => void
  /** Duration in ms before auto-dismiss. 0 = stays until manually dismissed. */
  duration?: number
  /** Called after the exit animation completes */
  onDismiss?: () => void
  className?: string
}

const URGENCY_ICON: Record<Exclude<ToastUrgency, 'none'>, IconDefinition> = {
  error: faTriangleExclamation,
  warning: faCircleExclamation,
  success: faCircleCheck,
  information: faCircleInfo,
}

const EXIT_DURATION = 220

export const Toast = ({
  urgency = 'none',
  children,
  action,
  onAction,
  duration = 5000,
  onDismiss,
  className,
}: ToastProps) => {
  const [dismissing, setDismissing] = useState(false)

  // Start exit animation after duration, then call onDismiss
  useEffect(() => {
    if (!duration) return
    const show = setTimeout(() => setDismissing(true), duration)
    return () => clearTimeout(show)
  }, [duration])

  useEffect(() => {
    if (!dismissing) return
    const exit = setTimeout(() => onDismiss?.(), EXIT_DURATION)
    return () => clearTimeout(exit)
  }, [dismissing, onDismiss])

  const isColored = urgency !== 'none'
  const icon = isColored ? URGENCY_ICON[urgency] : null

  const toastClass = [
    styles.toast,
    styles[urgency],
    dismissing ? styles.dismissing : '',
    className,
  ].filter(Boolean).join(' ')

  const messageClass = [
    styles.message,
    isColored ? styles.messageColored : styles.messageNone,
  ].join(' ')

  return (
    <div className={toastClass} role="status" aria-live="polite">
      {icon && (
        <Icon icon={icon} size="medium" color="var(--text-color-static-light)" />
      )}

      <span className={messageClass}>{children}</span>

      {action && (
        <Button
          variant="neutral"
          emphasis="tertiary"
          className={isColored ? styles.actionColored : undefined}
          onClick={onAction}
        >
          {action}
        </Button>
      )}
    </div>
  )
}

Toast.displayName = 'Toast'
