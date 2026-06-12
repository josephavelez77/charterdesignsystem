import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface NavChildItem {
    /** Visible text for this child navigation link. */
    label: string;
    /** When true, applies the active/selected style to the child item. */
    selected?: boolean;
    /** Called when the user clicks this child item. */
    onClick?: () => void;
}
export interface NavItemConfig {
    /** Visible text for this top-level navigation item. */
    label: string;
    /** Optional icon shown to the left of the label — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    icon?: IconDefinition;
    /** When true, applies the active/selected style to this item. */
    selected?: boolean;
    /** Called when the user clicks a leaf-level item (no children). */
    onClick?: () => void;
    /** Nested child items — render an expandable section (expanded drawer) or a flyout menu (collapsed drawer). */
    children?: NavChildItem[];
}
export interface NavDrawerProps {
    /** Application name displayed in the drawer header when expanded. */
    appName: string;
    /** Navigation item definitions rendered in the drawer's primary nav list. */
    items: NavItemConfig[];
    /** Initial collapsed state for uncontrolled usage. When collapsed, labels are hidden and items show tooltips. */
    defaultCollapsed?: boolean;
    /** Called with the new collapsed state whenever the user toggles the drawer open/closed. */
    onCollapsedChange?: (collapsed: boolean) => void;
    /** Additional CSS class applied to the root `<nav>` element for layout overrides. */
    className?: string;
}
export declare const NavDrawer: {
    ({ appName, items, defaultCollapsed, onCollapsedChange, className, }: NavDrawerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=NavDrawer.d.ts.map