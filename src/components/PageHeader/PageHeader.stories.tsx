import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PageHeader } from './PageHeader'

const meta: Meta<typeof PageHeader> = {
  title: 'Navigation/PageHeader',
  component: PageHeader,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  args: {
    title: 'Page title',
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ── States ────────────────────────────────────────────────────────────────────

export const TitleOnly: Story = {}

export const WithBreadcrumbs: Story = {
  args: {
    breadcrumbs: [
      { label: 'Home', onClick: () => {} },
      { label: 'Section', onClick: () => {} },
      { label: 'Page title' },
    ],
  },
}

export const WithPrimaryAction: Story = {
  args: {
    primaryAction: { label: 'Primary' },
  },
}

export const WithAllActions: Story = {
  args: {
    primaryAction: { label: 'Primary' },
    secondaryAction: { label: 'Secondary' },
    tertiaryActions: [
      { label: 'Export' },
      { label: 'Duplicate' },
      { label: 'Archive' },
    ],
  },
}

export const FullFeatured: Story = {
  args: {
    breadcrumbs: [
      { label: 'Home', onClick: () => {} },
      { label: 'Section', onClick: () => {} },
      { label: 'Page title' },
    ],
    primaryAction: { label: 'Primary' },
    secondaryAction: { label: 'Secondary' },
    tertiaryActions: [
      { label: 'Export' },
      { label: 'Duplicate' },
      { label: 'Archive' },
    ],
  },
}
