export interface ProgressBarProps {
    /** Completion percentage from 0–100. Omit or pass `undefined` to enable indeterminate (looping animation) mode. */
    value?: number;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const ProgressBar: {
    ({ value, className }: ProgressBarProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=ProgressBar.d.ts.map