import { default as React } from 'react';
import { RadioButtonProps } from '../RadioButton';
export interface RadioButtonItemProps extends RadioButtonProps {
    /** Label text displayed beside the radio button */
    label?: string;
    /** Shows a red asterisk after the label */
    required?: boolean;
}
export declare const RadioButtonItem: React.ForwardRefExoticComponent<RadioButtonItemProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=RadioButtonItem.d.ts.map