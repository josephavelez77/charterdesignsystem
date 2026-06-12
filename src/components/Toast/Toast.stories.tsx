import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
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
  args: { urgency: 'error', message: MESSAGE, duration: 0 },
}

export const Warning: Story = {
  args: { urgency: 'warning', message: MESSAGE, duration: 0 },
}

export const Success: Story = {
  args: { urgency: 'success', message: MESSAGE, duration: 0 },
}

export const Information: Story = {
  args: { urgency: 'information', message: MESSAGE, duration: 0 },
}

export const None: Story = {
  args: { urgency: 'none', message: MESSAGE, duration: 0 },
}

export const WithAction: Story = {
  args: { urgency: 'error', message: 'Item deleted.', action: 'Undo', duration: 0 },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 480 }}>
      <Toast urgency="error" message={MESSAGE} action="Undo" duration={0} />
      <Toast urgency="warning" message={MESSAGE} action="Undo" duration={0} />
      <Toast urgency="success" message={MESSAGE} action="Undo" duration={0} />
      <Toast urgency="information" message={MESSAGE} action="Undo" duration={0} />
      <Toast urgency="none" message={MESSAGE} action="Undo" duration={0} />
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
            message="File uploaded successfully."
            action="Undo"
            duration={duration}
            onDismiss={() => setVisible(false)}
          />
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
