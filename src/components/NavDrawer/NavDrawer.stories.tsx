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

// Stand-in for a consumer's own brand assets — in an app these would usually be <img src="/logo.svg" />.
const AcmeMark = () => (
  <svg viewBox="0 0 40 40" width="40" height="40" role="img" aria-label="Acme">
    <rect width="40" height="40" rx="8" fill="var(--border-color-static-brand-secondary)" />
    <path d="M20 9 31 31H26.5L24.3 26.5H15.7L13.5 31H9L20 9ZM17.4 22.8H22.6L20 17.4Z" fill="var(--container-color-themeable-primary)" />
  </svg>
)

const AcmeWordmark = () => (
  <svg viewBox="0 0 160 40" width="160" height="40" role="img" aria-label="Acme Ops">
    <rect width="40" height="40" rx="8" fill="var(--border-color-static-brand-secondary)" />
    <path d="M20 9 31 31H26.5L24.3 26.5H15.7L13.5 31H9L20 9ZM17.4 22.8H22.6L20 17.4Z" fill="var(--container-color-themeable-primary)" />
    <text
      x="52"
      y="27"
      fill="var(--text-color-themeable-primary)"
      fontFamily="var(--text-family-static-headline)"
      fontSize="22"
    >
      Acme Ops
    </text>
  </svg>
)

/**
 * Swap in your own brand with `logo` (expanded) and `logoCollapsed` (collapsed).
 * Toggle the drawer with the `collapsed` control to see both.
 */
export const CustomLogo: Story = {
  render: (args) => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <NavDrawer {...args} />
    </div>
  ),
  args: {
    appName: 'Acme Ops',
    items: navItems,
    logo: <AcmeWordmark />,
    logoCollapsed: <AcmeMark />,
  },
}

export const WithToolbar: Story = {
  render: (args) => {
    const [collapsed, setCollapsed] = useState(false)
    return (
      <div style={{ height: '100vh', display: 'flex', overflow: 'hidden' }}>
        <NavDrawer
          {...args}
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
        />
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
          <GlobalToolbar
            onMenuToggle={() => setCollapsed((v) => !v)}
            avatarInitials="JV"
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
