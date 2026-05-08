import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface DateFieldProps {
    label?: string;
    error?: string;
    hint?: string;
    leadingIcon?: IconDefinition;
    value?: Date | null;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    formatDate?: (date: Date) => string;
    className?: string;
    onOpen?: () => void;
}
export declare const DateField: {
    ({ label, error, hint, leadingIcon, value, placeholder, disabled, required, formatDate, className, onOpen, }: DateFieldProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=DateField.d.ts.map