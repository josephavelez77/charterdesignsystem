import { default as React } from 'react';
export type BadgeVariant = 'numeric' | 'dot';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** `numeric` shows a count; `dot` shows a small colored indicator with no text. */
    variant?: BadgeVariant;
    /** The numeric count to display when `variant="numeric"`. */
    value?: number;
    /** When set and `value` exceeds this number, the badge shows `{max}+` instead of the raw count. */
    max?: number;
}
export declare const Badge: {
    ({ variant, value, max, className, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Badge.d.ts.map