import { default as React } from 'react';
export interface AccordionGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    /** When true, only one item can be expanded at a time */
    exclusive?: boolean;
}
export declare const AccordionGroup: React.ForwardRefExoticComponent<AccordionGroupProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=AccordionGroup.d.ts.map