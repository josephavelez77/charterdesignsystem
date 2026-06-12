import { default as React } from 'react';
export interface DrawerAction {
    /** Visible text for this action button. */
    label: string;
    /** Called when the user clicks this action button. */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /** When true, the action button is non-interactive. */
    disabled?: boolean;
}
export interface DrawerProps {
    /** When true, slides the drawer into view; when false, slides it out with an exit animation. */
    open: boolean;
    /** Called when the user clicks the scrim or the dismiss ✕ button. */
    onClose?: () => void;
    /** Heading text shown in the drawer header. */
    title: string;
    /** Optional secondary text displayed below the title. */
    subtitle?: string;
    /** When true (default), renders an ✕ button in the header to close the drawer. */
    dismissible?: boolean;
    /** Fallback body text rendered when no `children` are provided. */
    content?: string;
    /** Custom content rendered in the drawer body — takes precedence over `content`. */
    children?: React.ReactNode;
    /** Primary call-to-action button shown in the drawer footer. */
    primaryAction?: DrawerAction;
    /** Secondary action button shown alongside the primary action in the footer. */
    secondaryAction?: DrawerAction;
    /** Additional CSS class applied to the drawer panel for layout overrides. */
    className?: string;
}
export declare const Drawer: {
    ({ open, onClose, title, subtitle, dismissible, content, children, primaryAction, secondaryAction, className, }: DrawerProps): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
};
//# sourceMappingURL=Drawer.d.ts.map