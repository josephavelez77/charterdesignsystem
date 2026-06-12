import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface DateFieldProps {
    /** Visible label text displayed above the trigger button. */
    label?: string;
    /** Validation error message displayed below the field; also applies error styling to the trigger. */
    error?: string;
    /** Helper text shown below the field when there is no error. */
    hint?: string;
    /** Optional leading icon inside the trigger — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    leadingIcon?: IconDefinition;
    /** Currently selected date, or `null` to show the placeholder. */
    value?: Date | null;
    /** Text shown inside the trigger when no date is selected. */
    placeholder?: string;
    /** When true, the trigger button is non-interactive and appears muted. */
    disabled?: boolean;
    /** When true, shows a red asterisk after the label. */
    required?: boolean;
    /** Custom function to format the selected `Date` for display in the trigger. */
    formatDate?: (date: Date) => string;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
    /** Called when the user clicks the trigger button — use this to open a `DatePicker` popover. */
    onOpen?: () => void;
}
export declare const DateField: {
    ({ label, error, hint, leadingIcon, value, placeholder, disabled, required, formatDate, className, onOpen, }: DateFieldProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=DateField.d.ts.map