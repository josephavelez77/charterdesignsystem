import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { PriorityLevel } from '../PriorityChip';
import { StatusLevel, StatusType } from '../StatusChip';
export interface TableUserValue {
    /** Full display name shown in the user cell. */
    name: string;
    /** Optional secondary text shown beneath the name. */
    subtitle?: string;
    /** 1–2 character initials used in the avatar when no `avatarSrc` is provided. */
    initials?: string;
    /** URL for the user's avatar photo; when provided the image is shown instead of initials. */
    avatarSrc?: string;
}
export interface TableStatusValue {
    /** Text displayed inside the StatusChip. */
    label: string;
    /** Semantic category controlling the chip color. */
    statusType: StatusType;
    /** Visual intensity level within the type. */
    level: StatusLevel;
}
export interface TableOverflowItem {
    /** Text shown in the overflow menu item. */
    label: string;
    /** Optional icon displayed to the left of the label — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    icon?: IconDefinition;
    /** Called when the user selects this overflow item. */
    onClick: () => void;
    /** When true, the menu item is non-interactive. */
    disabled?: boolean;
}
type BaseColumn = {
    key: string;
    header?: string;
    sortable?: boolean;
    width?: number | string;
};
export type TableColumn<T> = BaseColumn & ({
    type: 'text';
    accessor: keyof T | ((row: T) => string);
} | {
    type: 'user';
    accessor: keyof T | ((row: T) => TableUserValue);
} | {
    type: 'priority';
    accessor: keyof T | ((row: T) => PriorityLevel);
} | {
    type: 'status';
    accessor: keyof T | ((row: T) => TableStatusValue);
} | {
    type: 'checkbox';
} | {
    type: 'overflow';
    items: (row: T) => TableOverflowItem[];
} | {
    type: 'nav';
    onClick: (row: T) => void;
});
export interface TableProps<T extends Record<string, unknown>> {
    /** Column schema array — each entry defines the type, header, accessor, and rendering for that column. */
    columns: TableColumn<T>[];
    /** Current page of row data to render. */
    data: T[];
    /** Returns a stable unique string ID for a given row, used as the React key and selection key. */
    getRowId: (row: T) => string;
    /** When true, renders skeleton placeholder rows instead of data. */
    loading?: boolean;
    /** Number of skeleton rows shown while `loading` is true. Defaults to 8. */
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
    /** Set of row IDs that are currently selected — used for checkbox columns. */
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
    /** Available page-size options for the rows-per-page selector. */
    pageSizeOptions?: number[];
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare function Table<T extends Record<string, unknown>>({ columns, data, getRowId, loading, loadingRowCount, emptyTitle, emptySubtitle, searchValue, onSearchChange, onFilterClick, selectedRows, onSelectionChange, sortKey, sortDirection, onSortChange, page, pageSize, totalItems, onPageChange, onPageSizeChange, pageSizeOptions, className, }: TableProps<T>): import("react/jsx-runtime").JSX.Element;
export declare namespace Table {
    var displayName: string;
}
export {};
//# sourceMappingURL=Table.d.ts.map