import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'Data Display/Divider',
  component: Divider,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <span style={{ color: 'var(--text-color-themeable-primary)' }}>Content above</span>
      <Divider />
      <span style={{ color: 'var(--text-color-themeable-primary)' }}>Content below</span>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'stretch', gap: '16px', height: '48px' }}>
      <span style={{ color: 'var(--text-color-themeable-primary)' }}>Left</span>
      <Divider orientation="vertical" />
      <span style={{ color: 'var(--text-color-themeable-primary)' }}>Right</span>
    </div>
  ),
}

export const InList: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', width: 240 }}>
      {['Item one', 'Item two', 'Item three', 'Item four'].map((item, i, arr) => (
        <React.Fragment key={item}>
          <div style={{ padding: '12px 0', color: 'var(--text-color-themeable-primary)', fontSize: 14 }}>
            {item}
          </div>
          {i < arr.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  ),
}

export const InToolbar: Story = {
  render: () => (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', height: '40px' }}>
      <span style={{ color: 'var(--text-color-themeable-primary)', fontSize: 14 }}>File</span>
      <Divider orientation="vertical" />
      <span style={{ color: 'var(--text-color-themeable-primary)', fontSize: 14 }}>Edit</span>
      <Divider orientation="vertical" />
      <span style={{ color: 'var(--text-color-themeable-primary)', fontSize: 14 }}>View</span>
    </div>
  ),
}
