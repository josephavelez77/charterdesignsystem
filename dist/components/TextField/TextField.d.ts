import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'> {
    /** Visible label text displayed above the input. */
    label?: string;
    /** Validation error message shown below the field; also applies error styling. */
    error?: string;
    /** Helper text shown below the field when there is no error. */
    hint?: string;
    /** Optional icon shown on the left inside the input — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    leadingIcon?: IconDefinition;
    /** Optional icon shown on the right inside the input when the field is not focused and not in error; when focused a clear button replaces it. Accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    trailingIcon?: IconDefinition;
}
export declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=TextField.d.ts.map