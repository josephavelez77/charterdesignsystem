import React, { useId, useRef, useState, useEffect } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '../IconButton/IconButton'
import styles from './Popover.module.css'

export type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right'

export interface PopoverProps {
  /** Text displayed in the popover's header bar; also used as `aria-label` for the dialog. */
  label: string
  /** Content rendered in the popover body. */
  content: React.ReactNode
  /** The trigger element — the popover opens/closes when this element is clicked. */
  children: React.ReactElement
  /** Preferred side the popover appears relative to the trigger. Defaults to `bottom`. */
  placement?: PopoverPlacement
}

export const Popover = ({
  label,
  content,
  children,
  placement = 'bottom',
}: PopoverProps) => {
  const [open, setOpen] = useState(false)
  const popoverId = useId()
  const wrapperRef = useRef<HTMLSpanElement>(null)

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handleOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [open])

  // Close on Escape key
  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open])

  const trigger = React.cloneElement(children, {
    'aria-expanded': open,
    'aria-controls': popoverId,
    onClick: (e: React.MouseEvent) => {
      setOpen((prev) => !prev)
      children.props.onClick?.(e)
    },
  })

  return (
    <span ref={wrapperRef} className={styles.wrapper}>
      {trigger}
      <span
        id={popoverId}
        role="dialog"
        aria-label={label}
        className={[
          styles.popover,
          styles[placement],
          open ? styles.open : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <span className={styles.header}>
          <span className={styles.label}>{label}</span>
          <IconButton
            icon={faXmark}
            variant="brandPrimary"
            iconSize="xs"
            aria-label="Dismiss"
            onClick={() => setOpen(false)}
          />
        </span>
        <span className={styles.content}>{content}</span>
      </span>
    </span>
  )
}

Popover.displayName = 'Popover'
