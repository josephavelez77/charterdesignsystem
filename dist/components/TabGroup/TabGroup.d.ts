export interface TabItem {
    label: string;
    disabled?: boolean;
}
export interface TabGroupProps {
    tabs: TabItem[];
    activeIndex?: number;
    onChange?: (index: number) => void;
    className?: string;
}
export declare const TabGroup: {
    ({ tabs, activeIndex, onChange, className, }: TabGroupProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=TabGroup.d.ts.map