import { default as React } from 'react';
export type StatusType = 'positive' | 'caution' | 'negative' | 'neutral';
export type StatusLevel = 1 | 2 | 3;
export interface StatusChipProps {
    /** Text displayed inside the chip. */
    label: string;
    /** Semantic category: `positive` (green), `caution` (amber), `negative` (red), or `neutral` (gray). */
    statusType: StatusType;
    /** Visual intensity level within the type: `1` (lightest) to `3` (most saturated). */
    level: StatusLevel;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const StatusChip: React.ForwardRefExoticComponent<StatusChipProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=StatusChip.d.ts.map