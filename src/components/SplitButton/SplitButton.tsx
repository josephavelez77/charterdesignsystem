import React, { useRef, useState, useEffect } from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import type { ButtonVariant, ButtonEmphasis } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import { Menu } from '../Menu/Menu'
import { MenuItem } from '../MenuItem/MenuItem'
import styles from './SplitButton.module.css'

export interface SplitButtonItem {
  /** Text label for this dropdown menu item. */
  label: string
  /** Called when the user selects this item from the dropdown. */
  onClick?: () => void
  /** When true, this menu item is non-interactive. */
  disabled?: boolean
}

export interface SplitButtonProps {
  /** Text label for the primary (left) button. */
  label: string
  /** Called when the user clicks the primary (left) button. */
  onClick?: () => void
  /** Additional actions rendered in the chevron dropdown menu. */
  items: SplitButtonItem[]
  /** Color scheme: `brandPrimary` (blue), `brandSecondary` (amber), `neutral` (gray), or `statusError` (red). */
  variant?: ButtonVariant
  /** Fill style: `primary` (filled), `secondary` (outlined), `tertiary` (ghost). */
  emphasis?: ButtonEmphasis
  /** When true, both the primary button and the chevron are disabled. */
  disabled?: boolean
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

export const SplitButton = ({
  label,
  onClick,
  items,
  variant = 'brandPrimary',
  emphasis = 'primary',
  disabled = false,
  className,
}: SplitButtonProps) => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  const itemClass = [styles.btn, styles[variant], styles[emphasis]].join(' ')

  return (
    <div
      ref={containerRef}
      className={[styles.splitButton, className ?? ''].filter(Boolean).join(' ')}
    >
      <button
        type="button"
        disabled={disabled}
        onClick={onClick}
        className={[itemClass, styles.main].join(' ')}
      >
        {label}
      </button>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={[itemClass, styles.chevron].join(' ')}
      >
        <Icon icon={faChevronDown} size="small" aria-label="" />
      </button>
      {open && (
        <div className={styles.dropdown}>
          <Menu>
            {items.map((item, i) => (
              <MenuItem
                key={i}
                label={item.label}
                disabled={item.disabled}
                onClick={() => {
                  item.onClick?.()
                  setOpen(false)
                }}
              />
            ))}
          </Menu>
        </div>
      )}
    </div>
  )
}

SplitButton.displayName = 'SplitButton'
