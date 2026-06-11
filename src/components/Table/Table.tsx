import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Icon } from '../Icon/Icon'
import {
  faArrowDown,
  faArrowUp,
  faArrowsUpDown,
  faChevronRight,
  faEllipsis,
  faFilter,
  faInbox,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Avatar } from '../Avatar/Avatar'
import { Checkbox } from '../Checkbox/Checkbox'
import { IconButton } from '../IconButton'
import { Menu } from '../Menu'
import { MenuItem } from '../MenuItem'
import { Pagination } from '../Pagination'
import { PriorityChip } from '../PriorityChip'
import type { PriorityLevel } from '../PriorityChip'
import { Skeleton } from '../Skeleton'
import { StatusChip } from '../StatusChip'
import type { StatusLevel, StatusType } from '../StatusChip'
import styles from './Table.module.css'

// ─── Value types ────────────────────────────────────────────────────────────

export interface TableUserValue {
  /** Full display name shown in the user cell. */
  name: string
  /** Optional secondary text shown beneath the name. */
  subtitle?: string
  /** 1–2 character initials used in the avatar when no `avatarSrc` is provided. */
  initials?: string
  /** URL for the user's avatar photo; when provided the image is shown instead of initials. */
  avatarSrc?: string
}

export interface TableStatusValue {
  /** Text displayed inside the StatusChip. */
  label: string
  /** Semantic category controlling the chip color. */
  statusType: StatusType
  /** Visual intensity level within the type. */
  level: StatusLevel
}

export interface TableOverflowItem {
  /** Text shown in the overflow menu item. */
  label: string
  /** Optional icon displayed to the left of the label — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  icon?: IconDefinition
  /** Called when the user selects this overflow item. */
  onClick: () => void
  /** When true, the menu item is non-interactive. */
  disabled?: boolean
}

// ─── Column definitions ──────────────────────────────────────────────────────

type BaseColumn = {
  key: string
  header?: string
  sortable?: boolean
  width?: number | string
}

export type TableColumn<T> = BaseColumn &
  (
    | { type: 'text'; accessor: keyof T | ((row: T) => string) }
    | { type: 'user'; accessor: keyof T | ((row: T) => TableUserValue) }
    | { type: 'priority'; accessor: keyof T | ((row: T) => PriorityLevel) }
    | { type: 'status'; accessor: keyof T | ((row: T) => TableStatusValue) }
    | { type: 'checkbox' }
    | { type: 'overflow'; items: (row: T) => TableOverflowItem[] }
    | { type: 'nav'; onClick: (row: T) => void }
  )

// ─── Table props ─────────────────────────────────────────────────────────────

export interface TableProps<T extends Record<string, unknown>> {
  /** Column schema array — each entry defines the type, header, accessor, and rendering for that column. */
  columns: TableColumn<T>[]
  /** Current page of row data to render. */
  data: T[]
  /** Returns a stable unique string ID for a given row, used as the React key and selection key. */
  getRowId: (row: T) => string
  /** When true, renders skeleton placeholder rows instead of data. */
  loading?: boolean
  /** Number of skeleton rows shown while `loading` is true. Defaults to 8. */
  loadingRowCount?: number
  /** Heading shown in the empty state when `data` is empty. */
  emptyTitle?: string
  /** Subtext shown below `emptyTitle` in the empty state. */
  emptySubtitle?: string
  /** Controlled value for the search input; renders the search bar when provided. */
  searchValue?: string
  /** Called with the new search string whenever the user types in the search bar. */
  onSearchChange?: (value: string) => void
  /** When provided, renders a filter icon button in the action bar and calls this when clicked. */
  onFilterClick?: () => void
  /** Set of row IDs that are currently selected — used for checkbox columns. */
  selectedRows?: Set<string>
  /** Called with the updated selection set whenever the user checks or unchecks a row. */
  onSelectionChange?: (selected: Set<string>) => void
  /** Key of the column currently used for sorting — drives the sort indicator icon. */
  sortKey?: string
  /** Current sort direction — drives the sort indicator icon. */
  sortDirection?: 'asc' | 'desc'
  /** Called when a sortable column header is clicked; receives the column key and the new direction. */
  onSortChange?: (key: string, direction: 'asc' | 'desc') => void
  /** 1-indexed current page number. */
  page: number
  /** Number of rows per page. */
  pageSize: number
  /** Total number of items across all pages, used to compute page count and range text. */
  totalItems: number
  /** Called with the new page number when the user navigates. */
  onPageChange: (page: number) => void
  /** Called with the new page size when the user changes the rows-per-page selector. */
  onPageSizeChange: (pageSize: number) => void
  /** Available page-size options for the rows-per-page selector. */
  pageSizeOptions?: number[]
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function resolveAccessor<T, V>(row: T, accessor: keyof T | ((row: T) => V)): V {
  return typeof accessor === 'function'
    ? accessor(row)
    : (row[accessor] as unknown as V)
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function OverflowCell<T>({
  row,
  items,
  rowId,
  openId,
  onOpen,
  onClose,
}: {
  row: T
  items: (row: T) => TableOverflowItem[]
  rowId: string
  openId: string | null
  onOpen: (id: string) => void
  onClose: () => void
}) {
  const isOpen = openId === rowId
  const containerRef = useRef<HTMLDivElement>(null)
  const menuItems = items(row)

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) onClose()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [isOpen, onClose])

  return (
    <div ref={containerRef} className={styles.overflowContainer}>
      <IconButton
        icon={faEllipsis}
        variant="brandPrimary"
        aria-label="Row actions"
        onClick={() => (isOpen ? onClose() : onOpen(rowId))}
      />
      {isOpen && (
        <div className={styles.overflowMenu}>
          <Menu>
            {menuItems.map((item, i) => (
              <MenuItem
                key={i}
                label={item.label}
                leadingIcon={item.icon}
                disabled={item.disabled}
                onClick={() => { item.onClick(); onClose() }}
              />
            ))}
          </Menu>
        </div>
      )}
    </div>
  )
}

// ─── Main Table ───────────────────────────────────────────────────────────────

export function Table<T extends Record<string, unknown>>({
  columns,
  data,
  getRowId,
  loading = false,
  loadingRowCount = 8,
  emptyTitle = 'No Results Found',
  emptySubtitle = 'Adjust your filters to check for any results.',
  searchValue = '',
  onSearchChange,
  onFilterClick,
  selectedRows,
  onSelectionChange,
  sortKey,
  sortDirection,
  onSortChange,
  page,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions,
  className,
}: TableProps<T>) {
  const [openOverflowId, setOpenOverflowId] = useState<string | null>(null)
  const closeOverflow = useCallback(() => setOpenOverflowId(null), [])

  const hasCheckbox = columns.some((c) => c.type === 'checkbox')
  const rowIds = data.map(getRowId)
  const selectedCount = selectedRows?.size ?? 0
  const allSelected = rowIds.length > 0 && rowIds.every((id) => selectedRows?.has(id))
  const someSelected = selectedCount > 0 && !allSelected

  const handleHeaderCheckbox = () => {
    if (!onSelectionChange) return
    if (allSelected) {
      onSelectionChange(new Set())
    } else {
      onSelectionChange(new Set(rowIds))
    }
  }

  const handleRowCheckbox = (rowId: string, checked: boolean) => {
    if (!onSelectionChange) return
    const next = new Set(selectedRows ?? [])
    if (checked) next.add(rowId)
    else next.delete(rowId)
    onSelectionChange(next)
  }

  const handleSort = (col: TableColumn<T>) => {
    if (!col.sortable || !onSortChange) return
    const nextDir =
      sortKey === col.key && sortDirection === 'asc' ? 'desc' : 'asc'
    onSortChange(col.key, nextDir)
  }

  const renderHeaderCell = (col: TableColumn<T>) => {
    if (col.type === 'checkbox') {
      return (
        <th key={col.key} className={`${styles.th} ${styles.thCheckbox}`}>
          {hasCheckbox && (
            <Checkbox
              checked={allSelected}
              indeterminate={someSelected}
              onChange={handleHeaderCheckbox}
            />
          )}
        </th>
      )
    }

    const isSorted = sortKey === col.key
    const sortIcon = isSorted
      ? sortDirection === 'asc'
        ? faArrowUp
        : faArrowDown
      : faArrowsUpDown

    const thStyle: React.CSSProperties = col.width
      ? { width: typeof col.width === 'number' ? `${col.width}px` : col.width }
      : {}

    if (col.type === 'overflow' || col.type === 'nav') {
      return (
        <th
          key={col.key}
          className={`${styles.th} ${col.type === 'nav' ? styles.thNav : styles.thOverflow}`}
          style={thStyle}
        />
      )
    }

    return (
      <th
        key={col.key}
        className={[styles.th, col.sortable ? styles.thSortable : ''].filter(Boolean).join(' ')}
        style={thStyle}
        onClick={col.sortable ? () => handleSort(col) : undefined}
        aria-sort={isSorted ? (sortDirection === 'asc' ? 'ascending' : 'descending') : undefined}
      >
        <span className={styles.thContent}>
          <span className={styles.thLabel}>{col.header ?? ''}</span>
          {col.sortable && (
            <Icon
              icon={sortIcon}
              size="xs"
              className={[styles.sortIcon, isSorted ? styles.sortIconActive : ''].filter(Boolean).join(' ')}
            />
          )}
        </span>
      </th>
    )
  }

  const renderCell = (col: TableColumn<T>, row: T, rowId: string) => {
    switch (col.type) {
      case 'text': {
        const val = resolveAccessor(row, col.accessor)
        return <span className={styles.cellText}>{String(val ?? '')}</span>
      }
      case 'user': {
        const val = resolveAccessor(row, col.accessor) as TableUserValue
        return (
          <div className={styles.userCell}>
            <Avatar
              type={val.avatarSrc ? 'image' : 'initials'}
              size="small"
              initials={val.initials ?? val.name.slice(0, 2).toUpperCase()}
              src={val.avatarSrc}
              alt={val.name}
            />
            <span className={styles.userName}>{val.name}</span>
            {val.subtitle && <span className={styles.userSubtitle}>{val.subtitle}</span>}
          </div>
        )
      }
      case 'priority': {
        const level = resolveAccessor(row, col.accessor) as PriorityLevel
        return <PriorityChip priority={level} />
      }
      case 'status': {
        const val = resolveAccessor(row, col.accessor) as TableStatusValue
        return (
          <StatusChip label={val.label} statusType={val.statusType} level={val.level} />
        )
      }
      case 'checkbox':
        return (
          <Checkbox
            checked={selectedRows?.has(rowId) ?? false}
            onChange={(e) => handleRowCheckbox(rowId, e.target.checked)}
          />
        )
      case 'overflow':
        return (
          <OverflowCell
            row={row}
            items={col.items}
            rowId={rowId}
            openId={openOverflowId}
            onOpen={setOpenOverflowId}
            onClose={closeOverflow}
          />
        )
      case 'nav':
        return (
          <IconButton
            icon={faChevronRight}
            variant="brandPrimary"
            aria-label="Navigate"
            onClick={() => col.onClick(row)}
          />
        )
    }
  }

  const tdClass = (col: TableColumn<T>) => {
    const base = styles.td
    if (col.type === 'checkbox') return `${base} ${styles.tdCheckbox}`
    if (col.type === 'overflow') return `${base} ${styles.tdOverflow}`
    if (col.type === 'nav') return `${base} ${styles.tdNav}`
    return base
  }

  return (
    <div className={[styles.wrapper, className ?? ''].filter(Boolean).join(' ')}>
      {/* Action bar */}
      {(onSearchChange || onFilterClick) && (
        <div className={styles.actionBar}>
          {onSearchChange && (
            <div className={styles.searchWrapper}>
              <Icon icon={faMagnifyingGlass} size="small" className={styles.searchIcon} />
              <input
                type="search"
                className={styles.searchInput}
                placeholder="Search"
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
                aria-label="Search table"
              />
            </div>
          )}
          {onFilterClick && (
            <div className={styles.filterWrapper}>
              <IconButton icon={faFilter} variant="brandPrimary" aria-label="Filter" onClick={onFilterClick} />
            </div>
          )}
        </div>
      )}

      {/* Table */}
      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>
              {columns.map(renderHeaderCell)}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: loadingRowCount }).map((_, ri) => (
                <tr key={ri} className={styles.row}>
                  {columns.map((col) => (
                    <td key={col.key} className={tdClass(col)}>
                      {col.type === 'checkbox' || col.type === 'overflow' || col.type === 'nav' ? null : (
                        <Skeleton height={16} width={col.type === 'user' ? 120 : '80%'} />
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className={styles.emptyCell}>
                  <div className={styles.emptyState}>
                    <Icon icon={faInbox} size="xl" className={styles.emptyIcon} />
                    <span className={styles.emptyTitle}>{emptyTitle}</span>
                    <span className={styles.emptySubtitle}>{emptySubtitle}</span>
                  </div>
                </td>
              </tr>
            ) : (
              data.map((row) => {
                const rowId = getRowId(row)
                const isSelected = selectedRows?.has(rowId) ?? false
                return (
                  <tr
                    key={rowId}
                    className={[styles.row, isSelected ? styles.rowSelected : ''].filter(Boolean).join(' ')}
                  >
                    {columns.map((col) => (
                      <td key={col.key} className={tdClass(col)}>
                        {renderCell(col, row, rowId)}
                      </td>
                    ))}
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className={styles.paginationRow}>
        <Pagination
          totalItems={totalItems}
          page={page}
          pageSize={pageSize}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
          pageSizeOptions={pageSizeOptions}
        />
      </div>
    </div>
  )
}

Table.displayName = 'Table'
