import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface AttributeChipProps {
    /** Text displayed inside the chip. */
    label: string;
    /** Optional leading icon — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    icon?: IconDefinition;
    /** When true, the dismiss button is disabled and the chip appears muted. */
    disabled?: boolean;
    /** Called when the user clicks the ✕ dismiss button inside the chip. */
    onDismiss?: () => void;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const AttributeChip: React.ForwardRefExoticComponent<AttributeChipProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=AttributeChip.d.ts.map