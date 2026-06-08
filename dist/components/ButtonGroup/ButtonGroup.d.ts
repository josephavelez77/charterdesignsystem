import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ButtonVariant, ButtonEmphasis } from '../Button/Button';
export interface ButtonGroupItem {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    leadingIcon?: IconDefinition;
    trailingIcon?: IconDefinition;
}
export interface ButtonGroupProps {
    items: ButtonGroupItem[];
    variant?: ButtonVariant;
    emphasis?: ButtonEmphasis;
    className?: string;
}
export declare const ButtonGroup: {
    ({ items, variant, emphasis, className, }: ButtonGroupProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=ButtonGroup.d.ts.map