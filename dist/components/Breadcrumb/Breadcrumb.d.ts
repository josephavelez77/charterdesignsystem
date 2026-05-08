export interface BreadcrumbItem {
    label: string;
    href?: string;
    onClick?: () => void;
}
export interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}
export declare const Breadcrumb: {
    ({ items, className }: BreadcrumbProps): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
};
//# sourceMappingURL=Breadcrumb.d.ts.map