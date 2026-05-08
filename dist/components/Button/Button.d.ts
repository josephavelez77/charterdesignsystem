import { default as React } from 'react';
export type ButtonVariant = 'brandPrimary' | 'brandSecondary' | 'neutral' | 'statusError';
export type ButtonEmphasis = 'primary' | 'secondary' | 'tertiary';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    emphasis?: ButtonEmphasis;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    fullWidth?: boolean;
    loading?: boolean;
    children: React.ReactNode;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Button.d.ts.map