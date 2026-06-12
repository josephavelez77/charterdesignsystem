import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface AccordionItemProps {
    /** Heading text shown in the clickable header row. */
    title: string;
    /** Optional secondary line of text displayed below the title in the header. */
    subtitle?: string;
    /** Optional leading icon in the header — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    icon?: IconDefinition;
    /** Content rendered inside the collapsible body panel. */
    children?: React.ReactNode;
    /** Initial expanded state for uncontrolled usage — ignored when `expanded` is provided. */
    defaultExpanded?: boolean;
    /** Controlled expanded state — pair with `onToggle` to drive the component externally. */
    expanded?: boolean;
    /** Called when the accordion is toggled; receives the new expanded state as a boolean. */
    onToggle?: (expanded: boolean) => void;
    /** When true, the header button is disabled and the panel cannot be toggled. */
    disabled?: boolean;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const AccordionItem: {
    ({ title, subtitle, icon, children, defaultExpanded, expanded: controlledExpanded, onToggle, disabled, className, }: AccordionItemProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Accordion.d.ts.map