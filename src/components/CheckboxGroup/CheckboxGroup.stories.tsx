import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxGroup } from './CheckboxGroup'
import { Checkbox } from '../Checkbox/Checkbox'

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'radio', options: ['vertical', 'horizontal'] },
    label: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ── Vertical (default) ────────────────────────────────────────────────────────

export const Vertical: Story = {
  render: () => (
    <CheckboxGroup label="Options" orientation="vertical">
      <Checkbox label="Checkbox label" />
      <Checkbox label="Checkbox label" />
      <Checkbox label="Checkbox label" />
      <Checkbox label="Checkbox label" />
      <Checkbox label="Checkbox label" />
    </CheckboxGroup>
  ),
}

// ── Horizontal ────────────────────────────────────────────────────────────────

export const Horizontal: Story = {
  render: () => (
    <CheckboxGroup label="Options" orientation="horizontal">
      <Checkbox label="Checkbox label" />
      <Checkbox label="Checkbox label" />
      <Checkbox label="Checkbox label" />
      <Checkbox label="Checkbox label" />
      <Checkbox label="Checkbox label" />
    </CheckboxGroup>
  ),
}

// ── Without label ─────────────────────────────────────────────────────────────

export const WithoutGroupLabel: Story = {
  render: () => (
    <CheckboxGroup orientation="vertical">
      <Checkbox label="Checkbox label" />
      <Checkbox label="Checkbox label" />
      <Checkbox label="Checkbox label" />
    </CheckboxGroup>
  ),
}

// ── Without item labels ───────────────────────────────────────────────────────

export const WithoutItemLabels: Story = {
  render: () => (
    <CheckboxGroup orientation="horizontal">
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox disabled />
    </CheckboxGroup>
  ),
}

// ── With mixed states ─────────────────────────────────────────────────────────

export const WithMixedStates: Story = {
  render: () => (
    <CheckboxGroup label="Options" orientation="vertical">
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Unchecked" />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
    </CheckboxGroup>
  ),
}

// ── Interactive controlled ────────────────────────────────────────────────────

const OPTIONS = ['Option one', 'Option two', 'Option three', 'Option four']

export const ControlledVertical: Story = {
  render: () => {
    const [selected, setSelected] = useState<Set<string>>(new Set(['Option one']))

    const toggle = (opt: string) =>
      setSelected((prev) => {
        const next = new Set(prev)
        next.has(opt) ? next.delete(opt) : next.add(opt)
        return next
      })

    return (
      <CheckboxGroup label="Select options" orientation="vertical">
        {OPTIONS.map((opt) => (
          <Checkbox
            key={opt}
            label={opt}
            checked={selected.has(opt)}
            onChange={() => toggle(opt)}
          />
        ))}
      </CheckboxGroup>
    )
  },
}

export const ControlledHorizontal: Story = {
  render: () => {
    const [selected, setSelected] = useState<Set<string>>(new Set(['Option one']))

    const toggle = (opt: string) =>
      setSelected((prev) => {
        const next = new Set(prev)
        next.has(opt) ? next.delete(opt) : next.add(opt)
        return next
      })

    return (
      <CheckboxGroup label="Select options" orientation="horizontal">
        {OPTIONS.map((opt) => (
          <Checkbox
            key={opt}
            label={opt}
            checked={selected.has(opt)}
            onChange={() => toggle(opt)}
          />
        ))}
      </CheckboxGroup>
    )
  },
}
