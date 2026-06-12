import { default as React } from 'react';
import { RadioButtonProps } from '../RadioButton';
export interface RadioButtonItemProps extends RadioButtonProps {
    /** Text label displayed to the right of the radio button. */
    label?: string;
    /** When true, shows a red asterisk after the label. */
    required?: boolean;
}
export declare const RadioButtonItem: React.ForwardRefExoticComponent<RadioButtonItemProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=RadioButtonItem.d.ts.map