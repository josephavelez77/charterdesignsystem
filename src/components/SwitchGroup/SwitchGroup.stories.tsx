import type { Meta, StoryObj } from '@storybook/react'
import { SwitchGroup } from './SwitchGroup'
import { SwitchItem } from '../SwitchItem'

const meta: Meta<typeof SwitchGroup> = {
  title: 'Inputs/SwitchGroup',
  component: SwitchGroup,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SwitchGroup>

export const Vertical: Story = {
  args: { orientation: 'vertical', label: 'Preferences' },
  render: (args) => (
    <SwitchGroup {...args}>
      <SwitchItem label="Notifications" defaultChecked />
      <SwitchItem label="Dark mode" />
      <SwitchItem label="Auto-save" defaultChecked />
      <SwitchItem label="Analytics" disabled />
    </SwitchGroup>
  ),
}

export const Horizontal: Story = {
  args: { orientation: 'horizontal', label: 'Preferences' },
  render: (args) => (
    <SwitchGroup {...args}>
      <SwitchItem label="Notifications" defaultChecked />
      <SwitchItem label="Dark mode" />
      <SwitchItem label="Auto-save" defaultChecked />
    </SwitchGroup>
  ),
}

export const NoLabel: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <SwitchGroup {...args}>
      <SwitchItem label="Notifications" defaultChecked />
      <SwitchItem label="Dark mode" />
      <SwitchItem label="Analytics" disabled />
    </SwitchGroup>
  ),
}
