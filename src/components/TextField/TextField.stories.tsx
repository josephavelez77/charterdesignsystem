import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { faHouse, faEnvelope, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { TextField } from './TextField'

const meta = {
  title: 'Inputs/TextField',
  component: TextField,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '352px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

// ── Base states ───────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username or email address',
  },
}

export const WithValue: Story = {
  args: {
    label: 'Username',
    value: 'joseph.velez',
    readOnly: true,
  },
}

export const WithHint: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username or email address',
    hint: 'Use your company email address',
  },
}

export const WithError: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    error: 'Username is required',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    disabled: true,
  },
}

// ── With icons ────────────────────────────────────────────────────────────────

export const WithLeadingIcon: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    leadingIcon: faUser,
  },
}

export const WithTrailingIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    trailingIcon: faMagnifyingGlass,
  },
}

export const WithBothIcons: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter email address',
    leadingIcon: faEnvelope,
    trailingIcon: faEnvelope,
  },
}

export const WithIconsDisabled: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter email address',
    leadingIcon: faEnvelope,
    trailingIcon: faEnvelope,
    disabled: true,
  },
}

export const WithIconsError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter email address',
    leadingIcon: faEnvelope,
    trailingIcon: faEnvelope,
    error: 'Please enter a valid email address',
  },
}

// ── All states ────────────────────────────────────────────────────────────────

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 352 }}>
      <TextField label="Label" placeholder="Placeholder" leadingIcon={faHouse} trailingIcon={faHouse} hint="Helper text" />
      <TextField label="Label" placeholder="Placeholder" leadingIcon={faHouse} trailingIcon={faHouse} hint="Helper text" disabled />
      <TextField label="Label" placeholder="Placeholder" leadingIcon={faHouse} trailingIcon={faHouse} error="Helper text" />
    </div>
  ),
}
