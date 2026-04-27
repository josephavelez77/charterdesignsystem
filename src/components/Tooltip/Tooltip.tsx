import React, { useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './Tooltip.module.css'

export interface TooltipProps {
  content: string
  placement?: 'top' | 'right'
  children: React.ReactElement
}

export const Tooltip = ({ content, placement = 'top', children }: TooltipProps) => {
  const [visible, setVisible] = useState(false)
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const tooltipId = useId()

  const show = (e: React.MouseEvent | React.FocusEvent) => {
    if (placement === 'right' && wrapperRef.current) {
      const r = wrapperRef.current.getBoundingClientRect()
      setPos({ top: r.top + r.height / 2, left: r.right + 6 })
    }
    setVisible(true)
  }

  const hide = () => setVisible(false)

  const trigger = React.cloneElement(children, {
    'aria-describedby': tooltipId,
    onMouseEnter: (e: React.MouseEvent) => { show(e); children.props.onMouseEnter?.(e) },
    onMouseLeave: (e: React.MouseEvent) => { hide(); children.props.onMouseLeave?.(e) },
    onFocus: (e: React.FocusEvent) => { show(e); children.props.onFocus?.(e) },
    onBlur: (e: React.FocusEvent) => { hide(); children.props.onBlur?.(e) },
  })

  const tooltipEl = (
    <span
      id={tooltipId}
      role="tooltip"
      className={[styles.tooltip, styles[placement], visible ? styles.visible : ''].filter(Boolean).join(' ')}
      style={placement === 'right' ? { position: 'fixed', top: pos.top, left: pos.left, transform: 'translateY(-50%)' } : undefined}
    >
      <span className={styles.text}>{content}</span>
    </span>
  )

  return (
    <span ref={wrapperRef} className={styles.wrapper}>
      {trigger}
      {placement === 'right'
        ? createPortal(tooltipEl, document.body)
        : tooltipEl
      }
    </span>
  )
}

Tooltip.displayName = 'Tooltip'
