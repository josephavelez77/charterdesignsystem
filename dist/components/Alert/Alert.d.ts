import { default as React } from 'react';
export type AlertSeverity = 'error' | 'warning' | 'success' | 'info';
export interface AlertProps {
    /** Visual severity: `error` (red), `warning` (amber), `success` (green), or `info` (blue). Defaults to `info`. */
    severity?: AlertSeverity;
    /** Content rendered inside the component. */
    children: React.ReactNode;
    /** When true, renders an ✕ button that removes the alert from the DOM on click. */
    dismissible?: boolean;
    /** Called after the user clicks the dismiss button, once the alert has been hidden. */
    onDismiss?: () => void;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const Alert: {
    ({ severity, children, dismissible, onDismiss, className, }: AlertProps): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
};
//# sourceMappingURL=Alert.d.ts.map