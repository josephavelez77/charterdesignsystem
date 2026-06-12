import React, { useEffect, useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BarChart } from '@mui/x-charts/BarChart'
import { LineChart } from '@mui/x-charts/LineChart'
import { PieChart } from '@mui/x-charts/PieChart'
import { SparkLineChart } from '@mui/x-charts/SparkLineChart'
import { ChartCard } from './ChartCard'

const meta: Meta<typeof ChartCard> = {
  title: 'Data Display/ChartCard',
  component: ChartCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    layout: { control: 'select', options: ['horizontal', 'vertical'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ─── Responsive sizing hook ────────────────────────────────────────────────────
// MUI X Charts requires explicit pixel width. This hook measures the container
// and passes the result down so any chart type can be responsive.

const useAutoWidth = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(entries => {
      const w = entries[0]?.contentRect.width
      if (w) setWidth(Math.floor(w))
    })
    ro.observe(el)
    setWidth(Math.floor(el.getBoundingClientRect().width))
    return () => ro.disconnect()
  }, [])
  return { ref, width }
}

// ─── DS chart tokens ──────────────────────────────────────────────────────────

const DS_CHART_COLORS = ['#007DAF', '#B15873', '#00C950', '#FF6900', '#2B7FFF']

// Axis + grid overrides that make MUI text/lines respect DS tokens
const chartSx = {
  '& .MuiChartsAxis-tickLabel': {
    fill: 'var(--text-color-themeable-secondary) !important',
    fontFamily: 'var(--text-family-static-body) !important',
    fontSize: '11px !important',
  },
  '& .MuiChartsAxis-line': { stroke: 'var(--border-color-themeable-primary) !important' },
  '& .MuiChartsAxis-tick': { stroke: 'var(--border-color-themeable-primary) !important' },
  '& .MuiChartsGrid-horizontalLine': {
    stroke: 'var(--border-color-themeable-primary) !important',
    strokeDasharray: '4 4',
    opacity: 0.5,
  },
}

// Legend positioned below chart, styled via slotProps to avoid emotion specificity wars
const legendBottom = (marginTop = '4px') => ({
  position: { vertical: 'bottom' as const, horizontal: 'middle' as const },
  direction: 'row' as const,
  sx: {
    color: 'var(--text-color-themeable-secondary)',
    fontFamily: 'var(--text-family-static-body)',
    fontSize: '11px',
    marginBlockStart: marginTop,
    marginBlockEnd: '0',
  },
})

// Y-axis hidden — rely on grid lines + tooltip for values, saves ~30px on the left
const Y_AXIS_HIDDEN = [{ position: 'none' as const }]

const MARGIN = { top: 8, right: 8, bottom: 40, left: 8 }
const MARGIN_COMPACT = { top: 4, right: 4, bottom: 28, left: 8 }

// ─── Bar chart ────────────────────────────────────────────────────────────────

const TOOLS = ['Figma', 'Sketch', 'XD', 'PS']
const BAR_SERIES = [
  { data: [30, 25, 30, 20], label: '2020' },
  { data: [65, 48, 40, 48], label: '2021' },
  { data: [75, 82, 56, 79], label: '2022' },
]

export const BarGrouped: Story = {
  render: () => {
    const { ref, width } = useAutoWidth()
    return (
      <div style={{ maxWidth: 600 }}>
        <ChartCard value="100" description="Bushels of apples" layout="vertical">
          <div ref={ref} style={{ width: '100%' }}>
            {width > 0 && (
              <BarChart
                series={BAR_SERIES}
                xAxis={[{ data: TOOLS, scaleType: 'band' }]}
                yAxis={Y_AXIS_HIDDEN}
                colors={DS_CHART_COLORS}
                width={width} height={220}
                grid={{ horizontal: true }}
                margin={MARGIN}
                slotProps={{ legend: legendBottom() }}
                sx={chartSx}
              />
            )}
          </div>
        </ChartCard>
      </div>
    )
  },
}

export const BarStacked: Story = {
  render: () => {
    const { ref, width } = useAutoWidth()
    return (
      <div style={{ maxWidth: 600 }}>
        <ChartCard value="100" description="Bushels of apples" layout="vertical">
          <div ref={ref} style={{ width: '100%' }}>
            {width > 0 && (
              <BarChart
                series={BAR_SERIES.map(s => ({ ...s, stack: 'total' }))}
                xAxis={[{ data: TOOLS, scaleType: 'band' }]}
                yAxis={Y_AXIS_HIDDEN}
                colors={DS_CHART_COLORS}
                width={width} height={220}
                grid={{ horizontal: true }}
                margin={MARGIN}
                slotProps={{ legend: legendBottom() }}
                sx={chartSx}
              />
            )}
          </div>
        </ChartCard>
      </div>
    )
  },
}

export const BarHorizontalLayout: Story = {
  render: () => {
    const { ref, width } = useAutoWidth()
    return (
      <div style={{ maxWidth: 600 }}>
        <ChartCard value="100" description="Bushels of apples" layout="horizontal">
          <div ref={ref} style={{ width: '100%' }}>
            {width > 0 && (
              <BarChart
                series={BAR_SERIES}
                xAxis={[{ data: TOOLS, scaleType: 'band' }]}
                yAxis={Y_AXIS_HIDDEN}
                colors={DS_CHART_COLORS}
                width={width} height={160}
                grid={{ horizontal: true }}
                margin={MARGIN}
                slotProps={{ legend: legendBottom() }}
                sx={chartSx}
              />
            )}
          </div>
        </ChartCard>
      </div>
    )
  },
}

// ─── Line chart ───────────────────────────────────────────────────────────────

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const LINE_SERIES = [
  { data: [42, 55, 48, 60, 75, 82, 78, 90, 85, 95, 88, 102], label: 'This year', area: true },
  { data: [30, 38, 42, 51, 60, 65, 70, 74, 68, 80, 72, 88], label: 'Last year' },
]

export const LineArea: Story = {
  render: () => {
    const { ref, width } = useAutoWidth()
    return (
      <div style={{ maxWidth: 600 }}>
        <ChartCard value="$102K" description="Monthly revenue" layout="vertical">
          <div ref={ref} style={{ width: '100%' }}>
            {width > 0 && (
              <LineChart
                series={LINE_SERIES}
                xAxis={[{ data: MONTHS, scaleType: 'band' }]}
                yAxis={Y_AXIS_HIDDEN}
                colors={DS_CHART_COLORS}
                width={width} height={220}
                grid={{ horizontal: true }}
                margin={MARGIN}
                slotProps={{ legend: legendBottom() }}
                sx={chartSx}
              />
            )}
          </div>
        </ChartCard>
      </div>
    )
  },
}

export const LineTrend: Story = {
  render: () => {
    const { ref, width } = useAutoWidth()
    return (
      <div style={{ maxWidth: 600 }}>
        <ChartCard value="$102K" description="Monthly revenue" layout="horizontal">
          <div ref={ref} style={{ width: '100%' }}>
            {width > 0 && (
              <LineChart
                series={[LINE_SERIES[0]]}
                xAxis={[{ data: MONTHS, scaleType: 'band' }]}
                yAxis={Y_AXIS_HIDDEN}
                colors={DS_CHART_COLORS}
                width={width} height={140}
                grid={{ horizontal: true }}
                hideLegend
                margin={MARGIN}
                sx={chartSx}
              />
            )}
          </div>
        </ChartCard>
      </div>
    )
  },
}

// ─── Sparkline ────────────────────────────────────────────────────────────────

const SPARK_DATA = [18, 24, 22, 30, 28, 35, 32, 40, 38, 45, 42, 50]

export const Sparkline: Story = {
  render: () => {
    const { ref, width } = useAutoWidth()
    return (
      <div style={{ maxWidth: 600 }}>
        <ChartCard value="+18%" description="Growth this quarter" layout="horizontal">
          <div ref={ref} style={{ width: '100%' }}>
            {width > 0 && (
              <SparkLineChart
                data={SPARK_DATA}
                colors={DS_CHART_COLORS}
                width={width} height={80}
                area
                showHighlight
                showTooltip
                curve="natural"
                sx={{
                  '& .MuiAreaElement-root': { opacity: 0.2 },
                }}
              />
            )}
          </div>
        </ChartCard>
      </div>
    )
  },
}

// ─── Pie chart ────────────────────────────────────────────────────────────────

const PIE_DATA = [
  { id: 0, value: 38, label: 'Direct' },
  { id: 1, value: 27, label: 'Organic' },
  { id: 2, value: 20, label: 'Referral' },
  { id: 3, value: 15, label: 'Social' },
]

export const Pie: Story = {
  render: () => {
    const { ref, width } = useAutoWidth()
    return (
      <div style={{ maxWidth: 600 }}>
        <ChartCard value="12,400" description="Sessions by source" layout="horizontal">
          <div ref={ref} style={{ width: '100%' }}>
            {width > 0 && (
              <PieChart
                series={[{
                  data: PIE_DATA,
                  innerRadius: 32,
                  paddingAngle: 2,
                  cornerRadius: 3,
                }]}
                colors={DS_CHART_COLORS}
                width={width} height={160}
                slotProps={{ legend: legendBottom() }}
                sx={{
                  ...chartSx,
                  '& .MuiChartsLegend-root': {
                    color: 'var(--text-color-themeable-secondary)',
                    fontFamily: 'var(--text-family-static-body)',
                    fontSize: '11px',
                  },
                }}
              />
            )}
          </div>
        </ChartCard>
      </div>
    )
  },
}

// ─── Grid of mixed cards ──────────────────────────────────────────────────────

export const GridOfCards: Story = {
  render: () => {
    const bar1 = useAutoWidth()
    const bar2 = useAutoWidth()
    const line1 = useAutoWidth()
    const spark1 = useAutoWidth()
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        <ChartCard value="48,200" description="Page views" layout="horizontal">
          <div ref={bar1.ref} style={{ width: '100%' }}>
            {bar1.width > 0 && (
              <BarChart
                series={BAR_SERIES}
                xAxis={[{ data: TOOLS, scaleType: 'band' }]}
                yAxis={Y_AXIS_HIDDEN}
                colors={DS_CHART_COLORS}
                width={bar1.width} height={110}
                hideLegend grid={{ horizontal: true }}
                margin={MARGIN_COMPACT} sx={chartSx}
              />
            )}
          </div>
        </ChartCard>

        <ChartCard value="$102K" description="Revenue" layout="horizontal">
          <div ref={line1.ref} style={{ width: '100%' }}>
            {line1.width > 0 && (
              <LineChart
                series={[{ data: LINE_SERIES[0].data, area: true }]}
                xAxis={[{ data: MONTHS, scaleType: 'band' }]}
                yAxis={Y_AXIS_HIDDEN}
                colors={DS_CHART_COLORS}
                width={line1.width} height={110}
                hideLegend grid={{ horizontal: true }}
                margin={MARGIN_COMPACT} sx={chartSx}
              />
            )}
          </div>
        </ChartCard>

        <ChartCard value="+18%" description="Growth" layout="horizontal">
          <div ref={spark1.ref} style={{ width: '100%' }}>
            {spark1.width > 0 && (
              <SparkLineChart
                data={SPARK_DATA}
                colors={DS_CHART_COLORS}
                width={spark1.width} height={80}
                area showHighlight showTooltip curve="natural"
                sx={{ '& .MuiAreaElement-root': { opacity: 0.2 } }}
              />
            )}
          </div>
        </ChartCard>

        <ChartCard value="12,400" description="By source" layout="horizontal">
          <div ref={bar2.ref} style={{ width: '100%' }}>
            {bar2.width > 0 && (
              <PieChart
                series={[{ data: PIE_DATA, innerRadius: 24, paddingAngle: 2, cornerRadius: 3 }]}
                colors={DS_CHART_COLORS}
                width={bar2.width} height={110}
                hideLegend
                sx={chartSx}
              />
            )}
          </div>
        </ChartCard>
      </div>
    )
  },
}

export const EmptyState: Story = {
  args: {
    value: '—',
    description: 'No data available',
    layout: 'horizontal',
  },
}
