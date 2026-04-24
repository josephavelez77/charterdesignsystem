import React, { useState } from 'react'
import { faChevronLeft, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../Button/Button'
import styles from './DatePicker.module.css'

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

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
  value?: Date | null
  cancelLabel?: string
  confirmLabel?: string
  className?: string
  onConfirm?: (date: Date) => void
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
    // If clicking outside-month day, jump to that month
    if (!cell.isCurrentMonth) {
      setViewYear(cell.date.getFullYear())
      setViewMonth(cell.date.getMonth())
    }
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
        <button type="button" className={styles.monthSelector}>
          <span className={styles.monthLabel}>{MONTHS[viewMonth]}, {viewYear}</span>
          <FontAwesomeIcon icon={faChevronDown} style={{ width: 8, height: 8 }} aria-hidden />
        </button>
        <div className={styles.navigation}>
          <button
            type="button"
            className={styles.navButton}
            onClick={prevMonth}
            aria-label="Previous month"
          >
            <FontAwesomeIcon icon={faChevronLeft} style={{ width: 8, height: 8 }} aria-hidden />
          </button>
          <button
            type="button"
            className={styles.navButton}
            onClick={nextMonth}
            aria-label="Next month"
          >
            <FontAwesomeIcon icon={faChevronRight} style={{ width: 8, height: 8 }} aria-hidden />
          </button>
        </div>
      </div>

      {/* Calendar grid */}
      <div className={styles.calendar}>
        {/* Day of week header */}
        <div className={styles.dayOfWeekRow}>
          {DAYS_OF_WEEK.map((d) => (
            <span key={d} className={styles.dayOfWeek}>{d}</span>
          ))}
        </div>

        {/* Week rows */}
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
