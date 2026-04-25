import type { Meta, StoryObj } from '@storybook/react'
import {
  faHouse,
  faMagnifyingGlass,
  faPlus,
  faXmark,
  faUser,
  faGear,
  faArrowRight,
  faBell,
} from '@fortawesome/free-solid-svg-icons'
import { Icon } from './Icon'

const meta = {
  title: 'Data Display/Icon',
  component: Icon,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ color: 'var(--text-color-themeable-primary)' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    icon: { control: false },
    size: {
      control: 'select',
      options: ['xs', 'small', 'medium', 'large', 'xl'],
    },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { icon: faHouse, size: 'medium' },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Icon icon={faHouse} size="xs" />
      <Icon icon={faHouse} size="small" />
      <Icon icon={faHouse} size="medium" />
      <Icon icon={faHouse} size="large" />
      <Icon icon={faHouse} size="xl" />
    </div>
  ),
}

export const Icons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Icon icon={faHouse} size="large" />
      <Icon icon={faMagnifyingGlass} size="large" />
      <Icon icon={faPlus} size="large" />
      <Icon icon={faXmark} size="large" />
      <Icon icon={faUser} size="large" />
      <Icon icon={faGear} size="large" />
      <Icon icon={faArrowRight} size="large" />
      <Icon icon={faBell} size="large" />
    </div>
  ),
}
