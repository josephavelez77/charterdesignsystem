import React from 'react'
import styles from './Skeleton.module.css'

export type SkeletonShape = 'bar' | 'circle'

export interface SkeletonProps {
  /** Width of the skeleton — number treated as px, string passed through (e.g. '60%') */
  width?: number | string
  /** Height in px. For shape="circle" this also sets the width. */
  height?: number
  shape?: SkeletonShape
  className?: string
}

export const Skeleton = ({
  width = '100%',
  height = 24,
  shape = 'bar',
  className,
}: SkeletonProps) => {
  const w = shape === 'circle' ? height : width
  const style: React.CSSProperties = {
    width: typeof w === 'number' ? `${w}px` : w,
    height: `${height}px`,
  }

  return (
    <div
      className={[styles.skeleton, styles[shape], className ?? ''].filter(Boolean).join(' ')}
      style={style}
      aria-hidden
    >
      <div className={styles.shimmer} />
    </div>
  )
}

Skeleton.displayName = 'Skeleton'
