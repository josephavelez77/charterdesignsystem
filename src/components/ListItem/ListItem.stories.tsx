import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { faHouse, faCog, faUser } from '@fortawesome/free-solid-svg-icons'
import { ListItem } from './ListItem'

const meta: Meta<typeof ListItem> = {
  title: 'Data Display/ListItem',
  component: ListItem,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// ── Read-only ─────────────────────────────────────────────────────────────────

export const ReadOnly: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <ListItem title="List Title" />
    </div>
  ),
}

export const ReadOnlyWithSubtitle: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <ListItem title="List Title" subtitle="List subtitle" />
    </div>
  ),
}

export const ReadOnlyWithIcon: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <ListItem title="List Title" subtitle="List subtitle" leadingIcon={faHouse} />
    </div>
  ),
}

export const ReadOnlyWithAvatar: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <ListItem title="List Title" subtitle="List subtitle" leadingAvatar={{ type: 'initials', initials: 'JV' }} />
    </div>
  ),
}

// ── Interactive ───────────────────────────────────────────────────────────────

export const Interactive: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <ListItem title="List Title" subtitle="List subtitle" leadingIcon={faHouse} interactive />
    </div>
  ),
}

export const InteractiveWithAvatar: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <ListItem
        title="List Title"
        subtitle="List subtitle"
        leadingAvatar={{ type: 'initials', initials: 'JV' }}
        interactive
      />
    </div>
  ),
}

export const InteractiveDisabled: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <ListItem title="List Title" subtitle="List subtitle" leadingIcon={faHouse} interactive disabled />
    </div>
  ),
}

// ── All states ────────────────────────────────────────────────────────────────

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 320 }}>
      <div>
        <p style={{ color: 'var(--text-color-themeable-tertiary)', fontSize: 12, marginBottom: 8 }}>Read-only</p>
        <ListItem title="List Title" subtitle="List subtitle" leadingIcon={faHouse} />
        <ListItem title="List Title" subtitle="List subtitle" leadingAvatar={{ type: 'initials', initials: 'AB' }} />
        <ListItem title="Title only" />
      </div>
      <div>
        <p style={{ color: 'var(--text-color-themeable-tertiary)', fontSize: 12, marginBottom: 8 }}>Interactive</p>
        <ListItem title="List Title" subtitle="List subtitle" leadingIcon={faHouse} interactive onClick={() => {}} />
        <ListItem title="List Title" subtitle="List subtitle" leadingIcon={faCog} interactive onClick={() => {}} />
        <ListItem title="List Title" subtitle="List subtitle" leadingIcon={faUser} interactive disabled />
      </div>
    </div>
  ),
}
