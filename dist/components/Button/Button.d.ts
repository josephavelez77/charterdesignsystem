import { default as React } from 'react';
export type ButtonVariant = 'brandPrimary' | 'brandSecondary' | 'neutral' | 'statusError';
export type ButtonEmphasis = 'primary' | 'secondary' | 'tertiary';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Color scheme: `brandPrimary` (blue), `brandSecondary` (amber), `neutral` (gray), or `statusError` (red). */
    variant?: ButtonVariant;
    /** Fill style: `primary` (filled), `secondary` (outlined), `tertiary` (ghost/text-only). */
    emphasis?: ButtonEmphasis;
    /** Node rendered to the left of the button label — typically an `<Icon>` element. */
    leadingIcon?: React.ReactNode;
    /** Node rendered to the right of the button label — typically an `<Icon>` element. */
    trailingIcon?: React.ReactNode;
    /** When true, the button stretches to fill its container's full width. */
    fullWidth?: boolean;
    /** When true, replaces button content with a spinner and keeps the button width stable; also disables click. */
    loading?: boolean;
    /** Content rendered inside the component. */
    children: React.ReactNode;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Button.d.ts.map