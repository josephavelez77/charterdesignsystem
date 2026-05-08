import { default as React } from 'react';
export type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right';
export interface PopoverProps {
    /** Popover header label */
    label: string;
    /** Popover body content */
    content: React.ReactNode;
    /** Element that triggers the popover on click */
    children: React.ReactElement;
    /** Preferred placement relative to the trigger */
    placement?: PopoverPlacement;
}
export declare const Popover: {
    ({ label, content, children, placement, }: PopoverProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Popover.d.ts.map