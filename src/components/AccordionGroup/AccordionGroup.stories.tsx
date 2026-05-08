import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { faUser, faGear, faBell } from '@fortawesome/free-solid-svg-icons'
import { AccordionGroup } from './AccordionGroup'
import { AccordionItem } from '../Accordion/Accordion'

const BODY_TEXT =
  'Accordion content lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.'

const meta: Meta<typeof AccordionGroup> = {
  title: 'Data Display/AccordionGroup',
  component: AccordionGroup,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div>
      <AccordionGroup>
        <AccordionItem title="Account settings" subtitle="Manage your profile" icon={faUser}>
          {BODY_TEXT}
        </AccordionItem>
        <AccordionItem title="Notifications" subtitle="Email and push preferences" icon={faBell}>
          {BODY_TEXT}
        </AccordionItem>
        <AccordionItem title="Appearance" subtitle="Theme and display options" icon={faGear}>
          {BODY_TEXT}
        </AccordionItem>
      </AccordionGroup>
    </div>
  ),
}

export const WithDisabledItem: Story = {
  render: () => (
    <div>
      <AccordionGroup>
        <AccordionItem title="Account settings" subtitle="Manage your profile" icon={faUser}>
          {BODY_TEXT}
        </AccordionItem>
        <AccordionItem title="Notifications" subtitle="Email and push preferences" icon={faBell} disabled>
          {BODY_TEXT}
        </AccordionItem>
        <AccordionItem title="Appearance" subtitle="Theme and display options" icon={faGear}>
          {BODY_TEXT}
        </AccordionItem>
      </AccordionGroup>
    </div>
  ),
}

export const Exclusive: Story = {
  render: () => (
    <div>
      <AccordionGroup exclusive>
        <AccordionItem title="Account settings" subtitle="Manage your profile" icon={faUser}>
          {BODY_TEXT}
        </AccordionItem>
        <AccordionItem title="Notifications" subtitle="Email and push preferences" icon={faBell}>
          {BODY_TEXT}
        </AccordionItem>
        <AccordionItem title="Appearance" subtitle="Theme and display options" icon={faGear}>
          {BODY_TEXT}
        </AccordionItem>
      </AccordionGroup>
    </div>
  ),
}

export const WithExpandedItem: Story = {
  render: () => (
    <div>
      <AccordionGroup>
        <AccordionItem title="Account settings" subtitle="Manage your profile" icon={faUser} defaultExpanded>
          {BODY_TEXT}
        </AccordionItem>
        <AccordionItem title="Notifications" subtitle="Email and push preferences" icon={faBell}>
          {BODY_TEXT}
        </AccordionItem>
        <AccordionItem title="Appearance" subtitle="Theme and display options" icon={faGear}>
          {BODY_TEXT}
        </AccordionItem>
      </AccordionGroup>
    </div>
  ),
}
