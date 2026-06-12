import { default as React } from 'react';
export type ToastUrgency = 'error' | 'warning' | 'success' | 'information' | 'none';
export interface ToastProps {
    /** Semantic severity: `error` (red), `warning` (amber), `success` (green), `information` (blue), or `none` (neutral). Controls icon and background. */
    urgency?: ToastUrgency;
    /** Content rendered inside the component. */
    children: React.ReactNode;
    /** Label for the optional action button, e.g. `"Undo"` — renders the button when provided. */
    action?: string;
    /** Called when the user clicks the action button. */
    onAction?: () => void;
    /** Duration in ms before the toast auto-dismisses. Pass `0` to keep it visible until the user acts. Defaults to `5000`. */
    duration?: number;
    /** Called after the exit animation completes; use this to remove the toast from state. */
    onDismiss?: () => void;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const Toast: {
    ({ urgency, children, action, onAction, duration, onDismiss, className, }: ToastProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Toast.d.ts.map