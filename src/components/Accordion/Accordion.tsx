import React, { useId, useState } from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import styles from './Accordion.module.css'

export interface AccordionItemProps {
  title: string
  subtitle?: string
  /** Optional leading icon in the header */
  icon?: IconDefinition
  children?: React.ReactNode
  /** Initial expanded state for uncontrolled usage */
  defaultExpanded?: boolean
  /** Controlled expanded state — pair with onToggle */
  expanded?: boolean
  onToggle?: (expanded: boolean) => void
  disabled?: boolean
  className?: string
}

export const AccordionItem = ({
  title,
  subtitle,
  icon,
  children,
  defaultExpanded = false,
  expanded: controlledExpanded,
  onToggle,
  disabled = false,
  className,
}: AccordionItemProps) => {
  const id = useId()
  const panelId = `${id}-panel`
  const headerId = `${id}-header`

  const isControlled = controlledExpanded !== undefined
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded)
  const isExpanded = isControlled ? controlledExpanded : internalExpanded

  const handleToggle = () => {
    const next = !isExpanded
    if (!isControlled) setInternalExpanded(next)
    onToggle?.(next)
  }

  const containerClasses = [styles.accordion, className].filter(Boolean).join(' ')
  const chevronClasses = [styles.chevron, isExpanded ? styles.chevronExpanded : '']
    .filter(Boolean)
    .join(' ')
  const bodyClasses = [styles.body, isExpanded ? styles.bodyExpanded : '']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={containerClasses}>
      <button
        id={headerId}
        type="button"
        className={styles.header}
        onClick={handleToggle}
        disabled={disabled}
        aria-expanded={isExpanded}
        aria-controls={panelId}
      >
        <div className={styles.leftContent}>
          {icon && (
            <span className={styles.leadingIcon}>
              <Icon icon={icon} size="medium" />
            </span>
          )}
          <div className={styles.textContent}>
            <span className={styles.title}>{title}</span>
            {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
          </div>
        </div>
        <span className={chevronClasses}>
          <Icon icon={faChevronDown} size="small" />
        </span>
      </button>

      <div id={panelId} role="region" aria-labelledby={headerId} className={bodyClasses}>
        <div className={styles.bodyInner}>
          <div className={styles.bodyContent}>{children}</div>
        </div>
      </div>
    </div>
  )
}

AccordionItem.displayName = 'AccordionItem'
