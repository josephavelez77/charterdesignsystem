import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import styles from './NavDrawer.module.css'

export interface NavChildItem {
  label: string
  selected?: boolean
  onClick?: () => void
}

export interface NavItemConfig {
  label: string
  icon?: IconDefinition
  selected?: boolean
  onClick?: () => void
  children?: NavChildItem[]
}

interface NavItemProps {
  item: NavItemConfig
  collapsed: boolean
}

const NavItem = ({ item, collapsed }: NavItemProps) => {
  const [expanded, setExpanded] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  if (hasChildren) {
    return (
      <div className={styles.navGroup}>
        <button
          type="button"
          className={[styles.navItem, expanded ? styles.parentExpanded : ''].filter(Boolean).join(' ')}
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {item.icon && (
            <FontAwesomeIcon icon={item.icon} className={styles.navIcon} aria-hidden />
          )}
          {!collapsed && (
            <>
              <span className={styles.navLabel}>{item.label}</span>
              <FontAwesomeIcon
                icon={expanded ? faChevronUp : faChevronDown}
                className={styles.chevron}
                aria-hidden
              />
            </>
          )}
        </button>
        {expanded && !collapsed && (
          <div className={styles.children}>
            {item.children!.map((child, i) => (
              <button
                key={i}
                type="button"
                className={[styles.childItem, child.selected ? styles.childSelected : ''].filter(Boolean).join(' ')}
                onClick={child.onClick}
              >
                <span className={styles.childLabel}>{child.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <button
      type="button"
      className={[styles.navItem, item.selected ? styles.selected : ''].filter(Boolean).join(' ')}
      onClick={item.onClick}
    >
      {item.icon && (
        <FontAwesomeIcon icon={item.icon} className={styles.navIcon} aria-hidden />
      )}
      {!collapsed && <span className={styles.navLabel}>{item.label}</span>}
    </button>
  )
}

export interface NavDrawerProps {
  appName: string
  items: NavItemConfig[]
  defaultCollapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  className?: string
}

export const NavDrawer = ({
  appName,
  items,
  defaultCollapsed = false,
  onCollapsedChange,
  className,
}: NavDrawerProps) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed)

  const toggle = () => {
    const next = !collapsed
    setCollapsed(next)
    onCollapsedChange?.(next)
  }

  return (
    <nav
      className={[styles.drawer, collapsed ? styles.collapsed : '', className ?? ''].filter(Boolean).join(' ')}
      aria-label="Primary navigation"
    >
      <div className={styles.logoSection}>
        <div className={styles.logoMark} aria-hidden />
        {!collapsed && <span className={styles.logoName}>{appName}</span>}
        <button
          type="button"
          className={styles.toggleBtn}
          onClick={toggle}
          aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
        >
          <FontAwesomeIcon
            icon={collapsed ? faBars : faXmark}
            style={{ width: 14, height: 14 }}
            aria-hidden
          />
        </button>
      </div>

      <div className={styles.navList} role="list">
        {items.map((item, i) => (
          <NavItem key={i} item={item} collapsed={collapsed} />
        ))}
      </div>
    </nav>
  )
}

NavDrawer.displayName = 'NavDrawer'
