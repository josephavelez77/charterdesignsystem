import React from 'react'
import styles from './Menu.module.css'

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  ({ children, className, ...props }, ref) => {
    const classNames = [styles.menu, className ?? ''].filter(Boolean).join(' ')

    return (
      <div ref={ref} role="menu" className={classNames} {...props}>
        {children}
      </div>
    )
  },
)

Menu.displayName = 'Menu'
