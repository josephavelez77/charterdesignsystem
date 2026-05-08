import { default as React } from 'react';
export interface PasswordFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'type'> {
    label?: string;
    error?: string;
    hint?: string;
    required?: boolean;
}
export declare const PasswordField: React.ForwardRefExoticComponent<PasswordFieldProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=PasswordField.d.ts.map