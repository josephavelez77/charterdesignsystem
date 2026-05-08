import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'
import { Table } from './Table'
import type { TableColumn } from './Table'

const meta: Meta<typeof Table> = {
  title: 'Data Display/Table',
  component: Table,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// ── Sample data ───────────────────────────────────────────────────────────────

interface SampleRow extends Record<string, unknown> {
  id: string
  name: string
  email: string
  priority: 'urgent' | 'high' | 'medium' | 'low'
  status: { label: string; statusType: 'positive' | 'caution' | 'negative' | 'neutral'; level: 1 | 2 | 3 }
}

const SAMPLE_DATA: SampleRow[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', priority: 'urgent', status: { label: 'Active', statusType: 'positive', level: 1 } },
  { id: '2', name: 'Bob Martinez', email: 'bob@example.com', priority: 'high', status: { label: 'Pending', statusType: 'caution', level: 1 } },
  { id: '3', name: 'Carol White', email: 'carol@example.com', priority: 'medium', status: { label: 'Active', statusType: 'positive', level: 1 } },
  { id: '4', name: 'David Lee', email: 'david@example.com', priority: 'low', status: { label: 'Inactive', statusType: 'neutral', level: 1 } },
  { id: '5', name: 'Eva Brown', email: 'eva@example.com', priority: 'high', status: { label: 'Error', statusType: 'negative', level: 1 } },
  { id: '6', name: 'Frank Wilson', email: 'frank@example.com', priority: 'medium', status: { label: 'Active', statusType: 'positive', level: 1 } },
  { id: '7', name: 'Grace Kim', email: 'grace@example.com', priority: 'low', status: { label: 'Pending', statusType: 'caution', level: 1 } },
  { id: '8', name: 'Henry Davis', email: 'henry@example.com', priority: 'urgent', status: { label: 'Active', statusType: 'positive', level: 1 } },
]

const COLUMNS: TableColumn<SampleRow>[] = [
  { key: 'checkbox', type: 'checkbox', header: '' },
  {
    key: 'name',
    type: 'user',
    header: 'Name',
    sortable: true,
    accessor: (row) => ({
      name: row.name,
      initials: row.name.split(' ').map((n) => n[0]).join('').toUpperCase(),
    }),
  },
  { key: 'email', type: 'text', header: 'Email', sortable: true, accessor: 'email' },
  { key: 'priority', type: 'priority', header: 'Priority', sortable: true, accessor: 'priority' },
  { key: 'status', type: 'status', header: 'Status', sortable: true, accessor: 'status' },
  {
    key: 'overflow',
    type: 'overflow',
    header: '',
    items: (row) => [
      { label: 'View', icon: faEye, onClick: () => alert(`View ${row.name}`) },
      { label: 'Edit', icon: faEdit, onClick: () => alert(`Edit ${row.name}`) },
      { label: 'Delete', icon: faTrash, onClick: () => alert(`Delete ${row.name}`) },
    ],
  },
  {
    key: 'nav',
    type: 'nav',
    header: '',
    onClick: (row) => alert(`Navigate to ${row.name}`),
  },
]

// ── Stories ───────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState<Set<string>>(new Set())
    const [sortKey, setSortKey] = useState<string | undefined>()
    const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

    const PRIORITY_ORDER: Record<string, number> = { urgent: 4, high: 3, medium: 2, low: 1 }

    const q = search.toLowerCase()
    const filtered = SAMPLE_DATA.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.priority.toLowerCase().includes(q) ||
        r.status.label.toLowerCase().includes(q),
    )

    const sorted = sortKey
      ? [...filtered].sort((a, b) => {
          let cmp = 0
          if (sortKey === 'name') {
            cmp = a.name.localeCompare(b.name)
          } else if (sortKey === 'email') {
            cmp = a.email.localeCompare(b.email)
          } else if (sortKey === 'priority') {
            cmp = (PRIORITY_ORDER[a.priority] ?? 0) - (PRIORITY_ORDER[b.priority] ?? 0)
          } else if (sortKey === 'status') {
            cmp = a.status.label.localeCompare(b.status.label)
          }
          return sortDir === 'asc' ? cmp : -cmp
        })
      : filtered

    return (
      <Table
        columns={COLUMNS}
        data={sorted}
        getRowId={(r) => r.id}
        searchValue={search}
        onSearchChange={setSearch}
        onFilterClick={() => alert('Filter clicked')}
        selectedRows={selected}
        onSelectionChange={setSelected}
        sortKey={sortKey}
        sortDirection={sortDir}
        onSortChange={(key, dir) => { setSortKey(key); setSortDir(dir) }}
        page={page}
        pageSize={pageSize}
        totalItems={sorted.length}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    )
  },
}

export const Loading: Story = {
  render: () => (
    <Table
      columns={COLUMNS}
      data={[]}
      getRowId={(r) => r.id}
      loading
      loadingRowCount={8}
      searchValue=""
      onSearchChange={() => {}}
      page={1}
      pageSize={10}
      totalItems={0}
      onPageChange={() => {}}
      onPageSizeChange={() => {}}
    />
  ),
}

export const Empty: Story = {
  render: () => (
    <Table
      columns={COLUMNS}
      data={[]}
      getRowId={(r) => r.id}
      searchValue="something that returns nothing"
      onSearchChange={() => {}}
      onFilterClick={() => {}}
      page={1}
      pageSize={10}
      totalItems={0}
      onPageChange={() => {}}
      onPageSizeChange={() => {}}
    />
  ),
}

export const TextOnly: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    const cols: TableColumn<SampleRow>[] = [
      { key: 'name', type: 'text', header: 'Name', sortable: true, accessor: 'name' },
      { key: 'email', type: 'text', header: 'Email', sortable: true, accessor: 'email' },
    ]

    return (
      <Table
        columns={cols}
        data={SAMPLE_DATA}
        getRowId={(r) => r.id}
        page={page}
        pageSize={pageSize}
        totalItems={SAMPLE_DATA.length}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    )
  },
}
