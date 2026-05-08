import { default as React } from 'react';
export type RadioButtonGroupOrientation = 'vertical' | 'horizontal';
export interface RadioButtonGroupProps {
    children: React.ReactNode;
    orientation?: RadioButtonGroupOrientation;
    label?: string;
    /** Shared name for all radio inputs — required for native radio group behavior */
    name: string;
    /** Controlled selected value */
    value?: string;
    /** Uncontrolled default selected value */
    defaultValue?: string;
    /** Called when selection changes */
    onChange?: (value: string) => void;
    className?: string;
}
export declare const RadioButtonGroup: {
    ({ children, orientation, label, name, value, defaultValue, onChange, className, }: RadioButtonGroupProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=RadioButtonGroup.d.ts.map