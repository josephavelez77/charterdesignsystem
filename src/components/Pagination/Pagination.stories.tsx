import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Pagination, SimplePagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Data Display/Pagination',
  component: Pagination,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// ── Complex Pagination ────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const totalItems = 248
    return (
      <Pagination
        totalItems={totalItems}
        page={page}
        pageSize={pageSize}
        onPageChange={setPage}
        onPageSizeChange={(size) => { setPageSize(size); setPage(1) }}
      />
    )
  },
}

export const FirstPage: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(25)
    return (
      <Pagination
        totalItems={500}
        page={page}
        pageSize={pageSize}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    )
  },
}

export const LastPage: Story = {
  render: () => {
    const [page, setPage] = useState(5)
    const [pageSize, setPageSize] = useState(10)
    return (
      <Pagination
        totalItems={50}
        page={page}
        pageSize={pageSize}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    )
  },
}

export const EmptyData: Story = {
  render: () => (
    <Pagination
      totalItems={0}
      page={1}
      pageSize={10}
      onPageChange={() => {}}
      onPageSizeChange={() => {}}
    />
  ),
}

// ── Simple Pagination ─────────────────────────────────────────────────────────

export const Simple: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    return <SimplePagination page={page} totalPages={10} onPageChange={setPage} />
  },
}

export const SimpleFirstPage: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    return <SimplePagination page={page} totalPages={5} onPageChange={setPage} />
  },
}

export const SimpleLastPage: Story = {
  render: () => {
    const [page, setPage] = useState(5)
    return <SimplePagination page={page} totalPages={5} onPageChange={setPage} />
  },
}

// ── Both variants ─────────────────────────────────────────────────────────────

export const BothVariants: Story = {
  render: () => {
    const [page1, setPage1] = useState(3)
    const [pageSize, setPageSize] = useState(10)
    const [page2, setPage2] = useState(3)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
        <Pagination
          totalItems={248}
          page={page1}
          pageSize={pageSize}
          onPageChange={setPage1}
          onPageSizeChange={setPageSize}
        />
        <SimplePagination page={page2} totalPages={25} onPageChange={setPage2} />
      </div>
    )
  },
}
