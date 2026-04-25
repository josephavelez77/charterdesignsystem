import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { faHouse, faChevronRight, faStar, faTrash } from '@fortawesome/free-solid-svg-icons'
import { MenuItem } from './MenuItem'

const meta: Meta<typeof MenuItem> = {
  title: 'Data Display/MenuItem',
  component: MenuItem,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    label: 'Menu label',
  },
  argTypes: {
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ── States ────────────────────────────────────────────────────────────────────

export const Rest: Story = {
  args: { label: 'Menu label' },
}

export const WithLeadingIcon: Story = {
  args: { label: 'Menu label', leadingIcon: faHouse },
}

export const WithTrailingIcon: Story = {
  args: { label: 'Menu label', trailingIcon: faChevronRight },
}

export const WithBothIcons: Story = {
  args: { label: 'Menu label', leadingIcon: faHouse, trailingIcon: faChevronRight },
}

export const Selected: Story = {
  args: { label: 'Menu label', leadingIcon: faHouse, selected: true },
}

export const Disabled: Story = {
  args: { label: 'Menu label', leadingIcon: faHouse, disabled: true },
}

export const DisabledSelected: Story = {
  args: { label: 'Menu label', leadingIcon: faHouse, selected: true, disabled: true },
}

// ── All states ────────────────────────────────────────────────────────────────

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: 200 }}>
      <MenuItem label="Rest" />
      <MenuItem label="With leading icon" leadingIcon={faHouse} />
      <MenuItem label="With trailing icon" trailingIcon={faChevronRight} />
      <MenuItem label="Both icons" leadingIcon={faStar} trailingIcon={faChevronRight} />
      <MenuItem label="Selected" leadingIcon={faHouse} selected />
      <MenuItem label="Disabled" leadingIcon={faHouse} disabled />
      <MenuItem label="Disabled selected" leadingIcon={faTrash} selected disabled />
    </div>
  ),
}
