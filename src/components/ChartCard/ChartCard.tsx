import React from 'react'
import styles from './ChartCard.module.css'

export type ChartCardLayout = 'horizontal' | 'vertical'

export interface ChartCardProps {
  /** Primary metric string displayed prominently (e.g. `"1,234"` or `"48%"`). */
  value: string
  /** Short description of the metric shown below `value`. */
  description: string
  /**
   * Layout variant:
   * - `horizontal` — metric text on the left, chart fills the right side (default).
   * - `vertical` — metric text on top, chart fills the full width below.
   */
  layout?: ChartCardLayout
  /** Chart content — pass any chart component (Recharts, Victory, etc.) or a custom SVG here. */
  children?: React.ReactNode
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

export const ChartCard = ({
  value,
  description,
  layout = 'horizontal',
  children,
  className,
}: ChartCardProps) => {
  return (
    <div
      className={[
        styles.card,
        styles[layout],
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={styles.info}>
        <span className={styles.value}>{value}</span>
        <span className={styles.description}>{description}</span>
      </div>

      {children && (
        <div className={styles.chartArea}>
          {children}
        </div>
      )}
    </div>
  )
}

ChartCard.displayName = 'ChartCard'
