import { default as React } from 'react';
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'role'> {
    /** Controlled on/off state; when provided the component is controlled. */
    checked?: boolean;
    /** Initial on/off state for uncontrolled usage — ignored when `checked` is provided. */
    defaultChecked?: boolean;
    /** Called with the native change event whenever the switch is toggled. */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /** Additional CSS class applied to the track element for layout overrides. */
    className?: string;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Switch.d.ts.map