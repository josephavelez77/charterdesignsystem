import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface AccordionItemProps {
    title: string;
    subtitle?: string;
    /** Optional leading icon in the header */
    icon?: IconDefinition;
    children?: React.ReactNode;
    /** Initial expanded state for uncontrolled usage */
    defaultExpanded?: boolean;
    /** Controlled expanded state — pair with onToggle */
    expanded?: boolean;
    onToggle?: (expanded: boolean) => void;
    disabled?: boolean;
    className?: string;
}
export declare const AccordionItem: {
    ({ title, subtitle, icon, children, defaultExpanded, expanded: controlledExpanded, onToggle, disabled, className, }: AccordionItemProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Accordion.d.ts.map