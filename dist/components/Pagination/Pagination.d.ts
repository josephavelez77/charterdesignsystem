export interface PaginationProps {
    /** Total number of items across all pages, used to compute the page count and item range text. */
    totalItems: number;
    /** 1-indexed current page number. */
    page: number;
    /** Number of rows per page; reflected in the rows-per-page selector. */
    pageSize: number;
    /** Called with the new page number when the user navigates. */
    onPageChange: (page: number) => void;
    /** Called with the new page size when the user changes the rows-per-page selector. */
    onPageSizeChange: (pageSize: number) => void;
    /** Available page-size options for the rows-per-page selector. Defaults to `[10, 25, 50, 100, 250, 500]`. */
    pageSizeOptions?: number[];
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const Pagination: {
    ({ totalItems, page, pageSize, onPageChange, onPageSizeChange, pageSizeOptions, className, }: PaginationProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export interface SimplePaginationProps {
    /** 1-indexed current page number. */
    page: number;
    /** Total number of pages, used to disable the Next button and display "X of Y". */
    totalPages: number;
    /** Called with the new page number when the user clicks Back or Next. */
    onPageChange: (page: number) => void;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const SimplePagination: {
    ({ page, totalPages, onPageChange, className, }: SimplePaginationProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Pagination.d.ts.map