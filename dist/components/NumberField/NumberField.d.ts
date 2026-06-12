import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface NumberFieldProps {
    /** Visible label text displayed above the input. */
    label?: string;
    /** Validation error message shown below the field; also applies error styling. */
    error?: string;
    /** Helper text shown below the field when there is no error. */
    hint?: string;
    /** Optional leading icon inside the input — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    leadingIcon?: IconDefinition;
    /** Static text appended after the number value inside the input (e.g. `"kg"`, `"%"`). Only visible when a value is set. */
    suffix?: string;
    /** When true, shows a red asterisk after the label. */
    required?: boolean;
    /** Controlled numeric value; when provided the component is controlled. */
    value?: number;
    /** Initial value for uncontrolled usage — ignored when `value` is provided. */
    defaultValue?: number;
    /** Minimum allowed value; the decrement button is disabled at this boundary. */
    min?: number;
    /** Maximum allowed value; the increment button is disabled at this boundary. */
    max?: number;
    /** Amount added or subtracted on each stepper click. Defaults to `1`. */
    step?: number;
    /** Placeholder text shown when the input is empty. */
    placeholder?: string;
    /** When true, the input and stepper buttons are non-interactive. */
    disabled?: boolean;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
    /** Called with the new numeric value (or `undefined` when cleared) on each change. */
    onChange?: (value: number | undefined) => void;
}
export declare const NumberField: React.ForwardRefExoticComponent<NumberFieldProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=NumberField.d.ts.map