import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface AttributeChipProps {
    label: string;
    icon?: IconDefinition;
    disabled?: boolean;
    onDismiss?: () => void;
    className?: string;
}
export declare const AttributeChip: React.ForwardRefExoticComponent<AttributeChipProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=AttributeChip.d.ts.map