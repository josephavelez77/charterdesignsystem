export interface TabItem {
    /** Visible text for this tab. */
    label: string;
    /** When true, this tab is non-interactive and appears muted. */
    disabled?: boolean;
}
export interface TabGroupProps {
    /** Ordered list of tab definitions to render in the tab bar. */
    tabs: TabItem[];
    /** 0-indexed index of the currently active tab. Defaults to `0`. */
    activeIndex?: number;
    /** Called with the index of the tab the user clicked. */
    onChange?: (index: number) => void;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const TabGroup: {
    ({ tabs, activeIndex, onChange, className, }: TabGroupProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=TabGroup.d.ts.map