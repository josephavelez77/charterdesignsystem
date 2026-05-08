import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ButtonVariant } from '../Button/Button';
export interface DialogAction {
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    variant?: ButtonVariant;
    leadingIcon?: IconDefinition;
}
export type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface DialogProps {
    open: boolean;
    onClose?: () => void;
    title: string;
    subtitle?: string;
    dismissible?: boolean;
    content?: string;
    children?: React.ReactNode;
    primaryAction?: DialogAction;
    secondaryAction?: DialogAction;
    size?: DialogSize;
    className?: string;
}
export declare const Dialog: {
    ({ open, onClose, title, subtitle, dismissible, content, children, primaryAction, secondaryAction, size, className, }: DialogProps): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
};
//# sourceMappingURL=Dialog.d.ts.map