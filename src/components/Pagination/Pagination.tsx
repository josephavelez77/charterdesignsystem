import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from './Pagination.module.css'

const DEFAULT_PAGE_SIZES = [10, 25, 50, 100, 250, 500]

// ── Complex Pagination ────────────────────────────────────────────────────────

export interface PaginationProps {
  totalItems: number
  page: number
  pageSize: number
  onPageChange: (page: number) => void
  onPageSizeChange: (pageSize: number) => void
  pageSizeOptions?: number[]
  className?: string
}

export const Pagination = ({
  totalItems,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = DEFAULT_PAGE_SIZES,
  className,
}: PaginationProps) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize))
  const start = totalItems === 0 ? 0 : (page - 1) * pageSize + 1
  const end = Math.min(page * pageSize, totalItems)

  const [inputValue, setInputValue] = useState(String(page))

  // Keep input in sync with controlled page prop
  React.useEffect(() => {
    setInputValue(String(page))
  }, [page])

  const commitPage = (raw: string) => {
    const val = parseInt(raw, 10)
    if (!isNaN(val) && val >= 1 && val <= totalPages) {
      onPageChange(val)
    } else {
      setInputValue(String(page))
    }
  }

  return (
    <div className={[styles.pagination, className ?? ''].filter(Boolean).join(' ')}>
      {/* Items per page */}
      <div className={styles.pageSizeSection}>
        <span className={styles.label}>Items per page:</span>
        <div className={styles.selectWrapper}>
          <select
            className={styles.pageSizeSelect}
            value={pageSize}
            onChange={(e) => {
              onPageSizeChange(Number(e.target.value))
              onPageChange(1)
            }}
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
      </div>

      <span className={styles.divider} aria-hidden />

      {/* Item range */}
      <span className={styles.rangeText}>
        {start}–{end} of {totalItems} items
      </span>

      <span className={styles.divider} aria-hidden />

      {/* Navigation */}
      <div className={styles.navSection}>
        <button
          type="button"
          className={styles.navBtn}
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          aria-label="Previous page"
        >
          <FontAwesomeIcon icon={faChevronLeft} className={styles.navIcon} aria-hidden />
          Back
        </button>

        <div className={styles.pageInputSection}>
          <input
            type="number"
            className={styles.pageInput}
            value={inputValue}
            min={1}
            max={totalPages}
            aria-label="Current page"
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={(e) => commitPage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') commitPage((e.target as HTMLInputElement).value)
            }}
          />
          <span className={styles.ofText}>of {totalPages}</span>
        </div>

        <button
          type="button"
          className={styles.navBtn}
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          aria-label="Next page"
        >
          Next
          <FontAwesomeIcon icon={faChevronRight} className={styles.navIcon} aria-hidden />
        </button>
      </div>
    </div>
  )
}

Pagination.displayName = 'Pagination'

// ── Simple Pagination ─────────────────────────────────────────────────────────

export interface SimplePaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export const SimplePagination = ({
  page,
  totalPages,
  onPageChange,
  className,
}: SimplePaginationProps) => {
  return (
    <div className={[styles.simplePagination, className ?? ''].filter(Boolean).join(' ')}>
      <button
        type="button"
        className={styles.navBtn}
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        aria-label="Previous page"
      >
        <FontAwesomeIcon icon={faChevronLeft} className={styles.navIcon} aria-hidden />
        Back
      </button>

      <span className={styles.simplePageCount} aria-live="polite">
        {page} of {totalPages}
      </span>

      <button
        type="button"
        className={styles.navBtn}
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        aria-label="Next page"
      >
        Next
        <FontAwesomeIcon icon={faChevronRight} className={styles.navIcon} aria-hidden />
      </button>
    </div>
  )
}

SimplePagination.displayName = 'SimplePagination'
