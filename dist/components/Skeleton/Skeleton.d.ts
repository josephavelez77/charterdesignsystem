export type SkeletonShape = 'bar' | 'circle';
export interface SkeletonProps {
    /** Width of the skeleton — number treated as px, string passed through (e.g. '60%') */
    width?: number | string;
    /** Height in px. For shape="circle" this also sets the width. */
    height?: number;
    shape?: SkeletonShape;
    className?: string;
}
export declare const Skeleton: {
    ({ width, height, shape, className, }: SkeletonProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Skeleton.d.ts.map