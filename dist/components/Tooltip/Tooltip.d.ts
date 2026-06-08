import { default as React } from 'react';
export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';
export interface TooltipProps {
    content: string;
    placement?: TooltipPlacement;
    children: React.ReactElement;
}
export declare const Tooltip: {
    ({ content, placement, children }: TooltipProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Tooltip.d.ts.map