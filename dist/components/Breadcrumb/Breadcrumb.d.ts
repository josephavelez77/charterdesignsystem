export interface BreadcrumbItem {
    /** Visible text for this breadcrumb step. */
    label: string;
    /** If provided, renders the item as an `<a>` tag navigating to this URL. */
    href?: string;
    /** If provided (and no `href`), renders the item as a `<button>` and calls this on click. */
    onClick?: () => void;
}
export interface BreadcrumbProps {
    /** Ordered list of breadcrumb steps; the last item is treated as the current page. */
    items: BreadcrumbItem[];
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const Breadcrumb: {
    ({ items, className }: BreadcrumbProps): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
};
//# sourceMappingURL=Breadcrumb.d.ts.map