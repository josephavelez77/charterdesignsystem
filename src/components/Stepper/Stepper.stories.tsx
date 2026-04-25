import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Stepper } from './Stepper'

const meta: Meta<typeof Stepper> = {
  title: 'Navigation/Stepper',
  component: Stepper,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const fiveSteps = [
  { label: 'Step label' },
  { label: 'Step label' },
  { label: 'Step label' },
  { label: 'Step label' },
  { label: 'Step label' },
]

export const FirstStep: Story = {
  args: { steps: fiveSteps, activeStep: 0 },
}

export const MiddleStep: Story = {
  args: { steps: fiveSteps, activeStep: 2 },
}

export const LastStep: Story = {
  args: { steps: fiveSteps, activeStep: 4 },
}

export const TwoSteps: Story = {
  args: {
    steps: [{ label: 'Details' }, { label: 'Review' }],
    activeStep: 0,
  },
}

export const ThreeSteps: Story = {
  args: {
    steps: [{ label: 'Details' }, { label: 'Configure' }, { label: 'Review' }],
    activeStep: 1,
  },
}

// ── Interactive ───────────────────────────────────────────────────────────────

export const Interactive: Story = {
  render: () => {
    const [step, setStep] = useState(0)
    const steps = [
      { label: 'Account info' },
      { label: 'Preferences' },
      { label: 'Review' },
      { label: 'Confirm' },
    ]
    const content = [
      'Enter your account information.',
      'Set your preferences.',
      'Review your selections.',
      'Confirm and submit.',
    ]

    return (
      <div>
        <Stepper
          steps={steps}
          activeStep={step}
          onNext={() => setStep((s) => Math.min(s + 1, steps.length - 1))}
          onBack={() => setStep((s) => Math.max(s - 1, 0))}
          onCancel={() => setStep(0)}
          onDone={() => setStep(0)}
        />
        <div style={{ padding: '24px', color: 'var(--text-color-themeable-primary)', fontFamily: 'var(--text-family-static-body)', fontSize: 'var(--text-size-static-body1)' }}>
          {content[step]}
        </div>
      </div>
    )
  },
}
