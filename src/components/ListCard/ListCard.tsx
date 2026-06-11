import React, { useState } from 'react'
import { ListGroup } from '../ListGroup'
import { ListItem } from '../ListItem'
import type { ListItemProps } from '../ListItem'
import { SimplePagination } from '../Pagination'
import styles from './ListCard.module.css'

const PAGE_SIZE = 10

export interface ListCardItem extends Pick<ListItemProps, 'title' | 'subtitle'> {}

export interface ListCardProps {
  /** Primary metric string displayed at the top of the card (e.g. `"42"`). */
  value: string
  /** Short description of the metric shown beside `value`. */
  description: string
  /** Items to display in the paginated list; each requires `title` and an optional `subtitle`. */
  items: ListCardItem[]
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

export const ListCard = ({ value, description, items, className }: ListCardProps) => {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(items.length / PAGE_SIZE)
  const paginated = items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
  const showPagination = items.length > PAGE_SIZE

  return (
    <div className={[styles.card, className ?? ''].filter(Boolean).join(' ')}>
      <div className={styles.header}>
        <span className={styles.value}>{value}</span>
        <span className={styles.description}>{description}</span>
      </div>
      <div className={styles.listWrapper}>
        <ListGroup>
          {paginated.map((item, i) => (
            <ListItem key={i} title={item.title} subtitle={item.subtitle} />
          ))}
        </ListGroup>
      </div>
      {showPagination && (
        <div className={styles.paginationRow}>
          <SimplePagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
      )}
    </div>
  )
}

ListCard.displayName = 'ListCard'
