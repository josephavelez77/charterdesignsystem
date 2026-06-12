import { default as React } from 'react';
export interface AccordionGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Content rendered inside the component — should be `AccordionItem` elements. */
    children: React.ReactNode;
    /** When true, only one item can be expanded at a time; opening one closes any currently open item. */
    exclusive?: boolean;
}
export declare const AccordionGroup: React.ForwardRefExoticComponent<AccordionGroupProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=AccordionGroup.d.ts.map