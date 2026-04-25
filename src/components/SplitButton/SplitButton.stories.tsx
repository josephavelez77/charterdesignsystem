import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SplitButton } from './SplitButton'

const meta: Meta<typeof SplitButton> = {
  title: 'Buttons/SplitButton',
  component: SplitButton,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['brandPrimary', 'brandSecondary', 'neutral'] },
    emphasis: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const secondaryItems = [
  { label: 'Secondary action' },
  { label: 'Another action' },
  { label: 'Third action' },
]

// ── brandPrimary ──────────────────────────────────────────────────────────────

export const BrandPrimaryPrimary: Story = {
  args: { label: 'Primary action', items: secondaryItems, variant: 'brandPrimary', emphasis: 'primary' },
}

export const BrandPrimarySecondary: Story = {
  args: { label: 'Primary action', items: secondaryItems, variant: 'brandPrimary', emphasis: 'secondary' },
}

export const BrandPrimaryTertiary: Story = {
  args: { label: 'Primary action', items: secondaryItems, variant: 'brandPrimary', emphasis: 'tertiary' },
}

// ── brandSecondary ────────────────────────────────────────────────────────────

export const BrandSecondaryPrimary: Story = {
  args: { label: 'Primary action', items: secondaryItems, variant: 'brandSecondary', emphasis: 'primary' },
}

export const BrandSecondarySecondary: Story = {
  args: { label: 'Primary action', items: secondaryItems, variant: 'brandSecondary', emphasis: 'secondary' },
}

export const BrandSecondaryTertiary: Story = {
  args: { label: 'Primary action', items: secondaryItems, variant: 'brandSecondary', emphasis: 'tertiary' },
}

// ── neutral ───────────────────────────────────────────────────────────────────

export const NeutralPrimary: Story = {
  args: { label: 'Primary action', items: secondaryItems, variant: 'neutral', emphasis: 'primary' },
}

export const NeutralSecondary: Story = {
  args: { label: 'Primary action', items: secondaryItems, variant: 'neutral', emphasis: 'secondary' },
}

export const NeutralTertiary: Story = {
  args: { label: 'Primary action', items: secondaryItems, variant: 'neutral', emphasis: 'tertiary' },
}

// ── Disabled ──────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  args: { label: 'Primary action', items: secondaryItems, variant: 'brandPrimary', emphasis: 'primary', disabled: true },
}

// ── All variants ──────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      {(['brandPrimary', 'brandSecondary', 'neutral'] as const).map((variant) =>
        (['primary', 'secondary', 'tertiary'] as const).map((emphasis) => (
          <SplitButton
            key={`${variant}-${emphasis}`}
            label="Primary action"
            items={secondaryItems}
            variant={variant}
            emphasis={emphasis}
          />
        ))
      )}
    </div>
  ),
}
