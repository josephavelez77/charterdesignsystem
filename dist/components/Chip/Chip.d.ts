import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface ChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
    label: string;
    icon?: IconDefinition;
    selected?: boolean;
    defaultSelected?: boolean;
    onChange?: (selected: boolean) => void;
}
export declare const Chip: React.ForwardRefExoticComponent<ChipProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Chip.d.ts.map