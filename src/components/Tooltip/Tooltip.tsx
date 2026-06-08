import React, { useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './Tooltip.module.css'

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left'

export interface TooltipProps {
  content: string
  placement?: TooltipPlacement
  children: React.ReactElement
}

const GAP = 6 // px — matches --container-gap-static-xxs

export const Tooltip = ({ content, placement = 'top', children }: TooltipProps) => {
  const [visible, setVisible] = useState(false)
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const tooltipId = useId()

  const show = () => {
    if ((placement === 'right' || placement === 'left' || placement === 'bottom') && wrapperRef.current) {
      const r = wrapperRef.current.getBoundingClientRect()
      if (placement === 'right') {
        setPos({ top: r.top + r.height / 2, left: r.right + GAP })
      } else if (placement === 'left') {
        setPos({ top: r.top + r.height / 2, left: r.left - GAP })
      } else if (placement === 'bottom') {
        setPos({ top: r.bottom + GAP, left: r.left + r.width / 2 })
      }
    }
    setVisible(true)
  }

  const hide = () => setVisible(false)

  const trigger = React.cloneElement(children, {
    'aria-describedby': tooltipId,
    onMouseEnter: (e: React.MouseEvent) => { show(); children.props.onMouseEnter?.(e) },
    onMouseLeave: (e: React.MouseEvent) => { hide(); children.props.onMouseLeave?.(e) },
    onFocus: (e: React.FocusEvent) => { show(); children.props.onFocus?.(e) },
    onBlur: (e: React.FocusEvent) => { hide(); children.props.onBlur?.(e) },
  })

  const usesPortal = placement === 'right' || placement === 'left' || placement === 'bottom'

  const portalStyle: React.CSSProperties | undefined = usesPortal
    ? {
        position: 'fixed',
        top: pos.top,
        left: pos.left,
        transform:
          placement === 'right' ? 'translateY(-50%)' :
          placement === 'left'  ? 'translate(-100%, -50%)' :
          'translateX(-50%)',
      }
    : undefined

  const tooltipEl = (
    <span
      id={tooltipId}
      role="tooltip"
      className={[styles.tooltip, styles[placement], visible ? styles.visible : ''].filter(Boolean).join(' ')}
      style={portalStyle}
    >
      <span className={styles.text}>{content}</span>
    </span>
  )

  return (
    <span ref={wrapperRef} className={styles.wrapper}>
      {trigger}
      {usesPortal ? createPortal(tooltipEl, document.body) : tooltipEl}
    </span>
  )
}

Tooltip.displayName = 'Tooltip'
