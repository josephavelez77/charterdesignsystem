import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { TimeValue } from '../TimePicker/TimePicker';
export interface TimeFieldProps {
    /** Visible label text displayed above the trigger button. */
    label?: string;
    /** Validation error message shown below the field; also applies error styling to the trigger. */
    error?: string;
    /** Helper text shown below the field when there is no error. */
    hint?: string;
    /** Optional leading icon inside the trigger — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    leadingIcon?: IconDefinition;
    /** Currently selected time value, or `null` to show the placeholder. */
    value?: TimeValue | null;
    /** Text shown inside the trigger when no time is selected. */
    placeholder?: string;
    /** When true, the trigger button is non-interactive and appears muted. */
    disabled?: boolean;
    /** When true, shows a red asterisk after the label. */
    required?: boolean;
    /** Clock format used for display: `12h` (with AM/PM) or `24h`. Defaults to `12h`. */
    format?: '12h' | '24h';
    /** Custom function to format the selected `TimeValue` for display in the trigger, overriding `format`. */
    formatTime?: (time: TimeValue) => string;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
    /** Called when the user clicks the trigger button — use this to open a `TimePicker` popover. */
    onOpen?: () => void;
}
export declare const TimeField: {
    ({ label, error, hint, leadingIcon, value, placeholder, disabled, required, format, formatTime, className, onOpen, }: TimeFieldProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=TimeField.d.ts.map