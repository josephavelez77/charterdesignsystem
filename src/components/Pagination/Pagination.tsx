import React from 'react'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import { SelectField } from '../SelectField/SelectField'
import { NumberField } from '../NumberField/NumberField'
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

  const pageSizeOptions_ = pageSizeOptions.map((size) => ({
    value: String(size),
    label: String(size),
  }))

  return (
    <div className={[styles.pagination, className ?? ''].filter(Boolean).join(' ')}>
      {/* Items per page */}
      <div className={styles.pageSizeSection}>
        <span className={styles.label}>Items per page:</span>
        <SelectField
          options={pageSizeOptions_}
          value={String(pageSize)}
          className={styles.pageSizeSelect}
          onChange={(val) => {
            onPageSizeChange(Number(val))
            onPageChange(1)
          }}
        />
      </div>

      <span className={styles.divider} aria-hidden />

      {/* Item range */}
      <span className={styles.rangeText}>
        {start}–{end} of {totalItems} items
      </span>

      <span className={styles.divider} aria-hidden />

      {/* Navigation */}
      <div className={styles.navSection}>
        <Button
          variant="brandPrimary"
          emphasis="tertiary"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          aria-label="Previous page"
          leadingIcon={<Icon icon={faChevronLeft} size="xs" />}
        >
          Back
        </Button>

        <div className={styles.pageInputSection}>
          <NumberField
            value={page}
            min={1}
            max={totalPages}
            className={styles.pageInput}
            onChange={(val) => {
              if (val !== undefined && val >= 1 && val <= totalPages) {
                onPageChange(val)
              }
            }}
          />
          <span className={styles.ofText}>of {totalPages}</span>
        </div>

        <Button
          variant="brandPrimary"
          emphasis="tertiary"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          aria-label="Next page"
          trailingIcon={<Icon icon={faChevronRight} size="xs" />}
        >
          Next
        </Button>
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
      <Button
        variant="brandPrimary"
        emphasis="tertiary"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        aria-label="Previous page"
        leadingIcon={<Icon icon={faChevronLeft} size="xs" />}
      >
        Back
      </Button>

      <span className={styles.simplePageCount} aria-live="polite">
        {page} of {totalPages}
      </span>

      <Button
        variant="brandPrimary"
        emphasis="tertiary"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        aria-label="Next page"
        trailingIcon={<Icon icon={faChevronRight} size="xs" />}
      >
        Next
      </Button>
    </div>
  )
}

SimplePagination.displayName = 'SimplePagination'
