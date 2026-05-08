import { default as React } from 'react';
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'role'> {
    /** Controlled checked state */
    checked?: boolean;
    /** Uncontrolled default checked state */
    defaultChecked?: boolean;
    /** Called when the switch is toggled */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Switch.d.ts.map