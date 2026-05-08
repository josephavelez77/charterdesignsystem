import { default as React } from 'react';
export type PriorityLevel = 'urgent' | 'high' | 'medium' | 'low';
export interface PriorityChipProps {
    priority: PriorityLevel;
    label?: string;
    className?: string;
}
export declare const PriorityChip: React.ForwardRefExoticComponent<PriorityChipProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=PriorityChip.d.ts.map