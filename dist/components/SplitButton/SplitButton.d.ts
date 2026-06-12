import { ButtonVariant, ButtonEmphasis } from '../Button/Button';
export interface SplitButtonItem {
    /** Text label for this dropdown menu item. */
    label: string;
    /** Called when the user selects this item from the dropdown. */
    onClick?: () => void;
    /** When true, this menu item is non-interactive. */
    disabled?: boolean;
}
export interface SplitButtonProps {
    /** Text label for the primary (left) button. */
    label: string;
    /** Called when the user clicks the primary (left) button. */
    onClick?: () => void;
    /** Additional actions rendered in the chevron dropdown menu. */
    items: SplitButtonItem[];
    /** Color scheme: `brandPrimary` (blue), `brandSecondary` (amber), `neutral` (gray), or `statusError` (red). */
    variant?: ButtonVariant;
    /** Fill style: `primary` (filled), `secondary` (outlined), `tertiary` (ghost). */
    emphasis?: ButtonEmphasis;
    /** When true, both the primary button and the chevron are disabled. */
    disabled?: boolean;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const SplitButton: {
    ({ label, onClick, items, variant, emphasis, disabled, className, }: SplitButtonProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=SplitButton.d.ts.map