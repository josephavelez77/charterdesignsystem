import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
    /** Visible label text displayed above the textarea. */
    label?: string;
    /** Validation error message shown below the field; also applies error styling. */
    error?: string;
    /** Helper text shown below the field when there is no error. */
    hint?: string;
    /** Optional icon displayed in the top-left of the textarea — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    leadingIcon?: IconDefinition;
}
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
//# sourceMappingURL=TextArea.d.ts.map