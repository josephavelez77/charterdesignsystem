import { default as React } from 'react';
export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';
export interface TooltipProps {
    /** Text shown inside the tooltip bubble. */
    content: string;
    /** Preferred side the tooltip appears relative to the trigger. Defaults to `top`. */
    placement?: TooltipPlacement;
    /** The trigger element — the tooltip is shown on hover/focus of this element. */
    children: React.ReactElement;
}
export declare const Tooltip: {
    ({ content, placement, children }: TooltipProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Tooltip.d.ts.map