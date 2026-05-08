import type { Meta, StoryObj } from '@storybook/react-vite'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
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
import type { ButtonProps } from './Button'
import { Button } from './Button'
import { Icon } from '../Icon/Icon'

// ── Icon picker helpers ──────────────────────────────────────────────────────

const iconMap: Record<string, IconDefinition> = {
  house: faHouse,
  search: faMagnifyingGlass,
  plus: faPlus,
  xmark: faXmark,
  user: faUser,
  gear: faGear,
  arrowRight: faArrowRight,
  bell: faBell,
}

const iconOptions = ['—', ...Object.keys(iconMap)]

function resolveIcon(name?: string) {
  if (!name || name === '—') return undefined
  const def = iconMap[name]
  return def ? <Icon icon={def} size="small" /> : undefined
}

// ── Extended args type ───────────────────────────────────────────────────────

type ButtonStoryArgs = ButtonProps & {
  leadingIconName?: string
  trailingIconName?: string
}

// ── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<ButtonStoryArgs> = {
  title: 'Buttons/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  // Default render converts name args → Icon nodes for every story
  render: ({ leadingIconName, trailingIconName, ...args }) => (
    <Button
      {...args}
      leadingIcon={resolveIcon(leadingIconName)}
      trailingIcon={resolveIcon(trailingIconName)}
    />
  ),
  args: {
    leadingIconName: '—',
    trailingIconName: '—',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['brandPrimary', 'brandSecondary', 'neutral'],
    },
    emphasis: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    leadingIconName: {
      name: 'leadingIcon',
      control: 'select',
      options: iconOptions,
      table: { category: 'Icons' },
    },
    trailingIconName: {
      name: 'trailingIcon',
      control: 'select',
      options: iconOptions,
      table: { category: 'Icons' },
    },
    // Hide the raw ReactNode props from the controls table
    leadingIcon: { table: { disable: true } },
    trailingIcon: { table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ── Stories ──────────────────────────────────────────────────────────────────

export const Primary: Story = {
  args: { variant: 'brandPrimary', emphasis: 'primary', children: 'Button label' },
}

export const Secondary: Story = {
  args: { variant: 'brandPrimary', emphasis: 'secondary', children: 'Button label' },
}

export const Tertiary: Story = {
  args: { variant: 'brandPrimary', emphasis: 'tertiary', children: 'Button label' },
}

export const BrandSecondary: Story = {
  args: { variant: 'brandSecondary', emphasis: 'primary', children: 'Button label' },
}

export const Neutral: Story = {
  args: { variant: 'neutral', emphasis: 'primary', children: 'Button label' },
}

export const AllVariants: Story = {
  args: { children: 'Button label' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {(['brandPrimary', 'brandSecondary', 'neutral'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {(['primary', 'secondary', 'tertiary'] as const).map((emphasis) => (
            <Button key={emphasis} variant={variant} emphasis={emphasis}>
              {variant} / {emphasis}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
}

export const Loading: Story = {
  args: { variant: 'brandPrimary', emphasis: 'primary', loading: true, children: 'Loading' },
}

export const Disabled: Story = {
  args: { variant: 'brandPrimary', emphasis: 'primary', disabled: true, children: 'Disabled' },
}

export const FullWidth: Story = {
  args: { variant: 'brandPrimary', emphasis: 'primary', fullWidth: true, children: 'Full Width' },
  parameters: { layout: 'padded' },
}
