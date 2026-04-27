import React, { useEffect, useRef, useState } from 'react'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../Button/Button'
import { IconButton } from '../IconButton/IconButton'
import { Menu } from '../Menu/Menu'
import { MenuItem } from '../MenuItem/MenuItem'
import { Breadcrumb, type BreadcrumbItem } from '../Breadcrumb/Breadcrumb'
import styles from './PageHeader.module.css'

export interface PageAction {
  label: string
  onClick?: () => void
  disabled?: boolean
}

export interface PageHeaderProps {
  title: string
  breadcrumbs?: BreadcrumbItem[]
  primaryAction?: PageAction
  secondaryAction?: PageAction
  tertiaryActions?: PageAction[]
  className?: string
}

export const PageHeader = ({
  title,
  breadcrumbs,
  primaryAction,
  secondaryAction,
  tertiaryActions,
  className,
}: PageHeaderProps) => {
  const [overflowOpen, setOverflowOpen] = useState(false)
  const overflowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!overflowOpen) return
    const handleOutside = (e: MouseEvent) => {
      if (overflowRef.current && !overflowRef.current.contains(e.target as Node)) {
        setOverflowOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [overflowOpen])

  useEffect(() => {
    if (!overflowOpen) return
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOverflowOpen(false) }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [overflowOpen])

  const hasActions = primaryAction || secondaryAction || (tertiaryActions && tertiaryActions.length > 0)

  return (
    <div className={[styles.header, className ?? ''].filter(Boolean).join(' ')}>
      <div className={styles.left}>
        <span className={styles.title}>{title}</span>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumb items={breadcrumbs} />
        )}
      </div>

      {hasActions && (
        <div className={styles.actions}>
          {tertiaryActions && tertiaryActions.length > 0 && (
            <div ref={overflowRef} className={styles.overflow}>
              <IconButton
                icon={faEllipsisVertical}
                variant="brandPrimary"
                aria-label="More actions"
                aria-expanded={overflowOpen}
                aria-haspopup="menu"
                onClick={() => setOverflowOpen((o) => !o)}
              />
              {overflowOpen && (
                <div className={styles.overflowMenu}>
                  <Menu>
                    {tertiaryActions.map((action, i) => (
                      <MenuItem
                        key={i}
                        label={action.label}
                        disabled={action.disabled}
                        onClick={() => { action.onClick?.(); setOverflowOpen(false) }}
                      />
                    ))}
                  </Menu>
                </div>
              )}
            </div>
          )}

          {secondaryAction && (
            <Button
              variant="brandPrimary"
              emphasis="tertiary"
              disabled={secondaryAction.disabled}
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.label}
            </Button>
          )}

          {primaryAction && (
            <Button
              variant="brandPrimary"
              emphasis="primary"
              disabled={primaryAction.disabled}
              onClick={primaryAction.onClick}
            >
              {primaryAction.label}
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

PageHeader.displayName = 'PageHeader'
