import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Icon } from '../Icon/Icon'
import { Logo } from '../Logo/Logo'
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
      style={{ top: rect.top, left: rect.right + 4 }}
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
  /** Controlled collapsed state. When provided, the drawer is fully controlled — pair with `onCollapsedChange`. */
  collapsed?: boolean
  /** Initial collapsed state for uncontrolled usage. Ignored when `collapsed` is provided. */
  defaultCollapsed?: boolean
  /** Called with the new collapsed state whenever the collapse state changes. */
  onCollapsedChange?: (collapsed: boolean) => void
  /** Additional CSS class applied to the root `<nav>` element for layout overrides. */
  className?: string
}

export const NavDrawer = ({
  appName,
  items,
  collapsed: collapsedProp,
  defaultCollapsed = false,
  onCollapsedChange,
  className,
}: NavDrawerProps) => {
  const isControlled = collapsedProp !== undefined
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed)
  const isCollapsed = isControlled ? collapsedProp! : internalCollapsed

  const [openFlyoutLabel, setOpenFlyoutLabel] = useState<string | null>(null)

  const handleCollapsedChange = (next: boolean) => {
    if (!isControlled) setInternalCollapsed(next)
    setOpenFlyoutLabel(null)
    onCollapsedChange?.(next)
  }

  // Sync internal state if controlled prop changes
  useEffect(() => {
    if (isControlled) setOpenFlyoutLabel(null)
  }, [isControlled, collapsedProp])

  return (
    <nav
      className={[styles.drawer, isCollapsed ? styles.collapsed : '', className ?? ''].filter(Boolean).join(' ')}
      aria-label="Primary navigation"
    >
      <div className={styles.logoSection}>
        <Logo
          variant={isCollapsed ? 'icon' : 'horizontal'}
          className={isCollapsed ? undefined : styles.drawerLogo}
          aria-label={appName}
        />
      </div>

      <div className={styles.navList} role="list">
        {items.map((item, i) => (
          <NavItem
            key={i}
            item={item}
            collapsed={isCollapsed}
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
