import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { SelectOption } from '../SelectField/SelectField';
export interface MultiSelectFieldProps {
    label?: string;
    error?: string;
    hint?: string;
    leadingIcon?: IconDefinition;
    options: SelectOption[];
    value?: string[];
    defaultValue?: string[];
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    onChange?: (values: string[]) => void;
}
export declare const MultiSelectField: {
    ({ label, error, hint, leadingIcon, options, value, defaultValue, placeholder, disabled, required, className, onChange, }: MultiSelectFieldProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=MultiSelectField.d.ts.map