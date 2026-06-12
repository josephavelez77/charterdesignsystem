import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface DataGridUserValue {
    /** Full display name shown in the user cell. */
    name: string;
    /** Optional secondary text shown beneath the name. */
    subtitle?: string;
    /** 1–2 character initials used in the avatar when no `avatarSrc` is provided. */
    initials?: string;
    /** URL for the user's avatar photo; when provided the image is shown instead of initials. */
    avatarSrc?: string;
}
export interface DataGridOverflowItem {
    /** Text shown in the overflow menu item. */
    label: string;
    /** Optional icon displayed to the left of the label — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    icon?: IconDefinition;
    /** Called when the user selects this overflow item. */
    onClick: () => void;
    /** When true, the menu item is non-interactive. */
    disabled?: boolean;
}
export interface DataGridSelectOption {
    /** Internal value passed to `setter` when this option is selected. */
    value: string;
    /** Human-readable text displayed in the dropdown. */
    label: string;
}
type BaseGridColumn = {
    key: string;
    header?: string;
    sortable?: boolean;
    width?: number | string;
};
export type DataGridColumn<T> = BaseGridColumn & ({
    type: 'text';
    accessor: keyof T | ((row: T) => string);
    setter: (row: T, v: string) => T;
} | {
    type: 'number';
    accessor: keyof T | ((row: T) => number | undefined);
    setter: (row: T, v: number | undefined) => T;
    min?: number;
    max?: number;
    step?: number;
} | {
    type: 'date';
    accessor: keyof T | ((row: T) => Date | null);
    setter: (row: T, v: Date | null) => T;
    formatDate?: (d: Date) => string;
} | {
    type: 'select';
    accessor: keyof T | ((row: T) => string);
    setter: (row: T, v: string) => T;
    options: DataGridSelectOption[];
} | {
    type: 'checkbox';
    accessor: keyof T | ((row: T) => boolean);
    setter: (row: T, v: boolean) => T;
} | {
    type: 'switch';
    accessor: keyof T | ((row: T) => boolean);
    setter: (row: T, v: boolean) => T;
} | {
    type: 'overflow';
    items: (row: T) => DataGridOverflowItem[];
} | {
    type: 'text-readonly';
    accessor: keyof T | ((row: T) => string);
} | {
    type: 'user';
    accessor: keyof T | ((row: T) => DataGridUserValue);
} | {
    type: 'row-select';
});
export interface DataGridProps<T extends Record<string, unknown>> {
    /** Column schema array — each entry defines the type, header, accessor, and optional setter for that column. */
    columns: DataGridColumn<T>[];
    /** Current page of row data to render. */
    data: T[];
    /** Returns a stable unique string ID for a given row, used as the React key and selection key. */
    getRowId: (row: T) => string;
    /** Called when an editable cell changes; receives the row ID and the updated row object returned by the column's `setter`. */
    onRowChange?: (rowId: string, updated: T) => void;
    /** When true, renders skeleton placeholder rows instead of data. */
    loading?: boolean;
    /** Number of skeleton rows to render while `loading` is true. Defaults to 8. */
    loadingRowCount?: number;
    /** Heading shown in the empty state when `data` is empty. */
    emptyTitle?: string;
    /** Subtext shown below `emptyTitle` in the empty state. */
    emptySubtitle?: string;
    /** Controlled value for the search input; renders the search bar when provided. */
    searchValue?: string;
    /** Called with the new search string whenever the user types in the search bar. */
    onSearchChange?: (value: string) => void;
    /** When provided, renders a filter icon button in the action bar and calls this when clicked. */
    onFilterClick?: () => void;
    /** Set of row IDs that are currently selected — used for row-select columns. */
    selectedRows?: Set<string>;
    /** Called with the updated selection set whenever the user checks or unchecks a row. */
    onSelectionChange?: (selected: Set<string>) => void;
    /** Key of the column currently used for sorting — drives the sort indicator icon. */
    sortKey?: string;
    /** Current sort direction — drives the sort indicator icon. */
    sortDirection?: 'asc' | 'desc';
    /** Called when a sortable column header is clicked; receives the column key and the new direction. */
    onSortChange?: (key: string, direction: 'asc' | 'desc') => void;
    /** 1-indexed current page number. */
    page: number;
    /** Number of rows per page. */
    pageSize: number;
    /** Total number of items across all pages, used to compute page count and range text. */
    totalItems: number;
    /** Called with the new page number when the user navigates. */
    onPageChange: (page: number) => void;
    /** Called with the new page size when the user changes the rows-per-page selector. */
    onPageSizeChange: (pageSize: number) => void;
    /** Available page-size options for the rows-per-page selector. Defaults to `[10, 25, 50, 100, 250, 500]`. */
    pageSizeOptions?: number[];
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare function DataGrid<T extends Record<string, unknown>>({ columns, data, getRowId, onRowChange, loading, loadingRowCount, emptyTitle, emptySubtitle, searchValue, onSearchChange, onFilterClick, selectedRows, onSelectionChange, sortKey, sortDirection, onSortChange, page, pageSize, totalItems, onPageChange, onPageSizeChange, pageSizeOptions, className, }: DataGridProps<T>): import("react/jsx-runtime").JSX.Element;
export declare namespace DataGrid {
    var displayName: string;
}
export {};
//# sourceMappingURL=DataGrid.d.ts.map