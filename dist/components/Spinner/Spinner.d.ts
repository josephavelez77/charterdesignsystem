export type SpinnerSize = 'small' | 'medium' | 'large';
export type SpinnerColor = 'brand' | 'light' | 'neutral';
export interface SpinnerProps {
    size?: SpinnerSize;
    color?: SpinnerColor;
    className?: string;
}
export declare const Spinner: {
    ({ size, color, className }: SpinnerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Spinner.d.ts.map