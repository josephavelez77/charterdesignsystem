import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { faHouse, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { TextArea } from './TextArea'

const meta = {
  title: 'Inputs/TextArea',
  component: TextArea,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '352px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a description...',
  },
}

export const WithValue: Story = {
  args: {
    label: 'Description',
    value: 'This is some example content that spans multiple lines in the textarea.',
    readOnly: true,
  },
}

export const WithHint: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself',
    hint: 'Max 500 characters',
  },
}

export const WithError: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a description',
    error: 'Description is required',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a description',
    disabled: true,
  },
}

export const WithLeadingIcon: Story = {
  args: {
    label: 'Notes',
    placeholder: 'Add your notes here...',
    leadingIcon: faUser,
  },
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 352 }}>
      <TextArea label="Label" placeholder="Placeholder" leadingIcon={faHouse} hint="Helper text" />
      <TextArea label="Label" placeholder="Placeholder" leadingIcon={faHouse} hint="Helper text" disabled />
      <TextArea label="Label" placeholder="Placeholder" leadingIcon={faHouse} error="Helper text" />
    </div>
  ),
}
