import type { Meta, StoryObj } from '@storybook/react-vite'
import { SwitchItem } from './SwitchItem'

const meta: Meta<typeof SwitchItem> = {
  title: 'Inputs/SwitchItem',
  component: SwitchItem,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    label: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof SwitchItem>

export const Default: Story = {
  args: { label: 'Switch label', defaultChecked: false },
}

export const Checked: Story = {
  args: { label: 'Switch label', checked: true },
}

export const WithRequired: Story = {
  args: { label: 'Switch label', required: true },
}

export const Disabled: Story = {
  args: { label: 'Switch label', disabled: true },
}

export const DisabledChecked: Story = {
  args: { label: 'Switch label', checked: true, disabled: true },
  name: 'Disabled (on)',
}
