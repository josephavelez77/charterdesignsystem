import { default as React } from 'react';
export type PriorityLevel = 'urgent' | 'high' | 'medium' | 'low';
export interface PriorityChipProps {
    /** Priority tier: `urgent` > `high` > `medium` > `low`; controls the icon and color. */
    priority: PriorityLevel;
    /** Custom label text; defaults to the capitalized priority name (e.g. `"Urgent"`). */
    label?: string;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const PriorityChip: React.ForwardRefExoticComponent<PriorityChipProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=PriorityChip.d.ts.map