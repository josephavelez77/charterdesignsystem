import { default as React } from 'react';
export type BadgeVariant = 'numeric' | 'dot';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    value?: number;
    max?: number;
}
export declare const Badge: {
    ({ variant, value, max, className, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Badge.d.ts.map