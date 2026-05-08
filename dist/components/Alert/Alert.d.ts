import { default as React } from 'react';
export type AlertSeverity = 'error' | 'warning' | 'success' | 'info';
export interface AlertProps {
    severity?: AlertSeverity;
    children: React.ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
    className?: string;
}
export declare const Alert: {
    ({ severity, children, dismissible, onDismiss, className, }: AlertProps): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
};
//# sourceMappingURL=Alert.d.ts.map