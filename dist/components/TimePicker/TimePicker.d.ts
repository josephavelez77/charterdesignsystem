export interface TimeValue {
    hours: number;
    minutes: number;
}
export interface TimePickerProps {
    value?: TimeValue | null;
    format?: '12h' | '24h';
    cancelLabel?: string;
    confirmLabel?: string;
    className?: string;
    onConfirm?: (time: TimeValue) => void;
    onCancel?: () => void;
}
export declare const TimePicker: {
    ({ value, format, cancelLabel, confirmLabel, className, onConfirm, onCancel, }: TimePickerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=TimePicker.d.ts.map