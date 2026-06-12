import { default as React } from 'react';
export type RadioButtonGroupOrientation = 'vertical' | 'horizontal';
export interface RadioButtonGroupProps {
    /** Content rendered inside the component — should be `RadioButtonItem` elements. */
    children: React.ReactNode;
    /** Layout direction: `vertical` (stacked) or `horizontal` (inline). */
    orientation?: RadioButtonGroupOrientation;
    /** Optional group legend text rendered above the options inside a `<fieldset>`. */
    label?: string;
    /** Shared name for all radio inputs — required for native radio group behavior. */
    name: string;
    /** Controlled selected value; when provided the component is controlled. */
    value?: string;
    /** Initial selected value for uncontrolled usage — ignored when `value` is provided. */
    defaultValue?: string;
    /** Called with the value of the newly selected option when selection changes. */
    onChange?: (value: string) => void;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const RadioButtonGroup: {
    ({ children, orientation, label, name, value, defaultValue, onChange, className, }: RadioButtonGroupProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=RadioButtonGroup.d.ts.map