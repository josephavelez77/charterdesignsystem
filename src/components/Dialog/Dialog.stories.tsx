import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button/Button'
import { Dialog } from './Dialog'

const SAMPLE_CONTENT =
  'This action cannot be undone. Please confirm you want to continue, or cancel to go back.'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
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

export const Default: Story = {}

export const TitleOnly: Story = {
  args: {
    subtitle: undefined,
  },
}

export const WithActions: Story = {
  args: {
    primaryAction: { label: 'Confirm' },
    secondaryAction: { label: 'Cancel' },
  },
}

export const NoDismiss: Story = {
  args: {
    dismissible: false,
    primaryAction: { label: 'Confirm' },
    secondaryAction: { label: 'Cancel' },
  },
}

export const WithCustomContent: Story = {
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
