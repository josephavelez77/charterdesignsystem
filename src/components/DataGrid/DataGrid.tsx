import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Icon } from '../Icon/Icon'
import {
  faArrowDown,
  faArrowUp,
  faArrowsUpDown,
  faCalendar,
  faEllipsis,
  faFilter,
  faInbox,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Avatar } from '../Avatar/Avatar'
import { Checkbox } from '../Checkbox/Checkbox'
import { DatePicker } from '../DatePicker/DatePicker'
import { IconButton } from '../IconButton'
import { Menu } from '../Menu'
import { MenuItem } from '../MenuItem'
import { Pagination } from '../Pagination'
import { Skeleton } from '../Skeleton'
import { Switch } from '../Switch/Switch'
import styles from './DataGrid.module.css'

// ─── Value types ──────────────────────────────────────────────────────────────

export interface DataGridUserValue {
  /** Full display name shown in the user cell. */
  name: string
  /** Optional secondary text shown beneath the name. */
  subtitle?: string
  /** 1–2 character initials used in the avatar when no `avatarSrc` is provided. */
  initials?: string
  /** URL for the user's avatar photo; when provided the image is shown instead of initials. */
  avatarSrc?: string
}

export interface DataGridOverflowItem {
  /** Text shown in the overflow menu item. */
  label: string
  /** Optional icon displayed to the left of the label — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  icon?: IconDefinition
  /** Called when the user selects this overflow item. */
  onClick: () => void
  /** When true, the menu item is non-interactive. */
  disabled?: boolean
}

export interface DataGridSelectOption {
  /** Internal value passed to `setter` when this option is selected. */
  value: string
  /** Human-readable text displayed in the dropdown. */
  label: string
}

// ─── Column definitions ───────────────────────────────────────────────────────

type BaseGridColumn = {
  key: string
  header?: string
  sortable?: boolean
  width?: number | string
}

export type DataGridColumn<T> = BaseGridColumn &
  (
    | { type: 'text'; accessor: keyof T | ((row: T) => string); setter: (row: T, v: string) => T }
    | {
        type: 'number'
        accessor: keyof T | ((row: T) => number | undefined)
        setter: (row: T, v: number | undefined) => T
        min?: number
        max?: number
        step?: number
      }
    | {
        type: 'date'
        accessor: keyof T | ((row: T) => Date | null)
        setter: (row: T, v: Date | null) => T
        formatDate?: (d: Date) => string
      }
    | {
        type: 'select'
        accessor: keyof T | ((row: T) => string)
        setter: (row: T, v: string) => T
        options: DataGridSelectOption[]
      }
    | { type: 'checkbox'; accessor: keyof T | ((row: T) => boolean); setter: (row: T, v: boolean) => T }
    | { type: 'switch'; accessor: keyof T | ((row: T) => boolean); setter: (row: T, v: boolean) => T }
    | { type: 'overflow'; items: (row: T) => DataGridOverflowItem[] }
    | { type: 'text-readonly'; accessor: keyof T | ((row: T) => string) }
    | { type: 'user'; accessor: keyof T | ((row: T) => DataGridUserValue) }
    | { type: 'row-select' }
  )

// ─── Props ────────────────────────────────────────────────────────────────────

export interface DataGridProps<T extends Record<string, unknown>> {
  /** Column schema array — each entry defines the type, header, accessor, and optional setter for that column. */
  columns: DataGridColumn<T>[]
  /** Current page of row data to render. */
  data: T[]
  /** Returns a stable unique string ID for a given row, used as the React key and selection key. */
  getRowId: (row: T) => string
  /** Called when an editable cell changes; receives the row ID and the updated row object returned by the column's `setter`. */
  onRowChange?: (rowId: string, updated: T) => void
  /** When true, renders skeleton placeholder rows instead of data. */
  loading?: boolean
  /** Number of skeleton rows to render while `loading` is true. Defaults to 8. */
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
  /** Set of row IDs that are currently selected — used for row-select columns. */
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
  /** Available page-size options for the rows-per-page selector. Defaults to `[10, 25, 50, 100, 250, 500]`. */
  pageSizeOptions?: number[]
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function resolveAccessor<T, V>(row: T, accessor: keyof T | ((row: T) => V)): V {
  return typeof accessor === 'function'
    ? accessor(row)
    : (row[accessor] as unknown as V)
}

function defaultFormatDate(d: Date): string {
  return d.toLocaleDateString()
}

// ─── Overflow cell ────────────────────────────────────────────────────────────

function OverflowCell<T>({
  row,
  items,
  rowId,
  openId,
  onOpen,
  onClose,
}: {
  row: T
  items: (row: T) => DataGridOverflowItem[]
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
                onClick={() => {
                  item.onClick()
                  onClose()
                }}
              />
            ))}
          </Menu>
        </div>
      )}
    </div>
  )
}

// ─── Date cell ────────────────────────────────────────────────────────────────

function DateCell<T>({
  row,
  col,
  cellId,
  openCellId,
  onOpen,
  onClose,
  onRowChange,
  rowId,
}: {
  row: T
  col: Extract<DataGridColumn<T>, { type: 'date' }>
  cellId: string
  openCellId: string | null
  onOpen: (id: string) => void
  onClose: () => void
  onRowChange?: (rowId: string, updated: T) => void
  rowId: string
}) {
  const isOpen = openCellId === cellId
  const containerRef = useRef<HTMLDivElement>(null)
  const value = resolveAccessor(row, col.accessor) as Date | null
  const fmt = col.formatDate ?? defaultFormatDate

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) onClose()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [isOpen, onClose])

  return (
    <div ref={containerRef} className={styles.dateCellWrapper}>
      <button
        type="button"
        className={styles.dateCellTrigger}
        onClick={() => (isOpen ? onClose() : onOpen(cellId))}
      >
        <span>{value ? fmt(value) : <span className={styles.cellPlaceholder}>Select date</span>}</span>
        <Icon icon={faCalendar} size="small" className={styles.dateIcon} />
      </button>
      {isOpen && (
        <div className={styles.datepickerPopover}>
          <DatePicker
            value={value}
            onConfirm={(date) => {
              onRowChange?.(rowId, col.setter(row, date))
              onClose()
            }}
            onCancel={onClose}
          />
        </div>
      )}
    </div>
  )
}

// ─── Main DataGrid ────────────────────────────────────────────────────────────

export function DataGrid<T extends Record<string, unknown>>({
  columns,
  data,
  getRowId,
  onRowChange,
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
}: DataGridProps<T>) {
  const [openOverflowId, setOpenOverflowId] = useState<string | null>(null)
  const [openDateCellId, setOpenDateCellId] = useState<string | null>(null)
  const closeOverflow = useCallback(() => setOpenOverflowId(null), [])
  const closeDateCell = useCallback(() => setOpenDateCellId(null), [])

  const hasRowSelect = columns.some((c) => c.type === 'row-select')
  const rowIds = data.map(getRowId)
  const selectedCount = selectedRows?.size ?? 0
  const allSelected = rowIds.length > 0 && rowIds.every((id) => selectedRows?.has(id))
  const someSelected = selectedCount > 0 && !allSelected

  const handleHeaderCheckbox = () => {
    if (!onSelectionChange) return
    onSelectionChange(allSelected ? new Set() : new Set(rowIds))
  }

  const handleRowCheckbox = (rowId: string, checked: boolean) => {
    if (!onSelectionChange) return
    const next = new Set(selectedRows ?? [])
    if (checked) next.add(rowId)
    else next.delete(rowId)
    onSelectionChange(next)
  }

  const handleSort = (col: DataGridColumn<T>) => {
    if (!col.sortable || !onSortChange) return
    const nextDir = sortKey === col.key && sortDirection === 'asc' ? 'desc' : 'asc'
    onSortChange(col.key, nextDir)
  }

  const renderHeaderCell = (col: DataGridColumn<T>) => {
    const thStyle: React.CSSProperties = col.width
      ? { width: typeof col.width === 'number' ? `${col.width}px` : col.width }
      : {}

    if (col.type === 'row-select') {
      return (
        <th key="row-select" className={`${styles.th} ${styles.thCheckbox}`} style={thStyle}>
          {hasRowSelect && (
            <Checkbox
              checked={allSelected}
              indeterminate={someSelected}
              onChange={handleHeaderCheckbox}
            />
          )}
        </th>
      )
    }

    if (col.type === 'overflow') {
      return <th key={col.key} className={`${styles.th} ${styles.thOverflow}`} style={thStyle} />
    }

    const isSorted = sortKey === col.key
    const sortIcon = isSorted ? (sortDirection === 'asc' ? faArrowUp : faArrowDown) : faArrowsUpDown

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

  const renderCell = (col: DataGridColumn<T>, row: T, rowId: string) => {
    switch (col.type) {
      case 'text': {
        const val = resolveAccessor(row, col.accessor) as string
        return (
          <input
            type="text"
            className={styles.cellInput}
            value={val ?? ''}
            placeholder="—"
            onChange={(e) => onRowChange?.(rowId, col.setter(row, e.target.value))}
          />
        )
      }
      case 'number': {
        const val = resolveAccessor(row, col.accessor) as number | undefined
        return (
          <input
            type="number"
            className={styles.cellInput}
            value={val ?? ''}
            placeholder="—"
            min={col.min}
            max={col.max}
            step={col.step ?? 1}
            onChange={(e) => {
              const parsed = e.target.value === '' ? undefined : Number(e.target.value)
              onRowChange?.(rowId, col.setter(row, parsed))
            }}
          />
        )
      }
      case 'date': {
        const cellId = `${rowId}-${col.key}`
        return (
          <DateCell
            row={row}
            col={col}
            cellId={cellId}
            openCellId={openDateCellId}
            onOpen={setOpenDateCellId}
            onClose={closeDateCell}
            onRowChange={onRowChange}
            rowId={rowId}
          />
        )
      }
      case 'select': {
        const val = resolveAccessor(row, col.accessor) as string
        return (
          <select
            className={styles.cellSelect}
            value={val ?? ''}
            onChange={(e) => onRowChange?.(rowId, col.setter(row, e.target.value))}
          >
            <option value="" disabled>—</option>
            {col.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )
      }
      case 'checkbox': {
        const val = resolveAccessor(row, col.accessor) as boolean
        return (
          <Checkbox
            checked={val ?? false}
            onChange={(e) => onRowChange?.(rowId, col.setter(row, e.target.checked))}
          />
        )
      }
      case 'switch': {
        const val = resolveAccessor(row, col.accessor) as boolean
        return (
          <Switch
            checked={val ?? false}
            onChange={(e) => onRowChange?.(rowId, col.setter(row, e.target.checked))}
          />
        )
      }
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
      case 'text-readonly': {
        const val = resolveAccessor(row, col.accessor) as string
        return <span className={styles.cellText}>{String(val ?? '')}</span>
      }
      case 'user': {
        const val = resolveAccessor(row, col.accessor) as DataGridUserValue
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
          </div>
        )
      }
      case 'row-select':
        return (
          <Checkbox
            checked={selectedRows?.has(rowId) ?? false}
            onChange={(e) => handleRowCheckbox(rowId, e.target.checked)}
          />
        )
    }
  }

  const tdClass = (col: DataGridColumn<T>) => {
    if (col.type === 'row-select') return `${styles.td} ${styles.tdCheckbox}`
    if (col.type === 'overflow') return `${styles.td} ${styles.tdOverflow}`
    if (col.type === 'checkbox' || col.type === 'switch') return `${styles.td} ${styles.tdCenter}`
    if (col.type === 'text' || col.type === 'number' || col.type === 'select' || col.type === 'date')
      return `${styles.td} ${styles.tdEditable}`
    return styles.td
  }

  const skeletonForCol = (col: DataGridColumn<T>) => {
    if (col.type === 'row-select' || col.type === 'overflow') return null
    if (col.type === 'checkbox' || col.type === 'switch') return <Skeleton height={20} width={36} />
    if (col.type === 'user') return <Skeleton height={16} width={120} />
    return <Skeleton height={16} width="70%" />
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
                aria-label="Search grid"
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

      {/* Grid */}
      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>{columns.map(renderHeaderCell)}</tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: loadingRowCount }).map((_, ri) => (
                <tr key={ri} className={styles.row}>
                  {columns.map((col) => (
                    <td key={col.key} className={tdClass(col)}>
                      {skeletonForCol(col)}
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

DataGrid.displayName = 'DataGrid'
