import React, { useState } from 'react'
import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Button } from '../Button/Button'
import { Drawer } from './Drawer'

const SAMPLE_CONTENT =
  'Drawer content lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.'

// CSS transform scopes position:fixed children to this container
const withBoundedScrim = (Story: StoryFn) => (
  <div style={{ height: '600px', transform: 'translateZ(0)', overflow: 'hidden' }}>
    <Story />
  </div>
)

const meta: Meta<typeof Drawer> = {
  title: 'Overlay/Drawer',
  component: Drawer,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  args: {
    open: true,
    title: 'Drawer title',
    subtitle: 'Optional drawer subtitle',
    content: SAMPLE_CONTENT,
    dismissible: true,
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ── Static variants ───────────────────────────────────────────────────────────

export const Default: Story = {
  decorators: [withBoundedScrim],
}

export const TitleOnly: Story = {
  decorators: [withBoundedScrim],
  args: {
    subtitle: undefined,
  },
}

export const WithActions: Story = {
  decorators: [withBoundedScrim],
  args: {
    primaryAction: { label: 'Confirm' },
    secondaryAction: { label: 'Cancel' },
  },
}

export const NoDismiss: Story = {
  decorators: [withBoundedScrim],
  args: {
    dismissible: false,
    primaryAction: { label: 'Confirm' },
    secondaryAction: { label: 'Cancel' },
  },
}

export const WithCustomContent: Story = {
  decorators: [withBoundedScrim],
  render: () => (
    <Drawer open title="Custom content" subtitle="Children slot example" dismissible>
      <ul
        style={{
          margin: 0,
          paddingLeft: '1.25rem',
          color: 'var(--text-color-themeable-primary)',
          fontFamily: 'var(--text-family-static-body)',
          fontSize: 'var(--text-size-static-body1)',
          lineHeight: 'var(--text-line-static-body1)',
        }}
      >
        <li>First item in the list</li>
        <li>Second item in the list</li>
        <li>Third item in the list</li>
      </ul>
    </Drawer>
  ),
}

// ── Interactive ───────────────────────────────────────────────────────────────

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Button variant="brandPrimary" emphasis="primary" onClick={() => setOpen(true)}>
          Open drawer
        </Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="Drawer title"
          subtitle="Optional drawer subtitle"
          content={SAMPLE_CONTENT}
          primaryAction={{ label: 'Confirm', onClick: () => setOpen(false) }}
          secondaryAction={{ label: 'Cancel', onClick: () => setOpen(false) }}
        />
      </div>
    )
  },
}
