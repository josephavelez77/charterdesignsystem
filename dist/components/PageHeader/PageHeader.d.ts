import { BreadcrumbItem } from '../Breadcrumb/Breadcrumb';
export interface PageAction {
    /** Visible text for this action button. */
    label: string;
    /** Called when the user clicks this action button. */
    onClick?: () => void;
    /** When true, the action button is non-interactive. */
    disabled?: boolean;
}
export interface PageHeaderProps {
    /** Main page title displayed prominently on the left. */
    title: string;
    /** Optional breadcrumb trail rendered below the title. */
    breadcrumbs?: BreadcrumbItem[];
    /** Primary call-to-action button shown in the top-right action area. */
    primaryAction?: PageAction;
    /** Secondary action button shown beside the primary action. */
    secondaryAction?: PageAction;
    /** Additional actions surfaced via an overflow (⋮) menu button. */
    tertiaryActions?: PageAction[];
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const PageHeader: {
    ({ title, breadcrumbs, primaryAction, secondaryAction, tertiaryActions, className, }: PageHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=PageHeader.d.ts.map