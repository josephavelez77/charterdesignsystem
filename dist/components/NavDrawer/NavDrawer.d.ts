import { default as React } from 'react';
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
    /** Application name — used as the accessible label for the default Charter logo. When you pass `logo`, give it its own accessible name (e.g. `alt` on an `<img>`). */
    appName: string;
    /**
     * Custom brand logo shown in the drawer header when expanded. Accepts any node — an `<img>`, inline `<svg>`, or component.
     * Scaled to fit within the header (max 40px tall, full drawer width) while keeping its aspect ratio.
     * Defaults to the Charter horizontal logo.
     */
    logo?: React.ReactNode;
    /**
     * Custom brand mark shown when the drawer is collapsed — typically a square icon version of `logo`.
     * Scaled to fit within 40×40px. Falls back to `logo` when omitted, then to the Charter icon mark.
     */
    logoCollapsed?: React.ReactNode;
    /** Navigation item definitions rendered in the drawer's primary nav list. */
    items: NavItemConfig[];
    /** Controlled collapsed state. When provided, the drawer is fully controlled — pair with `onCollapsedChange`. */
    collapsed?: boolean;
    /** Initial collapsed state for uncontrolled usage. Ignored when `collapsed` is provided. */
    defaultCollapsed?: boolean;
    /** Called with the new collapsed state whenever the collapse state changes. */
    onCollapsedChange?: (collapsed: boolean) => void;
    /** Additional CSS class applied to the root `<nav>` element for layout overrides. */
    className?: string;
}
export declare const NavDrawer: {
    ({ appName, logo, logoCollapsed, items, collapsed: collapsedProp, defaultCollapsed, onCollapsedChange, className, }: NavDrawerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=NavDrawer.d.ts.map