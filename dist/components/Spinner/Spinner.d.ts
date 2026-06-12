export type SpinnerSize = 'small' | 'medium' | 'large';
export type SpinnerColor = 'brand' | 'light' | 'neutral';
export interface SpinnerProps {
    /** Visual size: `small` (16 px), `medium` (24 px), or `large` (32 px). */
    size?: SpinnerSize;
    /** Color scheme: `brand` (blue), `light` (white, for dark backgrounds), or `neutral` (gray). */
    color?: SpinnerColor;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const Spinner: {
    ({ size, color, className }: SpinnerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Spinner.d.ts.map