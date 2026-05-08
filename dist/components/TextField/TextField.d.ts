import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'> {
    label?: string;
    error?: string;
    hint?: string;
    leadingIcon?: IconDefinition;
    trailingIcon?: IconDefinition;
}
export declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=TextField.d.ts.map