import React from 'react'
import styles from './ListGroup.module.css'

export interface ListGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const ListGroup = React.forwardRef<HTMLDivElement, ListGroupProps>(
  ({ children, className, ...props }, ref) => {
    const classNames = [styles.listGroup, className ?? ''].filter(Boolean).join(' ')

    return (
      <div ref={ref} className={classNames} {...props}>
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={
              index < React.Children.count(children) - 1 ? styles.itemWrapper : undefined
            }
          >
            {child}
          </div>
        ))}
      </div>
    )
  },
)

ListGroup.displayName = 'ListGroup'
