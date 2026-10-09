import { default as React } from 'react';
export type CharterLogoVariant = 'horizontal' | 'icon';
export interface CharterLogoProps extends Omit<React.SVGProps<SVGSVGElement>, 'ref'> {
    /** Which form to render: `icon` mark only, or `horizontal` (mark + wordmark + tagline side by side). */
    variant?: CharterLogoVariant;
    /** Additional CSS class for size or position overrides. */
    className?: string;
}
export declare const CharterLogo: {
    ({ variant, className, ...rest }: CharterLogoProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=CharterLogo.d.ts.map