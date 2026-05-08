export interface DatePickerProps {
    value?: Date | null;
    cancelLabel?: string;
    confirmLabel?: string;
    className?: string;
    onConfirm?: (date: Date) => void;
    onCancel?: () => void;
}
export declare const DatePicker: {
    ({ value, cancelLabel, confirmLabel, className, onConfirm, onCancel, }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=DatePicker.d.ts.map