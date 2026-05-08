import React, { useState } from 'react'
import type { Meta, StoryObj, StoryFn } from '@storybook/react-vite'
import { Button } from '../Button/Button'
import { Dialog } from './Dialog'

// CSS transform scopes position:fixed children to this container
const withBoundedScrim = (Story: StoryFn) => (
  <div style={{ height: '400px', transform: 'translateZ(0)', overflow: 'hidden' }}>
    <Story />
  </div>
)

const SAMPLE_CONTENT =
  'This action cannot be undone. Please confirm you want to continue, or cancel to go back.'

const meta: Meta<typeof Dialog> = {
  title: 'Overlay/Dialog',
  component: Dialog,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  args: {
    open: true,
    title: 'Dialog title',
    subtitle: 'Optional dialog subtitle',
    content: SAMPLE_CONTENT,
    dismissible: true,
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ── Static variants (open=true for docs) ─────────────────────────────────────

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
    <Dialog open title="Custom content" subtitle="Children slot example" dismissible>
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
    </Dialog>
  ),
}

// ── Sizes ─────────────────────────────────────────────────────────────────────

export const SizeXS: Story = {
  decorators: [withBoundedScrim],
  args: { size: 'xs' },
}

export const SizeSM: Story = {
  decorators: [withBoundedScrim],
  args: { size: 'sm' },
}

export const SizeMD: Story = {
  decorators: [withBoundedScrim],
  args: { size: 'md' },
}

export const SizeLG: Story = {
  decorators: [withBoundedScrim],
  args: { size: 'lg' },
}

export const SizeXL: Story = {
  decorators: [withBoundedScrim],
  args: { size: 'xl' },
}

// ── Interactive (open/close state) ────────────────────────────────────────────

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
          Open dialog
        </Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Dialog title"
          subtitle="Optional dialog subtitle"
          content={SAMPLE_CONTENT}
          primaryAction={{ label: 'Confirm', onClick: () => setOpen(false) }}
          secondaryAction={{ label: 'Cancel', onClick: () => setOpen(false) }}
        />
      </div>
    )
  },
}
