import { default as React } from 'react';
export type CheckboxGroupOrientation = 'vertical' | 'horizontal';
export interface CheckboxGroupProps {
    children: React.ReactNode;
    orientation?: CheckboxGroupOrientation;
    label?: string;
    className?: string;
}
export declare const CheckboxGroup: {
    ({ children, orientation, label, className, }: CheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=CheckboxGroup.d.ts.map