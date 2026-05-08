import { BreadcrumbItem } from '../Breadcrumb/Breadcrumb';
export interface PageAction {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
}
export interface PageHeaderProps {
    title: string;
    breadcrumbs?: BreadcrumbItem[];
    primaryAction?: PageAction;
    secondaryAction?: PageAction;
    tertiaryActions?: PageAction[];
    className?: string;
}
export declare const PageHeader: {
    ({ title, breadcrumbs, primaryAction, secondaryAction, tertiaryActions, className, }: PageHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=PageHeader.d.ts.map