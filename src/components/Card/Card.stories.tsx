import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const SAMPLE_IMAGE = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80'

const SAMPLE_CONTENT =
  'Card content lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    title: 'Card title',
    subtitle: 'Optional card subtitle',
    content: SAMPLE_CONTENT,
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ── Variants ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    title: 'Card title',
    subtitle: 'Optional card subtitle',
    content: SAMPLE_CONTENT,
  },
}

export const WithMedia: Story = {
  args: {
    title: 'Card title',
    subtitle: 'Optional card subtitle',
    content: SAMPLE_CONTENT,
    mediaSrc: SAMPLE_IMAGE,
    mediaAlt: 'Teacher reading with children',
  },
}

export const WithActions: Story = {
  args: {
    title: 'Card title',
    subtitle: 'Optional card subtitle',
    content: SAMPLE_CONTENT,
    primaryAction: { label: 'Confirm' },
    secondaryAction: { label: 'Cancel' },
  },
}

export const FullCard: Story = {
  args: {
    title: 'Card title',
    subtitle: 'Optional card subtitle',
    content: SAMPLE_CONTENT,
    mediaSrc: SAMPLE_IMAGE,
    mediaAlt: 'Teacher reading with children',
    primaryAction: { label: 'Confirm' },
    secondaryAction: { label: 'Cancel' },
  },
}

export const TitleOnly: Story = {
  args: {
    title: 'Card title',
    content: SAMPLE_CONTENT,
  },
}

export const WithCustomContent: Story = {
  render: () => (
    <Card
      title="Custom content"
      subtitle="Children slot example"
      primaryAction={{ label: 'Got it' }}
    >
      <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--text-color-themeable-primary)', fontFamily: 'var(--text-family-static-body)', fontSize: 'var(--text-size-static-body1)', lineHeight: 'var(--text-line-static-body1)' }}>
        <li>First item in the list</li>
        <li>Second item in the list</li>
        <li>Third item in the list</li>
      </ul>
    </Card>
  ),
}

// ── Grid layout example ───────────────────────────────────────────────────────

export const CardGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 472px)', gap: '16px' }}>
      <Card
        title="Mountain retreat"
        subtitle="Outdoor adventures"
        content="Explore breathtaking mountain trails and serene landscapes perfect for all skill levels."
        mediaSrc="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
        primaryAction={{ label: 'Book now' }}
        secondaryAction={{ label: 'Learn more' }}
      />
      <Card
        title="Ocean getaway"
        subtitle="Coastal escapes"
        content="Discover pristine beaches and crystal-clear waters for an unforgettable seaside experience."
        mediaSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
        primaryAction={{ label: 'Book now' }}
        secondaryAction={{ label: 'Learn more' }}
      />
    </div>
  ),
}
