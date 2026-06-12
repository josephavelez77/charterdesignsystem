import { default as React } from 'react';
export interface PasswordFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'type'> {
    /** Visible label text displayed above the input. */
    label?: string;
    /** Validation error message shown below the field; also applies error styling. */
    error?: string;
    /** Helper text shown below the field when there is no error. */
    hint?: string;
    /** When true, shows a red asterisk after the label. */
    required?: boolean;
}
export declare const PasswordField: React.ForwardRefExoticComponent<PasswordFieldProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=PasswordField.d.ts.map