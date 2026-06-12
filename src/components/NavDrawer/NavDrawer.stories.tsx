import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  faHouse,
  faChartBar,
  faGear,
  faUsers,
  faFileLines,
  faBell,
} from '@fortawesome/free-solid-svg-icons'
import { NavDrawer } from './NavDrawer'
import { GlobalToolbar } from '../GlobalToolbar/GlobalToolbar'
import type { NavItemConfig } from './NavDrawer'

const meta: Meta<typeof NavDrawer> = {
  title: 'Navigation/NavDrawer',
  component: NavDrawer,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
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
  render: (args) => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <NavDrawer {...args} />
    </div>
  ),
  args: { appName: 'Charter', items: navItems },
}

export const Collapsed: Story = {
  render: (args) => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <NavDrawer {...args} />
    </div>
  ),
  args: { appName: 'Charter', items: navItems, defaultCollapsed: true },
}

export const WithToolbar: Story = {
  render: (args) => {
    const [collapsed, setCollapsed] = useState(false)
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <GlobalToolbar
          onMenuToggle={() => setCollapsed((v) => !v)}
          avatarInitials="JV"
        />
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          <NavDrawer
            {...args}
            collapsed={collapsed}
            onCollapsedChange={setCollapsed}
          />
          <main style={{ flex: 1, padding: '24px', overflow: 'auto' }}>
            <p style={{ color: 'var(--text-color-themeable-secondary)', fontFamily: 'var(--text-family-static-body)' }}>
              Main content area
            </p>
          </main>
        </div>
      </div>
    )
  },
  args: { appName: 'Charter', items: navItems },
}
