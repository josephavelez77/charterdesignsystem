import React from 'react'
import styles from './TabGroup.module.css'

export interface TabItem {
  label: string
  disabled?: boolean
}

export interface TabGroupProps {
  tabs: TabItem[]
  activeIndex?: number
  onChange?: (index: number) => void
  className?: string
}

export const TabGroup = ({
  tabs,
  activeIndex = 0,
  onChange,
  className,
}: TabGroupProps) => {
  return (
    <div
      role="tablist"
      className={[styles.tabGroup, className ?? ''].filter(Boolean).join(' ')}
    >
      {tabs.map((tab, i) => {
        const isActive = i === activeIndex
        return (
          <button
            key={i}
            role="tab"
            type="button"
            aria-selected={isActive}
            disabled={tab.disabled}
            className={[
              styles.tab,
              isActive ? styles.active : '',
              tab.disabled ? styles.disabled : '',
            ].filter(Boolean).join(' ')}
            onClick={() => !tab.disabled && onChange?.(i)}
            tabIndex={isActive ? 0 : -1}
          >
            <span className={styles.label}>{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}

TabGroup.displayName = 'TabGroup'
