import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TabGroup } from './TabGroup'

const meta: Meta<typeof TabGroup> = {
  title: 'Navigation/TabGroup',
  component: TabGroup,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const twoTabs = [{ label: 'Tab Label' }, { label: 'Tab Label' }]
const threeTabs = [...twoTabs, { label: 'Tab Label' }]
const fourTabs = [...threeTabs, { label: 'Tab Label' }]
const fiveTabs = [...fourTabs, { label: 'Tab Label' }]

export const TwoTabs: Story = { args: { tabs: twoTabs } }
export const ThreeTabs: Story = { args: { tabs: threeTabs } }
export const FourTabs: Story = { args: { tabs: fourTabs } }
export const FiveTabs: Story = { args: { tabs: fiveTabs } }

export const WithDisabled: Story = {
  args: {
    tabs: [
      { label: 'Overview' },
      { label: 'Details' },
      { label: 'History', disabled: true },
      { label: 'Settings' },
    ],
  },
}

export const Interactive: Story = {
  render: () => {
    const [active, setActive] = useState(0)
    const tabs = [
      { label: 'Overview' },
      { label: 'Details' },
      { label: 'Activity' },
      { label: 'Settings', disabled: true },
    ]
    const content = ['Overview content', 'Details content', 'Activity content']

    return (
      <div>
        <TabGroup tabs={tabs} activeIndex={active} onChange={setActive} />
        <div style={{ padding: '24px', color: 'var(--text-color-themeable-primary)', fontFamily: 'var(--text-family-static-body)', fontSize: 'var(--text-size-static-body1)' }}>
          {content[active]}
        </div>
      </div>
    )
  },
}
