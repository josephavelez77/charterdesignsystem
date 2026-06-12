import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ButtonVariant } from '../Button/Button';
export interface DialogAction {
    /** Visible text for this action button. */
    label: string;
    /** Called when the user clicks this action button. */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /** When true, the action button is non-interactive. */
    disabled?: boolean;
    /** Color scheme for this action button — defaults to `brandPrimary`. */
    variant?: ButtonVariant;
    /** Optional leading icon — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    leadingIcon?: IconDefinition;
}
export type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface DialogProps {
    /** When true, the dialog is visible; when false, it is removed from the DOM. */
    open: boolean;
    /** Called when the user clicks the scrim or the dismiss ✕ button. */
    onClose?: () => void;
    /** Heading text shown at the top of the dialog. */
    title: string;
    /** Optional secondary text shown below the title. */
    subtitle?: string;
    /** When true (default), renders an ✕ button in the header to close the dialog. */
    dismissible?: boolean;
    /** Fallback body text rendered when no `children` are provided. */
    content?: string;
    /** Custom content rendered in the dialog body — takes precedence over `content`. */
    children?: React.ReactNode;
    /** Primary call-to-action button shown in the dialog footer. */
    primaryAction?: DialogAction;
    /** Secondary action button shown alongside the primary action. */
    secondaryAction?: DialogAction;
    /** Width preset: `xs` ≈ 320 px up to `xl` ≈ full-width. Defaults to `sm`. */
    size?: DialogSize;
    /** Additional CSS class applied to the dialog panel for layout overrides. */
    className?: string;
}
export declare const Dialog: {
    ({ open, onClose, title, subtitle, dismissible, content, children, primaryAction, secondaryAction, size, className, }: DialogProps): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
};
//# sourceMappingURL=Dialog.d.ts.map