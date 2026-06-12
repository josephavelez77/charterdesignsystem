export type LogoOrientation = 'horizontal' | 'vertical';
export type LogoSize = 'small' | 'large';
export interface LogoProps {
    /** `horizontal` places the mark and wordmark side by side; `vertical` stacks them. */
    orientation?: LogoOrientation;
    /** `large` is the standard size; `small` is a compact variant for toolbars. */
    size?: LogoSize;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const Logo: {
    ({ orientation, size, className, }: LogoProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Logo.d.ts.map