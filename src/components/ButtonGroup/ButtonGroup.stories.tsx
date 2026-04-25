import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGroup } from './ButtonGroup'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Buttons/ButtonGroup',
  component: ButtonGroup,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['brandPrimary', 'brandSecondary', 'neutral'] },
    emphasis: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const threeItems = [
  { label: 'Button label' },
  { label: 'Button label' },
  { label: 'Button label' },
]

const fiveItems = [
  { label: 'Button label' },
  { label: 'Button label' },
  { label: 'Button label' },
  { label: 'Button label' },
  { label: 'Button label' },
]

// ── brandPrimary ──────────────────────────────────────────────────────────────

export const BrandPrimaryPrimary: Story = {
  args: { items: threeItems, variant: 'brandPrimary', emphasis: 'primary' },
}

export const BrandPrimarySecondary: Story = {
  args: { items: threeItems, variant: 'brandPrimary', emphasis: 'secondary' },
}

export const BrandPrimaryTertiary: Story = {
  args: { items: threeItems, variant: 'brandPrimary', emphasis: 'tertiary' },
}

// ── brandSecondary ────────────────────────────────────────────────────────────

export const BrandSecondaryPrimary: Story = {
  args: { items: threeItems, variant: 'brandSecondary', emphasis: 'primary' },
}

export const BrandSecondarySecondary: Story = {
  args: { items: threeItems, variant: 'brandSecondary', emphasis: 'secondary' },
}

export const BrandSecondaryTertiary: Story = {
  args: { items: threeItems, variant: 'brandSecondary', emphasis: 'tertiary' },
}

// ── neutral ───────────────────────────────────────────────────────────────────

export const NeutralPrimary: Story = {
  args: { items: threeItems, variant: 'neutral', emphasis: 'primary' },
}

export const NeutralSecondary: Story = {
  args: { items: threeItems, variant: 'neutral', emphasis: 'secondary' },
}

export const NeutralTertiary: Story = {
  args: { items: threeItems, variant: 'neutral', emphasis: 'tertiary' },
}

// ── Counts ────────────────────────────────────────────────────────────────────

export const TwoButtons: Story = {
  args: { items: [{ label: 'Button label' }, { label: 'Button label' }], variant: 'brandPrimary', emphasis: 'primary' },
}

export const FiveButtons: Story = {
  args: { items: fiveItems, variant: 'brandPrimary', emphasis: 'primary' },
}

// ── Disabled ──────────────────────────────────────────────────────────────────

export const WithDisabled: Story = {
  args: {
    items: [
      { label: 'Button label' },
      { label: 'Disabled', disabled: true },
      { label: 'Button label' },
    ],
    variant: 'brandPrimary',
    emphasis: 'primary',
  },
}

// ── All variants ──────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      {(['brandPrimary', 'brandSecondary', 'neutral'] as const).map((variant) =>
        (['primary', 'secondary', 'tertiary'] as const).map((emphasis) => (
          <ButtonGroup key={`${variant}-${emphasis}`} items={threeItems} variant={variant} emphasis={emphasis} />
        ))
      )}
    </div>
  ),
}
