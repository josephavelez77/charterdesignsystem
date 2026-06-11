import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { faChevronDown, faChevronUp, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Icon } from '../Icon/Icon'
import { IconButton } from '../IconButton'
import { Menu } from '../Menu'
import { MenuItem } from '../MenuItem'
import { Tooltip } from '../Tooltip/Tooltip'
import styles from './NavDrawer.module.css'

export interface NavChildItem {
  /** Visible text for this child navigation link. */
  label: string
  /** When true, applies the active/selected style to the child item. */
  selected?: boolean
  /** Called when the user clicks this child item. */
  onClick?: () => void
}

export interface NavItemConfig {
  /** Visible text for this top-level navigation item. */
  label: string
  /** Optional icon shown to the left of the label — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  icon?: IconDefinition
  /** When true, applies the active/selected style to this item. */
  selected?: boolean
  /** Called when the user clicks a leaf-level item (no children). */
  onClick?: () => void
  /** Nested child items — render an expandable section (expanded drawer) or a flyout menu (collapsed drawer). */
  children?: NavChildItem[]
}

// ─── Flyout menu (portal, escapes overflow:hidden) ────────────────────────────

function FlyoutMenu({
  items,
  triggerEl,
  onClose,
}: {
  items: NavChildItem[]
  triggerEl: HTMLElement
  onClose: () => void
}) {
  const flyoutRef = useRef<HTMLDivElement>(null)
  const rect = triggerEl.getBoundingClientRect()

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        !flyoutRef.current?.contains(e.target as Node) &&
        !triggerEl.contains(e.target as Node)
      ) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [onClose, triggerEl])

  return createPortal(
    <div
      ref={flyoutRef}
      className={styles.flyout}
      style={{ top: rect.top, left: rect.right + 4 /* --container-gap-static-xxs */ }}
    >
      <Menu>
        {items.map((child, i) => (
          <MenuItem
            key={i}
            label={child.label}
            onClick={() => { child.onClick?.(); onClose() }}
          />
        ))}
      </Menu>
    </div>,
    document.body,
  )
}

// ─── Nav item ─────────────────────────────────────────────────────────────────

interface NavItemProps {
  item: NavItemConfig
  collapsed: boolean
  flyoutOpen: boolean
  onOpenFlyout: () => void
  onCloseFlyout: () => void
}

const NavItem = ({ item, collapsed, flyoutOpen, onOpenFlyout, onCloseFlyout }: NavItemProps) => {
  const [expanded, setExpanded] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const hasChildren = Boolean(item.children?.length)

  if (hasChildren) {
    const trigger = (
      <button
        ref={triggerRef}
        type="button"
        className={[
          styles.navItem,
          !collapsed && expanded ? styles.parentExpanded : '',
          collapsed && flyoutOpen ? styles.parentExpanded : '',
        ].filter(Boolean).join(' ')}
        onClick={collapsed ? onOpenFlyout : () => setExpanded((v) => !v)}
        aria-expanded={collapsed ? flyoutOpen : expanded}
      >
        {item.icon && (
          <Icon icon={item.icon} size="medium" className={styles.navIcon} />
        )}
        {!collapsed && (
          <>
            <span className={styles.navLabel}>{item.label}</span>
            <Icon
              icon={expanded ? faChevronUp : faChevronDown}
              size="small"
              className={styles.chevron}
            />
          </>
        )}
      </button>
    )

    return (
      <div className={styles.navGroup}>
        {collapsed ? <Tooltip content={item.label} placement="right">{trigger}</Tooltip> : trigger}

        {collapsed && flyoutOpen && triggerRef.current && (
          <FlyoutMenu
            items={item.children!}
            triggerEl={triggerRef.current}
            onClose={onCloseFlyout}
          />
        )}

        {!collapsed && expanded && (
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

  const btn = (
    <button
      type="button"
      className={[styles.navItem, item.selected ? styles.selected : ''].filter(Boolean).join(' ')}
      onClick={item.onClick}
    >
      {item.icon && (
        <Icon icon={item.icon} size="medium" className={styles.navIcon} />
      )}
      {!collapsed && <span className={styles.navLabel}>{item.label}</span>}
    </button>
  )

  return collapsed ? <Tooltip content={item.label} placement="right">{btn}</Tooltip> : btn
}

// ─── NavDrawer ────────────────────────────────────────────────────────────────

export interface NavDrawerProps {
  /** Application name displayed in the drawer header when expanded. */
  appName: string
  /** Navigation item definitions rendered in the drawer's primary nav list. */
  items: NavItemConfig[]
  /** Initial collapsed state for uncontrolled usage. When collapsed, labels are hidden and items show tooltips. */
  defaultCollapsed?: boolean
  /** Called with the new collapsed state whenever the user toggles the drawer open/closed. */
  onCollapsedChange?: (collapsed: boolean) => void
  /** Additional CSS class applied to the root `<nav>` element for layout overrides. */
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
  const [openFlyoutLabel, setOpenFlyoutLabel] = useState<string | null>(null)

  const toggle = () => {
    const next = !collapsed
    setCollapsed(next)
    setOpenFlyoutLabel(null)
    onCollapsedChange?.(next)
  }

  return (
    <nav
      className={[styles.drawer, collapsed ? styles.collapsed : '', className ?? ''].filter(Boolean).join(' ')}
      aria-label="Primary navigation"
    >
      <div className={styles.logoSection}>
        {!collapsed && <div className={styles.logoMark} aria-hidden />}
        {!collapsed && <span className={styles.logoName}>{appName}</span>}
        <IconButton
          icon={collapsed ? faChevronRight : faChevronLeft}
          variant="brandPrimary"
          aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
          onClick={toggle}
        />
      </div>

      <div className={styles.navList} role="list">
        {items.map((item, i) => (
          <NavItem
            key={i}
            item={item}
            collapsed={collapsed}
            flyoutOpen={openFlyoutLabel === item.label}
            onOpenFlyout={() => setOpenFlyoutLabel(item.label)}
            onCloseFlyout={() => setOpenFlyoutLabel(null)}
          />
        ))}
      </div>
    </nav>
  )
}

NavDrawer.displayName = 'NavDrawer'
