import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: { defaultChecked: false },
}

export const On: Story = {
  args: { checked: true },
}

export const Off: Story = {
  args: { checked: false },
}

export const DisabledOff: Story = {
  args: { checked: false, disabled: true },
  name: 'Disabled (off)',
}

export const DisabledOn: Story = {
  args: { checked: true, disabled: true },
  name: 'Disabled (on)',
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <Switch checked={false} onChange={() => {}} />
        <span style={{ color: '#fafafa', fontSize: 14, fontFamily: 'Inter' }}>Rest · off</span>
      </div>
      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <Switch checked={true} onChange={() => {}} />
        <span style={{ color: '#fafafa', fontSize: 14, fontFamily: 'Inter' }}>Rest · on</span>
      </div>
      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <Switch checked={false} disabled />
        <span style={{ color: '#737373', fontSize: 14, fontFamily: 'Inter' }}>Disabled · off</span>
      </div>
      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <Switch checked={true} disabled />
        <span style={{ color: '#737373', fontSize: 14, fontFamily: 'Inter' }}>Disabled · on</span>
      </div>
    </div>
  ),
}
