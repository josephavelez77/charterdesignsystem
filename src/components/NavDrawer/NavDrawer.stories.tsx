import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  faHouse,
  faChartBar,
  faGear,
  faUsers,
  faFileLines,
  faBell,
} from '@fortawesome/free-solid-svg-icons'
import { NavDrawer } from './NavDrawer'
import type { NavItemConfig } from './NavDrawer'

const meta: Meta<typeof NavDrawer> = {
  title: 'Navigation/NavDrawer',
  component: NavDrawer,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

const navItems: NavItemConfig[] = [
  { label: 'Dashboard', icon: faHouse, selected: true },
  {
    label: 'Analytics',
    icon: faChartBar,
    children: [
      { label: 'Overview' },
      { label: 'Reports' },
      { label: 'Metrics' },
    ],
  },
  {
    label: 'Users',
    icon: faUsers,
    children: [
      { label: 'All users' },
      { label: 'Roles', selected: true },
      { label: 'Invitations' },
    ],
  },
  { label: 'Documents', icon: faFileLines },
  { label: 'Notifications', icon: faBell },
  { label: 'Settings', icon: faGear },
]

export const Default: Story = {
  args: { appName: 'base', items: navItems },
}

export const Collapsed: Story = {
  args: { appName: 'base', items: navItems, defaultCollapsed: true },
}

export const WithSelectedChild: Story = {
  args: {
    appName: 'base',
    items: [
      { label: 'Dashboard', icon: faHouse },
      {
        label: 'Analytics',
        icon: faChartBar,
        children: [
          { label: 'Overview' },
          { label: 'Reports', selected: true },
          { label: 'Metrics' },
        ],
      },
      { label: 'Settings', icon: faGear },
    ],
  },
}
