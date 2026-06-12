export interface DatePickerProps {
    /** Pre-selected date shown when the picker opens; defaults to today when omitted. */
    value?: Date | null;
    /** Label for the cancel/dismiss button. Defaults to `"Cancel"`. */
    cancelLabel?: string;
    /** Label for the confirm/select button. Defaults to `"OK"`. */
    confirmLabel?: string;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
    /** Called when the user confirms a date selection; receives the selected `Date`. */
    onConfirm?: (date: Date) => void;
    /** Called when the user clicks the cancel button without confirming. */
    onCancel?: () => void;
}
export declare const DatePicker: {
    ({ value, cancelLabel, confirmLabel, className, onConfirm, onCancel, }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=DatePicker.d.ts.map