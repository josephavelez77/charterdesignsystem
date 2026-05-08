import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { TimeValue } from '../TimePicker/TimePicker';
export interface TimeFieldProps {
    label?: string;
    error?: string;
    hint?: string;
    leadingIcon?: IconDefinition;
    value?: TimeValue | null;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    format?: '12h' | '24h';
    formatTime?: (time: TimeValue) => string;
    className?: string;
    onOpen?: () => void;
}
export declare const TimeField: {
    ({ label, error, hint, leadingIcon, value, placeholder, disabled, required, format, formatTime, className, onOpen, }: TimeFieldProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=TimeField.d.ts.map