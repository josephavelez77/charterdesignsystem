import type { Meta, StoryObj } from '@storybook/react'
import { faGear, faTrash, faDownload, faEye } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from './Tooltip'
import { IconButton } from '../IconButton/IconButton'
import { Button } from '../Button/Button'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    content: 'Tooltip text',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: 'Tooltip text',
  },
  render: (args) => (
    <Tooltip {...args}>
      <IconButton icon={faGear} aria-label="Settings" variant="neutral" />
    </Tooltip>
  ),
}

export const OnIconButton: Story = {
  args: { content: 'Show password' },
  render: (args) => (
    <Tooltip {...args}>
      <IconButton icon={faEye} aria-label="Show password" variant="neutral" />
    </Tooltip>
  ),
}

export const OnButton: Story = {
  args: { content: 'Download your files' },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="brandPrimary">Download</Button>
    </Tooltip>
  ),
}

export const LongContent: Story = {
  args: { content: 'This is a longer tooltip that explains what this action does in more detail' },
  render: (args) => (
    <Tooltip {...args}>
      <IconButton icon={faDownload} aria-label="Download" variant="brandPrimary" />
    </Tooltip>
  ),
}

export const MultipleTooltips: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Tooltip content="Settings">
        <IconButton icon={faGear} aria-label="Settings" variant="neutral" />
      </Tooltip>
      <Tooltip content="Delete item">
        <IconButton icon={faTrash} aria-label="Delete" variant="neutral" />
      </Tooltip>
      <Tooltip content="Download">
        <IconButton icon={faDownload} aria-label="Download" variant="brandPrimary" />
      </Tooltip>
    </div>
  ),
}
