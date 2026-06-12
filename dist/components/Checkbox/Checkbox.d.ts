import { default as React } from 'react';
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    /** Text label rendered beside the checkbox. */
    label?: string;
    /** When true, shows a red asterisk after the label and marks the input as required. */
    required?: boolean;
    /** When true, renders a minus-square icon to indicate a partially selected state; overrides the checked icon. */
    indeterminate?: boolean;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Checkbox.d.ts.map