import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface NumberFieldProps {
    label?: string;
    error?: string;
    hint?: string;
    leadingIcon?: IconDefinition;
    suffix?: string;
    required?: boolean;
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    onChange?: (value: number | undefined) => void;
}
export declare const NumberField: React.ForwardRefExoticComponent<NumberFieldProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=NumberField.d.ts.map