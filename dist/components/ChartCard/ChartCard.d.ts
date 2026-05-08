export interface BarChartDataPoint {
    label: string;
    value: number;
}
export interface ChartCardProps {
    value: string;
    description: string;
    data: BarChartDataPoint[];
    className?: string;
}
export declare const ChartCard: {
    ({ value, description, data, className }: ChartCardProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=ChartCard.d.ts.map