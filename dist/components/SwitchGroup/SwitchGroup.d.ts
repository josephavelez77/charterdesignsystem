import { default as React } from 'react';
export type SwitchGroupOrientation = 'vertical' | 'horizontal';
export interface SwitchGroupProps {
    children: React.ReactNode;
    orientation?: SwitchGroupOrientation;
    label?: string;
    className?: string;
}
export declare const SwitchGroup: {
    ({ children, orientation, label, className, }: SwitchGroupProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=SwitchGroup.d.ts.map