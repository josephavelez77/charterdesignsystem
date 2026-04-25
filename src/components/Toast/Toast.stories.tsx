import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from './Toast'
import { Button } from '../Button/Button'

const MESSAGE = 'Toast content lorem ipsum dolor sit amet consectetur adipiscing elit.'

const meta = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '480px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    urgency: {
      control: 'select',
      options: ['error', 'warning', 'success', 'information', 'none'],
    },
    duration: { control: { type: 'number', min: 0, step: 500 } },
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Error: Story = {
  args: { urgency: 'error', children: MESSAGE, duration: 0 },
}

export const Warning: Story = {
  args: { urgency: 'warning', children: MESSAGE, duration: 0 },
}

export const Success: Story = {
  args: { urgency: 'success', children: MESSAGE, duration: 0 },
}

export const Information: Story = {
  args: { urgency: 'information', children: MESSAGE, duration: 0 },
}

export const None: Story = {
  args: { urgency: 'none', children: MESSAGE, duration: 0 },
}

export const WithAction: Story = {
  args: { urgency: 'error', children: 'Item deleted.', action: 'Undo', duration: 0 },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 480 }}>
      <Toast urgency="error" action="Undo" duration={0}>{MESSAGE}</Toast>
      <Toast urgency="warning" action="Undo" duration={0}>{MESSAGE}</Toast>
      <Toast urgency="success" action="Undo" duration={0}>{MESSAGE}</Toast>
      <Toast urgency="information" action="Undo" duration={0}>{MESSAGE}</Toast>
      <Toast urgency="none" action="Undo" duration={0}>{MESSAGE}</Toast>
    </div>
  ),
}

// ── Interactive ───────────────────────────────────────────────────────────────

type InteractiveProps = { urgency: Toast['urgency']; duration: number }

const InteractiveToast = ({ urgency = 'success', duration = 5000 }: {
  urgency?: 'error' | 'warning' | 'success' | 'information' | 'none'
  duration?: number
}) => {
  const [visible, setVisible] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, minHeight: 200, justifyContent: 'center' }}>
      <Button
        variant="brandPrimary"
        onClick={() => setVisible(true)}
        disabled={visible}
      >
        Show Toast
      </Button>
      <p style={{ margin: 0, fontSize: 12, opacity: 0.5 }}>
        Dismisses after {duration / 1000}s
      </p>

      {visible && (
        <div style={{
          position: 'fixed',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 420,
          zIndex: 100,
        }}>
          <Toast
            urgency={urgency}
            action="Undo"
            duration={duration}
            onDismiss={() => setVisible(false)}
          >
            File uploaded successfully.
          </Toast>
        </div>
      )}
    </div>
  )
}

export const Interactive: Story = {
  parameters: { layout: 'centered' },
  argTypes: {
    urgency: {
      control: 'select',
      options: ['error', 'warning', 'success', 'information', 'none'],
    },
    duration: { control: { type: 'number', min: 1000, step: 500 } },
  },
  args: {
    urgency: 'success',
    duration: 5000,
  },
  render: (args) => (
    <InteractiveToast urgency={args.urgency} duration={args.duration} />
  ),
}
