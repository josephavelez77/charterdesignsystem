import type { Meta, StoryObj } from '@storybook/react'
import { faUser, faGear, faShield } from '@fortawesome/free-solid-svg-icons'
import { Avatar } from './Avatar'

const SAMPLE_IMAGE = 'https://i.pravatar.cc/64'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    type: 'initials',
    size: 'default',
    initials: 'AB',
  },
  argTypes: {
    type: { control: 'select', options: ['initials', 'icon', 'image'] },
    size: { control: 'select', options: ['default', 'small'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ── Initials ──────────────────────────────────────────────────────────────────

export const InitialsDefault: Story = {
  args: { type: 'initials', size: 'default', initials: 'AB' },
}

export const InitialsSmall: Story = {
  args: { type: 'initials', size: 'small', initials: 'AB' },
}

// ── Icon ──────────────────────────────────────────────────────────────────────

export const IconDefault: Story = {
  args: { type: 'icon', size: 'default', icon: faUser },
}

export const IconSmall: Story = {
  args: { type: 'icon', size: 'small', icon: faUser },
}

// ── Image ─────────────────────────────────────────────────────────────────────

export const ImageDefault: Story = {
  args: { type: 'image', size: 'default', src: SAMPLE_IMAGE, alt: 'User avatar' },
}

export const ImageSmall: Story = {
  args: { type: 'image', size: 'small', src: SAMPLE_IMAGE, alt: 'User avatar' },
}

// ── All variants ──────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Avatar type="initials" size="default" initials="JV" />
        <Avatar type="icon" size="default" icon={faUser} />
        <Avatar type="icon" size="default" icon={faGear} />
        <Avatar type="icon" size="default" icon={faShield} />
        <Avatar type="image" size="default" src={SAMPLE_IMAGE} alt="User" />
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Avatar type="initials" size="small" initials="JV" />
        <Avatar type="icon" size="small" icon={faUser} />
        <Avatar type="icon" size="small" icon={faGear} />
        <Avatar type="icon" size="small" icon={faShield} />
        <Avatar type="image" size="small" src={SAMPLE_IMAGE} alt="User" />
      </div>
    </div>
  ),
}
