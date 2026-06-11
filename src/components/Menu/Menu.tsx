import React from 'react'
import styles from './Menu.module.css'

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content rendered inside the component — should be `MenuItem` elements. */
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
