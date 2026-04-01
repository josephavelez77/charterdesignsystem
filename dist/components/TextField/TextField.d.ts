import { default as React } from 'react';
export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'> {
    label?: string;
    error?: string;
    hint?: string;
}
export declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=TextField.d.ts.map