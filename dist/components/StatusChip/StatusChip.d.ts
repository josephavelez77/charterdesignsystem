import { default as React } from 'react';
export type StatusType = 'positive' | 'caution' | 'negative' | 'neutral';
export type StatusLevel = 1 | 2 | 3;
export interface StatusChipProps {
    label: string;
    statusType: StatusType;
    level: StatusLevel;
    className?: string;
}
export declare const StatusChip: React.ForwardRefExoticComponent<StatusChipProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=StatusChip.d.ts.map