import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'
import { DataGrid } from './DataGrid'
import type { DataGridColumn } from './DataGrid'

const meta: Meta<typeof DataGrid> = {
  title: 'Data Display/DataGrid',
  component: DataGrid,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// ── Sample data ───────────────────────────────────────────────────────────────

interface GridRow extends Record<string, unknown> {
  id: string
  name: string
  role: string
  age: number | undefined
  startDate: Date | null
  department: string
  active: boolean
  notify: boolean
}

const INITIAL_DATA: GridRow[] = [
  { id: '1', name: 'Alice Johnson', role: 'Engineer', age: 32, startDate: new Date('2021-03-15'), department: 'eng', active: true, notify: false },
  { id: '2', name: 'Bob Martinez', role: 'Designer', age: 28, startDate: new Date('2022-06-01'), department: 'design', active: true, notify: true },
  { id: '3', name: 'Carol White', role: 'Manager', age: 41, startDate: new Date('2019-11-20'), department: 'product', active: false, notify: false },
  { id: '4', name: 'David Lee', role: 'Analyst', age: 35, startDate: null, department: 'data', active: true, notify: true },
  { id: '5', name: 'Eva Brown', role: 'Engineer', age: 29, startDate: new Date('2023-01-10'), department: 'eng', active: false, notify: false },
  { id: '6', name: 'Frank Wilson', role: 'Designer', age: 38, startDate: new Date('2020-08-05'), department: 'design', active: true, notify: true },
  { id: '7', name: 'Grace Kim', role: 'Manager', age: 45, startDate: new Date('2018-04-22'), department: 'product', active: true, notify: false },
  { id: '8', name: 'Henry Davis', role: 'Analyst', age: 31, startDate: new Date('2022-09-14'), department: 'data', active: true, notify: true },
]

const DEPARTMENT_OPTIONS = [
  { value: 'eng', label: 'Engineering' },
  { value: 'design', label: 'Design' },
  { value: 'product', label: 'Product' },
  { value: 'data', label: 'Data' },
]

const COLUMNS: DataGridColumn<GridRow>[] = [
  { key: 'row-select', type: 'row-select', header: '' },
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
  {
    key: 'role',
    type: 'text',
    header: 'Role',
    sortable: true,
    accessor: 'role',
    setter: (row, v) => ({ ...row, role: v }),
  },
  {
    key: 'age',
    type: 'number',
    header: 'Age',
    sortable: true,
    accessor: 'age',
    setter: (row, v) => ({ ...row, age: v }),
    min: 18,
    max: 99,
    width: 80,
  },
  {
    key: 'startDate',
    type: 'date',
    header: 'Start Date',
    accessor: 'startDate',
    setter: (row, v) => ({ ...row, startDate: v }),
  },
  {
    key: 'department',
    type: 'select',
    header: 'Department',
    sortable: true,
    accessor: 'department',
    setter: (row, v) => ({ ...row, department: v }),
    options: DEPARTMENT_OPTIONS,
  },
  {
    key: 'active',
    type: 'checkbox',
    header: 'Active',
    accessor: 'active',
    setter: (row, v) => ({ ...row, active: v }),
    width: 72,
  },
  {
    key: 'notify',
    type: 'switch',
    header: 'Notify',
    accessor: 'notify',
    setter: (row, v) => ({ ...row, notify: v }),
    width: 80,
  },
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
]

// ── Stories ───────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => {
    const [data, setData] = useState<GridRow[]>(INITIAL_DATA)
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState<Set<string>>(new Set())
    const [sortKey, setSortKey] = useState<string | undefined>()
    const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

    const handleRowChange = (rowId: string, updated: GridRow) => {
      setData((prev) => prev.map((r) => (r.id === rowId ? updated : r)))
    }

    const q = search.toLowerCase()
    const filtered = data.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.role.toLowerCase().includes(q) ||
        DEPARTMENT_OPTIONS.find((d) => d.value === r.department)?.label.toLowerCase().includes(q),
    )

    const sorted = sortKey
      ? [...filtered].sort((a, b) => {
          let cmp = 0
          if (sortKey === 'name') cmp = a.name.localeCompare(b.name)
          else if (sortKey === 'role') cmp = a.role.localeCompare(b.role)
          else if (sortKey === 'age') cmp = (a.age ?? 0) - (b.age ?? 0)
          else if (sortKey === 'department') cmp = a.department.localeCompare(b.department)
          return sortDir === 'asc' ? cmp : -cmp
        })
      : filtered

    return (
      <DataGrid
        columns={COLUMNS}
        data={sorted}
        getRowId={(r) => r.id}
        onRowChange={handleRowChange}
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
    <DataGrid
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
    <DataGrid
      columns={COLUMNS}
      data={[]}
      getRowId={(r) => r.id}
      searchValue="no results"
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
