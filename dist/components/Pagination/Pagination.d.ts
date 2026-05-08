export interface PaginationProps {
    totalItems: number;
    page: number;
    pageSize: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
    pageSizeOptions?: number[];
    className?: string;
}
export declare const Pagination: {
    ({ totalItems, page, pageSize, onPageChange, onPageSizeChange, pageSizeOptions, className, }: PaginationProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export interface SimplePaginationProps {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}
export declare const SimplePagination: {
    ({ page, totalPages, onPageChange, className, }: SimplePaginationProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Pagination.d.ts.map