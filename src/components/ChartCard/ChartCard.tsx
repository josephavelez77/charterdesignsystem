import React from 'react'
import styles from './ChartCard.module.css'

export interface BarChartDataPoint {
  /** Category label for this bar (used for tooltip / accessibility purposes). */
  label: string
  /** Numeric height of this bar — relative to the tallest bar in the dataset. */
  value: number
}

export interface ChartCardProps {
  /** Primary metric string displayed prominently above the chart (e.g. `"1,234"`). */
  value: string
  /** Short description of the metric shown below `value`. */
  description: string
  /** Dataset rendered as a mini bar chart on the right side of the card. */
  data: BarChartDataPoint[]
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

const BAR_CHART_HEIGHT = 80
const BAR_GAP = 4

const BarChart = ({ data }: { data: BarChartDataPoint[] }) => {
  if (!data.length) return null

  const max = Math.max(...data.map((d) => d.value))
  const barCount = data.length
  const svgWidth = 200
  const barWidth = Math.max(4, Math.floor((svgWidth - BAR_GAP * (barCount - 1)) / barCount))
  const totalWidth = barCount * barWidth + BAR_GAP * (barCount - 1)

  return (
    <svg
      viewBox={`0 0 ${totalWidth} ${BAR_CHART_HEIGHT}`}
      width={totalWidth}
      height={BAR_CHART_HEIGHT}
      className={styles.chart}
      aria-hidden
    >
      {data.map((d, i) => {
        const barHeight = max > 0 ? Math.round((d.value / max) * BAR_CHART_HEIGHT) : 0
        const x = i * (barWidth + BAR_GAP)
        const y = BAR_CHART_HEIGHT - barHeight
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={barWidth}
            height={barHeight}
            rx={2}
            className={styles.bar}
          />
        )
      })}
    </svg>
  )
}

export const ChartCard = ({ value, description, data, className }: ChartCardProps) => {
  return (
    <div className={[styles.card, className ?? ''].filter(Boolean).join(' ')}>
      <div className={styles.info}>
        <span className={styles.value}>{value}</span>
        <span className={styles.description}>{description}</span>
      </div>
      <div className={styles.chartArea}>
        <BarChart data={data} />
      </div>
    </div>
  )
}

ChartCard.displayName = 'ChartCard'
