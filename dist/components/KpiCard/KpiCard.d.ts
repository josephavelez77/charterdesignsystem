import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface KpiCardProps {
    /** Primary metric string displayed prominently on the left (e.g. `"1,234"` or `"$98K"`). */
    value: string;
    /** Short description of the metric shown below `value`. */
    description: string;
    /** Optional decorative icon displayed on the right side of the card — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    trailingIcon?: IconDefinition;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const KpiCard: {
    ({ value, description, trailingIcon, className }: KpiCardProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=KpiCard.d.ts.map