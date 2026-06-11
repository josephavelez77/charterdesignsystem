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
  /** Semantic severity: `error` (red), `warning` (amber), `success` (green), `information` (blue), or `none` (neutral). Controls icon and background. */
  urgency?: ToastUrgency
  /** Content rendered inside the component. */
  children: React.ReactNode
  /** Label for the optional action button, e.g. `"Undo"` — renders the button when provided. */
  action?: string
  /** Called when the user clicks the action button. */
  onAction?: () => void
  /** Duration in ms before the toast auto-dismisses. Pass `0` to keep it visible until the user acts. Defaults to `5000`. */
  duration?: number
  /** Called after the exit animation completes; use this to remove the toast from state. */
  onDismiss?: () => void
  /** Additional CSS class applied to the root element for layout overrides. */
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
        <Icon icon={icon} size="medium" color="var(--text-color-static-primary-light)" />
      )}

      <span className={messageClass}>{children}</span>

      {action && (
        <Button
          variant="neutral"
          emphasis="tertiary"
          style={isColored ? { color: 'var(--text-color-static-primary-light)' } : undefined}
          onClick={onAction}
        >
          {action}
        </Button>
      )}
    </div>
  )
}

Toast.displayName = 'Toast'
