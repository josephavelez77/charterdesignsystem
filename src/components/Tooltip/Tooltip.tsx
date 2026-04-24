import React, { useId, useState } from 'react'
import styles from './Tooltip.module.css'

export interface TooltipProps {
  content: string
  children: React.ReactElement
}

export const Tooltip = ({ content, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false)
  const tooltipId = useId()

  const trigger = React.cloneElement(children, {
    'aria-describedby': tooltipId,
    onMouseEnter: (e: React.MouseEvent) => {
      setVisible(true)
      children.props.onMouseEnter?.(e)
    },
    onMouseLeave: (e: React.MouseEvent) => {
      setVisible(false)
      children.props.onMouseLeave?.(e)
    },
    onFocus: (e: React.FocusEvent) => {
      setVisible(true)
      children.props.onFocus?.(e)
    },
    onBlur: (e: React.FocusEvent) => {
      setVisible(false)
      children.props.onBlur?.(e)
    },
  })

  return (
    <span className={styles.wrapper}>
      {trigger}
      <span
        id={tooltipId}
        role="tooltip"
        className={`${styles.tooltip} ${visible ? styles.visible : ''}`}
      >
        <span className={styles.text}>{content}</span>
      </span>
    </span>
  )
}

Tooltip.displayName = 'Tooltip'
