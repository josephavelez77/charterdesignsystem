import { default as React } from 'react';
import { SwitchProps } from '../Switch';
export interface SwitchItemProps extends SwitchProps {
    /** Label text displayed beside the switch */
    label?: string;
    /** Shows a red asterisk after the label */
    required?: boolean;
}
export declare const SwitchItem: React.ForwardRefExoticComponent<SwitchItemProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=SwitchItem.d.ts.map