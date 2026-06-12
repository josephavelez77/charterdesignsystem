import { default as React } from 'react';
export type CheckboxGroupOrientation = 'vertical' | 'horizontal';
export interface CheckboxGroupProps {
    /** Content rendered inside the component — should be `Checkbox` or `CheckboxItem` elements. */
    children: React.ReactNode;
    /** Layout direction of the checkboxes: `vertical` (stacked) or `horizontal` (inline). */
    orientation?: CheckboxGroupOrientation;
    /** Optional group legend text rendered above the checkboxes inside a `<fieldset>`. */
    label?: string;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const CheckboxGroup: {
    ({ children, orientation, label, className, }: CheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=CheckboxGroup.d.ts.map