import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { SelectOption } from '../SelectField/SelectField';
export interface MultiSelectFieldProps {
    /** Visible label text displayed above the trigger. */
    label?: string;
    /** Validation error message shown below the field; also applies error styling. */
    error?: string;
    /** Helper text shown below the field when there is no error. */
    hint?: string;
    /** Optional leading icon inside the trigger — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    leadingIcon?: IconDefinition;
    /** Array of selectable options; each requires a `value` string and a `label` string. */
    options: SelectOption[];
    /** Controlled array of selected option values; when provided the component is controlled. */
    value?: string[];
    /** Initial selection for uncontrolled usage — ignored when `value` is provided. */
    defaultValue?: string[];
    /** Text shown when no options are selected. */
    placeholder?: string;
    /** When true, the trigger is non-interactive and all options are hidden. */
    disabled?: boolean;
    /** When true, shows a red asterisk after the label. */
    required?: boolean;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
    /** Called with the updated array of selected values whenever the selection changes. */
    onChange?: (values: string[]) => void;
}
export declare const MultiSelectField: {
    ({ label, error, hint, leadingIcon, options, value, defaultValue, placeholder, disabled, required, className, onChange, }: MultiSelectFieldProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=MultiSelectField.d.ts.map