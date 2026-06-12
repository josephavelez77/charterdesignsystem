export interface TimeValue {
    /** Hour in 24-hour format (0–23). */
    hours: number;
    /** Minutes (0–59). */
    minutes: number;
}
export interface TimePickerProps {
    /** Pre-selected time shown when the picker opens; defaults to 12:00 when omitted. */
    value?: TimeValue | null;
    /** Clock format: `12h` shows an AM/PM selector; `24h` shows hours 0–23. Defaults to `12h`. */
    format?: '12h' | '24h';
    /** Label for the cancel/dismiss button. Defaults to `"Cancel"`. */
    cancelLabel?: string;
    /** Label for the confirm/select button. Defaults to `"OK"`. */
    confirmLabel?: string;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
    /** Called when the user confirms a time selection; receives the selected `TimeValue`. */
    onConfirm?: (time: TimeValue) => void;
    /** Called when the user clicks the cancel button without confirming. */
    onCancel?: () => void;
}
export declare const TimePicker: {
    ({ value, format, cancelLabel, confirmLabel, className, onConfirm, onCancel, }: TimePickerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=TimePicker.d.ts.map