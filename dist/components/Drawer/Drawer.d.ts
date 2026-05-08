import { default as React } from 'react';
export interface DrawerAction {
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}
export interface DrawerProps {
    open: boolean;
    onClose?: () => void;
    title: string;
    subtitle?: string;
    dismissible?: boolean;
    content?: string;
    children?: React.ReactNode;
    primaryAction?: DrawerAction;
    secondaryAction?: DrawerAction;
    className?: string;
}
export declare const Drawer: {
    ({ open, onClose, title, subtitle, dismissible, content, children, primaryAction, secondaryAction, className, }: DrawerProps): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
};
//# sourceMappingURL=Drawer.d.ts.map