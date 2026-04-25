import React, { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import type { ButtonVariant, ButtonEmphasis } from '../Button/Button'
import { Menu } from '../Menu/Menu'
import { MenuItem } from '../MenuItem/MenuItem'
import styles from './SplitButton.module.css'

export interface SplitButtonItem {
  label: string
  onClick?: () => void
  disabled?: boolean
}

export interface SplitButtonProps {
  label: string
  onClick?: () => void
  items: SplitButtonItem[]
  variant?: ButtonVariant
  emphasis?: ButtonEmphasis
  disabled?: boolean
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
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{ width: 12, height: 12 }}
          aria-hidden
        />
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
