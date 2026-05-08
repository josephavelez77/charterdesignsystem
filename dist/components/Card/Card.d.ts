import { default as React } from 'react';
export interface CardAction {
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}
export interface CardProps {
    title: string;
    subtitle?: string;
    content?: string;
    children?: React.ReactNode;
    mediaSrc?: string;
    mediaAlt?: string;
    primaryAction?: CardAction;
    secondaryAction?: CardAction;
    className?: string;
}
export declare const Card: {
    ({ title, subtitle, content, children, mediaSrc, mediaAlt, primaryAction, secondaryAction, className, }: CardProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Card.d.ts.map