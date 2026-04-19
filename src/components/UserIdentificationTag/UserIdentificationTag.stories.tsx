import type { Meta, StoryObj } from '@storybook/react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { UserIdentificationTag } from './UserIdentificationTag'

const SAMPLE_IMAGE = 'https://i.pravatar.cc/64'

const meta: Meta<typeof UserIdentificationTag> = {
  title: 'Components/UserIdentificationTag',
  component: UserIdentificationTag,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    name: 'Jane Doe',
    userId: '#12345',
    avatarType: 'initials',
    avatarInitials: 'JD',
  },
  argTypes: {
    avatarType: { control: 'select', options: ['initials', 'icon', 'image'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const WithInitials: Story = {
  args: {
    name: 'Jane Doe',
    userId: '#12345',
    avatarType: 'initials',
    avatarInitials: 'JD',
  },
}

export const WithImage: Story = {
  args: {
    name: 'Jane Doe',
    userId: '#12345',
    avatarType: 'image',
    avatarSrc: SAMPLE_IMAGE,
  },
}

export const WithIcon: Story = {
  args: {
    name: 'Jane Doe',
    userId: '#12345',
    avatarType: 'icon',
    avatarIcon: faUser,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <UserIdentificationTag name="Jane Doe" userId="#12345" avatarType="initials" avatarInitials="JD" />
      <UserIdentificationTag name="Jane Doe" userId="#12345" avatarType="image" avatarSrc={SAMPLE_IMAGE} />
      <UserIdentificationTag name="Jane Doe" userId="#12345" avatarType="icon" avatarIcon={faUser} />
    </div>
  ),
}
