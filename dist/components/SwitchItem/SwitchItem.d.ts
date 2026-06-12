import { default as React } from 'react';
import { SwitchProps } from '../Switch';
export interface SwitchItemProps extends SwitchProps {
    /** Text label displayed to the right of the switch. */
    label?: string;
    /** When true, shows a red asterisk after the label. */
    required?: boolean;
}
export declare const SwitchItem: React.ForwardRefExoticComponent<SwitchItemProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=SwitchItem.d.ts.map