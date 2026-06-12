import { default as React } from 'react';
export type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right';
export interface PopoverProps {
    /** Text displayed in the popover's header bar; also used as `aria-label` for the dialog. */
    label: string;
    /** Content rendered in the popover body. */
    content: React.ReactNode;
    /** The trigger element — the popover opens/closes when this element is clicked. */
    children: React.ReactElement;
    /** Preferred side the popover appears relative to the trigger. Defaults to `bottom`. */
    placement?: PopoverPlacement;
}
export declare const Popover: {
    ({ label, content, children, placement, }: PopoverProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Popover.d.ts.map