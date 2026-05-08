import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface NavChildItem {
    label: string;
    selected?: boolean;
    onClick?: () => void;
}
export interface NavItemConfig {
    label: string;
    icon?: IconDefinition;
    selected?: boolean;
    onClick?: () => void;
    children?: NavChildItem[];
}
export interface NavDrawerProps {
    appName: string;
    items: NavItemConfig[];
    defaultCollapsed?: boolean;
    onCollapsedChange?: (collapsed: boolean) => void;
    className?: string;
}
export declare const NavDrawer: {
    ({ appName, items, defaultCollapsed, onCollapsedChange, className, }: NavDrawerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=NavDrawer.d.ts.map