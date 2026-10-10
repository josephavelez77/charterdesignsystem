import React, { useId, useState } from 'react'
import styles from './Slider.module.css'

export type SliderVariant = 'discrete' | 'continuous'

export interface SliderProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'value' | 'defaultValue' | 'onChange' | 'min' | 'max' | 'step' | 'size'
  > {
  /** `discrete` snaps between marked steps; `continuous` moves smoothly along an unmarked track. Defaults to `discrete`. */
  variant?: SliderVariant
  /** Visible label shown above the track (rendered as `Label:`). When omitted, pass `aria-label` for an accessible name. */
  label?: string
  /** Controlled value; when provided the component is controlled. */
  value?: number
  /** Initial value for uncontrolled usage — ignored when `value` is provided. Defaults to `min`. */
  defaultValue?: number
  /** Lowest selectable value. Defaults to `0`. */
  min?: number
  /** Highest selectable value. Defaults to `100`. */
  max?: number
  /**
   * Distance between selectable values. Discrete sliders draw a tick at every step and are designed for 3–12 positions;
   * defaults to five evenly spaced positions. Continuous sliders default to `1`.
   */
  step?: number
  /** Formats the value for the selection text, end labels and screen readers (e.g. `v => \`${v}%\``). Defaults to `String(value)`. */
  formatValue?: (value: number) => string
  /** Show the current selection next to the label. Defaults to `true`. */
  showSelection?: boolean
  /** Text under the start of the track. Defaults to `formatValue(min)`. */
  lowLabel?: string
  /** Text under the end of the track. Defaults to `formatValue(max)`. */
  highLabel?: string
  /** Show the low end label. Defaults to `true`. */
  showLowLabel?: boolean
  /** Show the high end label. Defaults to `true`. */
  showHighLabel?: boolean
  /** When true, the slider is non-interactive and rendered in muted colors. */
  disabled?: boolean
  /** Called with the new numeric value whenever the user moves the slider. */
  onChange?: (value: number) => void
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n))

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      variant = 'discrete',
      label,
      value,
      defaultValue,
      min = 0,
      max = 100,
      step,
      formatValue = String,
      showSelection = true,
      lowLabel,
      highLabel,
      showLowLabel = true,
      showHighLabel = true,
      disabled,
      onChange,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId()
    const inputId = id ?? generatedId
    const isDiscrete = variant === 'discrete'
    const range = max - min
    const resolvedStep = step ?? (isDiscrete ? range / 4 : 1)

    const isControlled = value !== undefined
    const [internalValue, setInternalValue] = useState(defaultValue ?? min)
    const current = clamp(isControlled ? value : internalValue, min, max)
    const toPct = (v: number) => (range > 0 ? (v - min) / range : 0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = Number(e.target.value)
      if (!isControlled) setInternalValue(next)
      onChange?.(next)
    }

    const ticks: number[] = []
    if (isDiscrete && resolvedStep > 0) {
      const count = Math.floor(range / resolvedStep + 1e-9) + 1
      for (let i = 0; i < count; i++) ticks.push(toPct(min + i * resolvedStep))
    }

    const selectionText = formatValue(current)
    const showEndLabels = showLowLabel || showHighLabel
    const rootClass = [styles.root, disabled ? styles.disabled : '', className ?? ''].filter(Boolean).join(' ')

    return (
      <div className={rootClass}>
        {(label || showSelection) && (
          <div className={styles.header}>
            {label && <label htmlFor={inputId}>{label}:</label>}
            {showSelection && <span aria-hidden="true">{selectionText}</span>}
          </div>
        )}

        <div className={styles.track}>
          <div className={styles.rail}>
            {ticks.map((pct, i) => (
              <span
                key={i}
                className={styles.tick}
                style={{ '--slider-pct': pct } as React.CSSProperties}
                aria-hidden="true"
              />
            ))}
            <input
              ref={ref}
              type="range"
              id={inputId}
              className={styles.input}
              min={min}
              max={max}
              step={resolvedStep}
              value={current}
              disabled={disabled}
              onChange={handleChange}
              aria-valuetext={selectionText}
              {...props}
            />
            <span
              className={styles.thumb}
              style={{ '--slider-pct': toPct(current) } as React.CSSProperties}
              aria-hidden="true"
            />
          </div>
        </div>

        {showEndLabels && (
          <div className={styles.rangeLabels} aria-hidden="true">
            <span className={styles.rangeLabel}>{showLowLabel && (lowLabel ?? formatValue(min))}</span>
            <span className={styles.rangeLabel}>{showHighLabel && (highLabel ?? formatValue(max))}</span>
          </div>
        )}
      </div>
    )
  },
)

Slider.displayName = 'Slider'
