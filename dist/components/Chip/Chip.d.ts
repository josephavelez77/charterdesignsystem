import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface ChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
    /** Visible text inside the chip. */
    label: string;
    /** Optional leading icon — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    icon?: IconDefinition;
    /** Controlled selected state; when provided the component is controlled. */
    selected?: boolean;
    /** Initial selected state for uncontrolled usage — ignored when `selected` is provided. */
    defaultSelected?: boolean;
    /** Called when the chip is toggled; receives the new selected state as a boolean. */
    onChange?: (selected: boolean) => void;
}
export declare const Chip: React.ForwardRefExoticComponent<ChipProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Chip.d.ts.map