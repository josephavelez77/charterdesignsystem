import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { PriorityLevel } from '../PriorityChip';
import { StatusLevel, StatusType } from '../StatusChip';
export interface TableUserValue {
    name: string;
    subtitle?: string;
    initials?: string;
    avatarSrc?: string;
}
export interface TableStatusValue {
    label: string;
    statusType: StatusType;
    level: StatusLevel;
}
export interface TableOverflowItem {
    label: string;
    icon?: IconDefinition;
    onClick: () => void;
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
    columns: TableColumn<T>[];
    data: T[];
    getRowId: (row: T) => string;
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
export declare function Table<T extends Record<string, unknown>>({ columns, data, getRowId, loading, loadingRowCount, emptyTitle, emptySubtitle, searchValue, onSearchChange, onFilterClick, selectedRows, onSelectionChange, sortKey, sortDirection, onSortChange, page, pageSize, totalItems, onPageChange, onPageSizeChange, pageSizeOptions, className, }: TableProps<T>): import("react/jsx-runtime").JSX.Element;
export declare namespace Table {
    var displayName: string;
}
export {};
//# sourceMappingURL=Table.d.ts.map