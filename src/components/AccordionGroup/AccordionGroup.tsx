import React, { useState } from 'react'
import styles from './AccordionGroup.module.css'
import { AccordionGroupContext } from './AccordionGroupContext'

export interface AccordionGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content rendered inside the component — should be `AccordionItem` elements. */
  children: React.ReactNode
  /** When true, only one item can be expanded at a time; opening one closes any currently open item. */
  exclusive?: boolean
}

export const AccordionGroup = React.forwardRef<HTMLDivElement, AccordionGroupProps>(
  ({ children, className, exclusive = false, ...props }, ref) => {
    const classNames = [styles.accordionGroup, className].filter(Boolean).join(' ')
    const [openId, setOpenId] = useState<string | null>(null)

    const handleItemToggle = (id: string, expanded: boolean) => {
      setOpenId(expanded ? id : null)
    }

    return (
      <AccordionGroupContext.Provider value={{ exclusive, openId, onItemToggle: handleItemToggle }}>
        <div ref={ref} className={classNames} {...props}>
          {children}
        </div>
      </AccordionGroupContext.Provider>
    )
  },
)

AccordionGroup.displayName = 'AccordionGroup'
