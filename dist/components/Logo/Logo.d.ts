export type LogoOrientation = 'horizontal' | 'vertical';
export type LogoSize = 'small' | 'large';
export interface LogoProps {
    orientation?: LogoOrientation;
    size?: LogoSize;
    className?: string;
}
export declare const Logo: {
    ({ orientation, size, className, }: LogoProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Logo.d.ts.map