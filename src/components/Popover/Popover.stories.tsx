import type { Meta, StoryObj } from '@storybook/react'
import { faGear, faCircleInfo, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { Popover } from './Popover'
import { IconButton } from '../IconButton/IconButton'
import { Button } from '../Button/Button'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Popover Label',
    content: 'Complex tooltip content lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.',
    placement: 'bottom',
  },
  render: (args) => (
    <Popover {...args}>
      <IconButton icon={faCircleInfo} aria-label="More info" variant="neutral" />
    </Popover>
  ),
}

export const OpenFromButton: Story = {
  args: {
    label: 'Settings',
    content: 'Adjust your preferences here. Changes are saved automatically.',
    placement: 'bottom',
  },
  render: (args) => (
    <Popover {...args}>
      <Button variant="brandPrimary">Open popover</Button>
    </Popover>
  ),
}

export const PlacementTop: Story = {
  args: {
    label: 'Popover Label',
    content: 'This popover opens above the trigger element.',
    placement: 'top',
  },
  render: (args) => (
    <div style={{ marginTop: 120 }}>
      <Popover {...args}>
        <IconButton icon={faGear} aria-label="Settings" variant="neutral" />
      </Popover>
    </div>
  ),
}

export const PlacementRight: Story = {
  args: {
    label: 'Popover Label',
    content: 'This popover opens to the right of the trigger.',
    placement: 'right',
  },
  render: (args) => (
    <Popover {...args}>
      <IconButton icon={faEllipsisVertical} aria-label="More options" variant="neutral" />
    </Popover>
  ),
}

export const PlacementLeft: Story = {
  args: {
    label: 'Popover Label',
    content: 'This popover opens to the left of the trigger.',
    placement: 'left',
  },
  render: (args) => (
    <div style={{ marginLeft: 260 }}>
      <Popover {...args}>
        <IconButton icon={faEllipsisVertical} aria-label="More options" variant="neutral" />
      </Popover>
    </div>
  ),
}

export const RichContent: Story = {
  args: {
    label: 'Keyboard shortcuts',
    placement: 'bottom',
  },
  render: (args) => (
    <Popover
      {...args}
      content={
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span>⌘K — Open command palette</span>
          <span>⌘S — Save</span>
          <span>⌘Z — Undo</span>
        </div>
      }
    >
      <Button variant="brandSecondary">Shortcuts</Button>
    </Popover>
  ),
}
