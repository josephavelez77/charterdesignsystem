import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface SelectOption {
    value: string;
    label: string;
    icon?: IconDefinition;
    disabled?: boolean;
}
export interface SelectFieldProps {
    label?: string;
    error?: string;
    hint?: string;
    leadingIcon?: IconDefinition;
    options: SelectOption[];
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    onChange?: (value: string) => void;
}
export declare const SelectField: {
    ({ label, error, hint, leadingIcon, options, value, placeholder, disabled, required, className, onChange, }: SelectFieldProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=SelectField.d.ts.map