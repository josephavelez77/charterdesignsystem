import { default as React } from 'react';
export type ToastUrgency = 'error' | 'warning' | 'success' | 'information' | 'none';
export interface ToastProps {
    urgency?: ToastUrgency;
    children: React.ReactNode;
    /** Label for the optional action button, e.g. "Undo" */
    action?: string;
    onAction?: () => void;
    /** Duration in ms before auto-dismiss. 0 = stays until manually dismissed. */
    duration?: number;
    /** Called after the exit animation completes */
    onDismiss?: () => void;
    className?: string;
}
export declare const Toast: {
    ({ urgency, children, action, onAction, duration, onDismiss, className, }: ToastProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Toast.d.ts.map