import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface SelectOption {
    /** Internal value passed to `onChange` when this option is selected. */
    value: string;
    /** Human-readable text displayed in the dropdown. */
    label: string;
    /** Optional icon shown to the left of the option label — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    icon?: IconDefinition;
    /** When true, this option is non-interactive in the dropdown. */
    disabled?: boolean;
}
export interface SelectFieldProps {
    /** Visible label text displayed above the trigger. */
    label?: string;
    /** Validation error message shown below the field; also applies error styling. */
    error?: string;
    /** Helper text shown below the field when there is no error. */
    hint?: string;
    /** Optional leading icon inside the trigger — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    leadingIcon?: IconDefinition;
    /** Array of selectable options rendered in the dropdown. */
    options: SelectOption[];
    /** Controlled selected value; when provided the component is controlled. */
    value?: string;
    /** Text shown in the trigger when no option is selected. */
    placeholder?: string;
    /** When true, the trigger is non-interactive and the dropdown cannot be opened. */
    disabled?: boolean;
    /** When true, shows a red asterisk after the label. */
    required?: boolean;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
    /** Called with the selected option's `value` string when the user picks an option. */
    onChange?: (value: string) => void;
}
export declare const SelectField: {
    ({ label, error, hint, leadingIcon, options, value, placeholder, disabled, required, className, onChange, }: SelectFieldProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=SelectField.d.ts.map