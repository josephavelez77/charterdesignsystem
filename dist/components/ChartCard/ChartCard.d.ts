import { default as React } from 'react';
export type ChartCardLayout = 'horizontal' | 'vertical';
export interface ChartCardProps {
    /** Primary metric string displayed prominently (e.g. `"1,234"` or `"48%"`). */
    value: string;
    /** Short description of the metric shown below `value`. */
    description: string;
    /**
     * Layout variant:
     * - `horizontal` — metric text on the left, chart fills the right side (default).
     * - `vertical` — metric text on top, chart fills the full width below.
     */
    layout?: ChartCardLayout;
    /** Chart content — pass any chart component (Recharts, Victory, etc.) or a custom SVG here. */
    children?: React.ReactNode;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const ChartCard: {
    ({ value, description, layout, children, className, }: ChartCardProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=ChartCard.d.ts.map