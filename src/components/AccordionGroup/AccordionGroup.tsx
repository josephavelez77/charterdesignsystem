import React, { useState } from 'react'
import styles from './AccordionGroup.module.css'

export interface AccordionGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  /** When true, only one item can be expanded at a time */
  exclusive?: boolean
}

export const AccordionGroup = React.forwardRef<HTMLDivElement, AccordionGroupProps>(
  ({ children, className, exclusive = false, ...props }, ref) => {
    const classNames = [styles.accordionGroup, className].filter(Boolean).join(' ')
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleToggle = (index: number, expanded: boolean) => {
      setOpenIndex(expanded ? index : null)
    }

    const content = exclusive
      ? React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child
          return React.cloneElement(child as React.ReactElement<{ expanded: boolean; onToggle: (expanded: boolean) => void }>, {
            expanded: openIndex === index,
            onToggle: (expanded: boolean) => handleToggle(index, expanded),
          })
        })
      : children

    return (
      <div ref={ref} className={classNames} {...props}>
        {content}
      </div>
    )
  },
)

AccordionGroup.displayName = 'AccordionGroup'
