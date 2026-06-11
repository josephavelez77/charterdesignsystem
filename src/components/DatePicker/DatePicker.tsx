import React, { useState } from 'react'
import { faChevronLeft, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../Button/Button'
import { IconButton } from '../IconButton/IconButton'
import { Icon } from '../Icon/Icon'
import styles from './DatePicker.module.css'

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

const THIS_YEAR = new Date().getFullYear()
const YEARS = Array.from({ length: 31 }, (_, i) => THIS_YEAR - 20 + i) // −20 → +10

interface CalendarCell {
  date: Date
  isCurrentMonth: boolean
}

function buildCalendarGrid(year: number, month: number): CalendarCell[] {
  const firstDayOfMonth = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month, 0).getDate()

  const cells: CalendarCell[] = []

  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    cells.push({ date: new Date(year, month - 1, daysInPrevMonth - i), isCurrentMonth: false })
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(year, month, d), isCurrentMonth: true })
  }
  let nextDay = 1
  while (cells.length < 42) {
    cells.push({ date: new Date(year, month + 1, nextDay++), isCurrentMonth: false })
  }

  return cells
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear()
    && a.getMonth() === b.getMonth()
    && a.getDate() === b.getDate()
}

function formatSelectedDate(date: Date) {
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
}

export interface DatePickerProps {
  /** Pre-selected date shown when the picker opens; defaults to today when omitted. */
  value?: Date | null
  /** Label for the cancel/dismiss button. Defaults to `"Cancel"`. */
  cancelLabel?: string
  /** Label for the confirm/select button. Defaults to `"OK"`. */
  confirmLabel?: string
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
  /** Called when the user confirms a date selection; receives the selected `Date`. */
  onConfirm?: (date: Date) => void
  /** Called when the user clicks the cancel button without confirming. */
  onCancel?: () => void
}

export const DatePicker = ({
  value,
  cancelLabel = 'Cancel',
  confirmLabel = 'OK',
  className,
  onConfirm,
  onCancel,
}: DatePickerProps) => {
  const initial = value ?? new Date()
  const [viewYear, setViewYear] = useState(initial.getFullYear())
  const [viewMonth, setViewMonth] = useState(initial.getMonth())
  const [pendingDate, setPendingDate] = useState<Date>(initial)
  const [yearPickerOpen, setYearPickerOpen] = useState(false)

  const cells = buildCalendarGrid(viewYear, viewMonth)

  const prevMonth = () => {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11) }
    else setViewMonth(m => m - 1)
  }

  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0) }
    else setViewMonth(m => m + 1)
  }

  const handleDayClick = (cell: CalendarCell) => {
    setPendingDate(cell.date)
    if (!cell.isCurrentMonth) {
      setViewYear(cell.date.getFullYear())
      setViewMonth(cell.date.getMonth())
    }
  }

  const handleYearSelect = (year: number) => {
    setViewYear(year)
    setYearPickerOpen(false)
  }

  const rows = Array.from({ length: 6 }, (_, i) => cells.slice(i * 7, i * 7 + 7))

  return (
    <div className={[styles.picker, className ?? ''].filter(Boolean).join(' ')}>

      {/* Selected date header */}
      <div className={styles.selectedDate}>
        <span className={styles.selectedDateText}>
          {formatSelectedDate(pendingDate)}
        </span>
      </div>

      {/* Calendar controls */}
      <div className={styles.calendarControls}>
        <Button
          variant="brandPrimary"
          emphasis="tertiary"
          trailingIcon={
            <Icon
              icon={faChevronDown}
              size="xs"
              className={[styles.monthChevron, yearPickerOpen ? styles.monthChevronOpen : ''].filter(Boolean).join(' ')}
            />
          }
          onClick={() => setYearPickerOpen(v => !v)}
        >
          {MONTHS[viewMonth]}, {viewYear}
        </Button>
        {!yearPickerOpen && (
          <div className={styles.navigation}>
            <IconButton
              icon={faChevronLeft}
              aria-label="Previous month"
              variant="brandPrimary"
              iconSize="xs"
              onClick={prevMonth}
            />
            <IconButton
              icon={faChevronRight}
              aria-label="Next month"
              variant="brandPrimary"
              iconSize="xs"
              onClick={nextMonth}
            />
          </div>
        )}
      </div>

      {/* Year picker */}
      {yearPickerOpen ? (
        <div className={styles.yearPicker}>
          {YEARS.map(year => (
            <button
              key={year}
              type="button"
              className={[
                styles.yearCell,
                year === viewYear ? styles.yearCellSelected : '',
                year === THIS_YEAR ? styles.yearCellCurrent : '',
              ].filter(Boolean).join(' ')}
              onClick={() => handleYearSelect(year)}
            >
              {year}
            </button>
          ))}
        </div>
      ) : (
        /* Calendar grid */
        <div className={styles.calendar}>
          <div className={styles.dayOfWeekRow}>
            {DAYS_OF_WEEK.map((d) => (
              <span key={d} className={styles.dayOfWeek}>{d}</span>
            ))}
          </div>
          {rows.map((week, rowIdx) => (
            <div key={rowIdx} className={styles.weekRow}>
              {week.map((cell, colIdx) => {
                const isSelected = isSameDay(cell.date, pendingDate)
                return (
                  <button
                    key={colIdx}
                    type="button"
                    className={[
                      styles.dayCell,
                      !cell.isCurrentMonth ? styles.dayCellOutside : '',
                      isSelected ? styles.dayCellSelected : '',
                    ].filter(Boolean).join(' ')}
                    onClick={() => handleDayClick(cell)}
                    aria-label={cell.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    aria-pressed={isSelected}
                  >
                    {cell.date.getDate()}
                  </button>
                )
              })}
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className={styles.actions}>
        <Button variant="brandPrimary" emphasis="tertiary" onClick={onCancel}>
          {cancelLabel}
        </Button>
        <Button
          variant="brandPrimary"
          emphasis="tertiary"
          onClick={() => onConfirm?.(pendingDate)}
        >
          {confirmLabel}
        </Button>
      </div>

    </div>
  )
}

DatePicker.displayName = 'DatePicker'
