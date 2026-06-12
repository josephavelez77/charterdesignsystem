import { default as React } from 'react';
export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    /** Whether this radio option is currently selected. */
    checked?: boolean;
    /** The `name` attribute shared across all radio buttons in the same group — required for native exclusivity. */
    name?: string;
}
export declare const RadioButton: React.ForwardRefExoticComponent<RadioButtonProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=RadioButton.d.ts.map