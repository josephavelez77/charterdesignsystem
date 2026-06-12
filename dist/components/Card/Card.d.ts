import { default as React } from 'react';
export interface CardAction {
    /** Visible text for the action button. */
    label: string;
    /** Called when the user clicks the action button. */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /** When true, the action button is non-interactive. */
    disabled?: boolean;
}
export interface CardProps {
    /** Heading text displayed at the top of the card. */
    title: string;
    /** Optional secondary text displayed below the title. */
    subtitle?: string;
    /** Fallback text body rendered when no `children` are provided. */
    content?: string;
    /** Custom content rendered in the card body — takes precedence over `content`. */
    children?: React.ReactNode;
    /** URL of an image rendered as a full-width banner above the card header. */
    mediaSrc?: string;
    /** Alt text for the media image. */
    mediaAlt?: string;
    /** Primary call-to-action button shown in the card footer. */
    primaryAction?: CardAction;
    /** Secondary action button shown alongside the primary action in the footer. */
    secondaryAction?: CardAction;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const Card: {
    ({ title, subtitle, content, children, mediaSrc, mediaAlt, primaryAction, secondaryAction, className, }: CardProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Card.d.ts.map