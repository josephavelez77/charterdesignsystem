import React, { useState } from 'react'
import {
  faTriangleExclamation,
  faCircleExclamation,
  faCircleCheck,
  faCircleInfo,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import { IconButton } from '../IconButton/IconButton'
import styles from './Alert.module.css'

export type AlertSeverity = 'error' | 'warning' | 'success' | 'info'

export interface AlertProps {
  severity?: AlertSeverity
  children: React.ReactNode
  dismissible?: boolean
  onDismiss?: () => void
  className?: string
}

const severityIcons = {
  error: faTriangleExclamation,
  warning: faCircleExclamation,
  success: faCircleCheck,
  info: faCircleInfo,
}

export const Alert = ({
  severity = 'info',
  children,
  dismissible = false,
  onDismiss,
  className,
}: AlertProps) => {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  const handleDismiss = () => {
    setDismissed(true)
    onDismiss?.()
  }

  const classNames = [styles.alert, styles[severity], className].filter(Boolean).join(' ')
  const role = severity === 'error' || severity === 'warning' ? 'alert' : 'status'

  return (
    <div role={role} className={classNames}>
      <div className={styles.content}>
        <span className={styles.leadingIcon}>
          <Icon icon={severityIcons[severity]} size="medium" />
        </span>
        <p className={styles.message}>{children}</p>
      </div>
      {dismissible && (
        <IconButton
          icon={faXmark}
          iconSize="small"
          variant="brandPrimary"
          onClick={handleDismiss}
          aria-label="Dismiss alert"
        />
      )}
    </div>
  )
}

Alert.displayName = 'Alert'
