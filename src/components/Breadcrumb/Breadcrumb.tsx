import React from 'react'
import styles from './Breadcrumb.module.css'

export interface BreadcrumbItem {
  label: string
  href?: string
  onClick?: () => void
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export const Breadcrumb = ({ items, className }: BreadcrumbProps) => {
  if (items.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className={[styles.breadcrumb, className ?? ''].filter(Boolean).join(' ')}>
      <ol className={styles.list}>
        {items.map((item, i) => {
          const isCurrent = i === items.length - 1
          return (
            <li key={i} className={styles.item}>
              {i > 0 && <span className={styles.separator} aria-hidden>/</span>}
              {isCurrent ? (
                <span className={styles.current} aria-current="page">{item.label}</span>
              ) : item.href ? (
                <a href={item.href} className={styles.link}>{item.label}</a>
              ) : (
                <button type="button" className={styles.link} onClick={item.onClick}>
                  {item.label}
                </button>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

Breadcrumb.displayName = 'Breadcrumb'
