import { default as React } from 'react';
export type SwitchGroupOrientation = 'vertical' | 'horizontal';
export interface SwitchGroupProps {
    /** Content rendered inside the component — should be `SwitchItem` elements. */
    children: React.ReactNode;
    /** Layout direction: `vertical` (stacked) or `horizontal` (inline). */
    orientation?: SwitchGroupOrientation;
    /** Optional group legend text rendered above the switches inside a `<fieldset>`. */
    label?: string;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const SwitchGroup: {
    ({ children, orientation, label, className, }: SwitchGroupProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=SwitchGroup.d.ts.map