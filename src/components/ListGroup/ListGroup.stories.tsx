import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { faHouse, faUser, faCog, faTrash, faBell } from '@fortawesome/free-solid-svg-icons'
import { ListGroup } from './ListGroup'
import { ListItem } from '../ListItem/ListItem'

const meta: Meta<typeof ListGroup> = {
  title: 'Data Display/ListGroup',
  component: ListGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// ── Default ───────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <ListGroup>
        <ListItem title="List Title" subtitle="List subtitle" leadingIcon={faHouse} interactive />
        <ListItem title="List Title" subtitle="List subtitle" leadingIcon={faUser} interactive />
        <ListItem title="List Title" subtitle="List subtitle" leadingIcon={faCog} interactive />
        <ListItem title="List Title" subtitle="List subtitle" leadingIcon={faBell} interactive />
        <ListItem title="List Title" subtitle="List subtitle" leadingIcon={faTrash} interactive />
      </ListGroup>
    </div>
  ),
}

// ── Read-only ─────────────────────────────────────────────────────────────────

export const ReadOnly: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <ListGroup>
        <ListItem title="List Title" subtitle="List subtitle" leadingIcon={faHouse} />
        <ListItem title="List Title" subtitle="List subtitle" leadingIcon={faUser} />
        <ListItem title="List Title" subtitle="List subtitle" leadingIcon={faCog} />
      </ListGroup>
    </div>
  ),
}

// ── With avatars ──────────────────────────────────────────────────────────────

export const WithAvatars: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <ListGroup>
        <ListItem title="Alice Baker" subtitle="alice@example.com" leadingAvatar={{ type: 'initials', initials: 'AB' }} interactive />
        <ListItem title="Carlos Díaz" subtitle="carlos@example.com" leadingAvatar={{ type: 'initials', initials: 'CD' }} interactive />
        <ListItem title="Eve Foster" subtitle="eve@example.com" leadingAvatar={{ type: 'initials', initials: 'EF' }} interactive />
      </ListGroup>
    </div>
  ),
}

// ── With disabled item ────────────────────────────────────────────────────────

export const WithDisabledItem: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <ListGroup>
        <ListItem title="Home" subtitle="Go to home" leadingIcon={faHouse} interactive />
        <ListItem title="Profile" subtitle="View profile" leadingIcon={faUser} interactive />
        <ListItem title="Delete" subtitle="Not available" leadingIcon={faTrash} interactive disabled />
      </ListGroup>
    </div>
  ),
}
