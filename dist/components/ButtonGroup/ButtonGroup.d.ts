import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ButtonVariant, ButtonEmphasis } from '../Button/Button';
export interface ButtonGroupItem {
    /** Visible text label for this button. */
    label: string;
    /** Called when the user clicks this button. */
    onClick?: () => void;
    /** When true, this button is non-interactive and appears muted. */
    disabled?: boolean;
    /** Optional icon displayed to the left of the label — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    leadingIcon?: IconDefinition;
    /** Optional icon displayed to the right of the label — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    trailingIcon?: IconDefinition;
}
export interface ButtonGroupProps {
    /** Array of button definitions rendered as a connected segmented control. */
    items: ButtonGroupItem[];
    /** Color scheme applied to every button: `brandPrimary` (blue), `brandSecondary` (amber), `neutral` (gray), or `statusError` (red). */
    variant?: ButtonVariant;
    /** Fill style applied to every button: `primary` (filled), `secondary` (outlined), `tertiary` (ghost). */
    emphasis?: ButtonEmphasis;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const ButtonGroup: {
    ({ items, variant, emphasis, className, }: ButtonGroupProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=ButtonGroup.d.ts.map