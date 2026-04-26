import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../Button/Button'
import styles from './TimePicker.module.css'

const ITEM_HEIGHT = 36
const VISIBLE = 5

const HOURS_12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const HOURS_24 = Array.from({ length: 24 }, (_, i) => i)
const MINUTES = Array.from({ length: 60 }, (_, i) => i)

function to12Hour(hours24: number): { hour: number; period: 'AM' | 'PM' } {
  if (hours24 === 0) return { hour: 12, period: 'AM' }
  if (hours24 === 12) return { hour: 12, period: 'PM' }
  if (hours24 > 12) return { hour: hours24 - 12, period: 'PM' }
  return { hour: hours24, period: 'AM' }
}

function to24Hour(hour12: number, period: 'AM' | 'PM'): number {
  if (period === 'AM') return hour12 === 12 ? 0 : hour12
  return hour12 === 12 ? 12 : hour12 + 12
}

function formatDisplay(hours24: number, minutes: number, format: '12h' | '24h'): string {
  if (format === '12h') {
    const { hour, period } = to12Hour(hours24)
    return `${hour}:${String(minutes).padStart(2, '0')} ${period}`
  }
  return `${String(hours24).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}

// ── Scroll column ─────────────────────────────────────────────────────────────

interface ScrollColumnProps {
  items: number[]
  value: number
  onSelect: (v: number) => void
  pad?: boolean
}

const ScrollColumn = ({ items, value, onSelect, pad = true }: ScrollColumnProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const idx = items.indexOf(value)
    if (idx < 0) return
    const top = idx * ITEM_HEIGHT - Math.floor(VISIBLE / 2) * ITEM_HEIGHT
    ref.current.scrollTop = Math.max(0, top)
  }, [value, items])

  return (
    <div ref={ref} className={styles.scrollColumn}>
      {items.map((item) => (
        <button
          key={item}
          type="button"
          className={[
            styles.scrollItem,
            item === value ? styles.scrollItemSelected : '',
          ].filter(Boolean).join(' ')}
          onClick={() => onSelect(item)}
        >
          {pad ? String(item).padStart(2, '0') : item}
        </button>
      ))}
    </div>
  )
}

// ── TimePicker ────────────────────────────────────────────────────────────────

export interface TimeValue {
  hours: number   // 0-23
  minutes: number // 0-59
}

export interface TimePickerProps {
  value?: TimeValue | null
  format?: '12h' | '24h'
  cancelLabel?: string
  confirmLabel?: string
  className?: string
  onConfirm?: (time: TimeValue) => void
  onCancel?: () => void
}

export const TimePicker = ({
  value,
  format = '12h',
  cancelLabel = 'Cancel',
  confirmLabel = 'OK',
  className,
  onConfirm,
  onCancel,
}: TimePickerProps) => {
  const initial = value ?? { hours: 12, minutes: 0 }

  const [pendingHours, setPendingHours] = useState(initial.hours)
  const [pendingMinutes, setPendingMinutes] = useState(initial.minutes)

  // 12h display hour and period, derived + kept in sync
  const init12 = to12Hour(initial.hours)
  const [displayHour, setDisplayHour] = useState(init12.hour)
  const [period, setPeriod] = useState<'AM' | 'PM'>(init12.period)

  const handleHour24Change = (h: number) => {
    setPendingHours(h)
  }

  const handleHour12Change = (h: number) => {
    setDisplayHour(h)
    setPendingHours(to24Hour(h, period))
  }

  const handlePeriodChange = (p: 'AM' | 'PM') => {
    setPeriod(p)
    setPendingHours(to24Hour(displayHour, p))
  }

  const handleConfirm = () => {
    onConfirm?.({ hours: pendingHours, minutes: pendingMinutes })
  }

  return (
    <div className={[styles.picker, className ?? ''].filter(Boolean).join(' ')}>
      {/* Selected time header */}
      <div className={styles.selectedTime}>
        <span className={styles.selectedTimeText}>
          {formatDisplay(pendingHours, pendingMinutes, format)}
        </span>
      </div>

      {/* Scroll columns */}
      <div className={styles.columnsArea}>
        {format === '12h' ? (
          <ScrollColumn
            items={HOURS_12}
            value={displayHour}
            onSelect={handleHour12Change}
            pad={false}
          />
        ) : (
          <ScrollColumn
            items={HOURS_24}
            value={pendingHours}
            onSelect={handleHour24Change}
          />
        )}

        <span className={styles.colon}>:</span>

        <ScrollColumn
          items={MINUTES}
          value={pendingMinutes}
          onSelect={setPendingMinutes}
        />

        {format === '12h' && (
          <div className={styles.periodSelector}>
            {(['AM', 'PM'] as const).map((p) => (
              <button
                key={p}
                type="button"
                className={[
                  styles.periodBtn,
                  period === p ? styles.periodBtnSelected : '',
                ].filter(Boolean).join(' ')}
                onClick={() => handlePeriodChange(p)}
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        <Button variant="brandPrimary" emphasis="tertiary" onClick={onCancel}>
          {cancelLabel}
        </Button>
        <Button variant="brandPrimary" emphasis="tertiary" onClick={handleConfirm}>
          {confirmLabel}
        </Button>
      </div>
    </div>
  )
}

TimePicker.displayName = 'TimePicker'
