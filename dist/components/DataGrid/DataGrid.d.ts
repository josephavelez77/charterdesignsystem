import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface DataGridUserValue {
    name: string;
    subtitle?: string;
    initials?: string;
    avatarSrc?: string;
}
export interface DataGridOverflowItem {
    label: string;
    icon?: IconDefinition;
    onClick: () => void;
    disabled?: boolean;
}
export interface DataGridSelectOption {
    value: string;
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
    columns: DataGridColumn<T>[];
    data: T[];
    getRowId: (row: T) => string;
    onRowChange?: (rowId: string, updated: T) => void;
    loading?: boolean;
    loadingRowCount?: number;
    emptyTitle?: string;
    emptySubtitle?: string;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    onFilterClick?: () => void;
    selectedRows?: Set<string>;
    onSelectionChange?: (selected: Set<string>) => void;
    sortKey?: string;
    sortDirection?: 'asc' | 'desc';
    onSortChange?: (key: string, direction: 'asc' | 'desc') => void;
    page: number;
    pageSize: number;
    totalItems: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
    pageSizeOptions?: number[];
    className?: string;
}
export declare function DataGrid<T extends Record<string, unknown>>({ columns, data, getRowId, onRowChange, loading, loadingRowCount, emptyTitle, emptySubtitle, searchValue, onSearchChange, onFilterClick, selectedRows, onSelectionChange, sortKey, sortDirection, onSortChange, page, pageSize, totalItems, onPageChange, onPageSizeChange, pageSizeOptions, className, }: DataGridProps<T>): import("react/jsx-runtime").JSX.Element;
export declare namespace DataGrid {
    var displayName: string;
}
export {};
//# sourceMappingURL=DataGrid.d.ts.map