export type SkeletonShape = 'bar' | 'circle';
export interface SkeletonProps {
    /** Width of the skeleton — a number is treated as px; a string is passed through as-is (e.g. `'60%'`). */
    width?: number | string;
    /** Height in px. For `shape="circle"` this also controls the width to keep a square aspect ratio. */
    height?: number;
    /** `bar` renders a rounded rectangle; `circle` renders a circular disc. */
    shape?: SkeletonShape;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const Skeleton: {
    ({ width, height, shape, className, }: SkeletonProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Skeleton.d.ts.map