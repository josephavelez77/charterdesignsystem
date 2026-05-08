import { ButtonVariant, ButtonEmphasis } from '../Button/Button';
export interface SplitButtonItem {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
}
export interface SplitButtonProps {
    label: string;
    onClick?: () => void;
    items: SplitButtonItem[];
    variant?: ButtonVariant;
    emphasis?: ButtonEmphasis;
    disabled?: boolean;
    className?: string;
}
export declare const SplitButton: {
    ({ label, onClick, items, variant, emphasis, disabled, className, }: SplitButtonProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=SplitButton.d.ts.map