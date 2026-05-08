import type { Meta, StoryObj } from '@storybook/react-vite'
import { faHouse, faGear, faUser } from '@fortawesome/free-solid-svg-icons'
import { AccordionItem } from './Accordion'

const BODY_TEXT =
  'Accordion content lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.'

const meta: Meta<typeof AccordionItem> = {
  title: 'Data Display/AccordionItem',
  component: AccordionItem,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    title: 'Accordion title',
    subtitle: 'Optional accordion subtitle',
    defaultExpanded: false,
    disabled: false,
  },
  argTypes: {
    defaultExpanded: { control: 'boolean' },
    disabled: { control: 'boolean' },
    expanded: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Collapsed: Story = {
  args: { defaultExpanded: false, children: BODY_TEXT },
}

export const Expanded: Story = {
  args: { defaultExpanded: true, children: BODY_TEXT },
}

export const WithLeadingIcon: Story = {
  args: { icon: faHouse, defaultExpanded: true, children: BODY_TEXT },
}

export const WithoutSubtitle: Story = {
  args: { subtitle: undefined, defaultExpanded: true, children: BODY_TEXT },
}

export const Disabled: Story = {
  args: { disabled: true, defaultExpanded: false, children: BODY_TEXT },
}

export const DisabledExpanded: Story = {
  args: { disabled: true, defaultExpanded: true, children: BODY_TEXT },
}

export const CustomContent: Story = {
  args: { icon: faGear, defaultExpanded: true },
  render: (args) => (
    <AccordionItem {...args}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ margin: 0 }}>Any React content can go here.</p>
        <ul style={{ margin: 0, paddingLeft: '16px' }}>
          <li>List item one</li>
          <li>List item two</li>
          <li>List item three</li>
        </ul>
      </div>
    </AccordionItem>
  ),
}
