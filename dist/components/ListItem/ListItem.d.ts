import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { AvatarProps } from '../Avatar/Avatar';
type LeadingSlot = 
/** Mutually exclusive leading slot: provide either an icon or an avatar, not both. */
{
    leadingIcon: IconDefinition;
    leadingAvatar?: never;
} | {
    leadingAvatar: AvatarProps;
    leadingIcon?: never;
} | {
    leadingIcon?: never;
    leadingAvatar?: never;
};
type InteractiveProps = 
/** When `interactive` is true the item renders as a `<button>` and shows a trailing chevron. */
{
    interactive: true; /** Called when the interactive item is clicked. */
    onClick?: React.MouseEventHandler<HTMLButtonElement>; /** When true, the item is non-interactive and appears muted. */
    disabled?: boolean;
} | {
    interactive?: false;
    onClick?: never;
    disabled?: never;
};
export type ListItemProps = {
    /** Primary text displayed in the list item. */
    title: string;
    /** Optional secondary text or node displayed below the title. */
    subtitle?: React.ReactNode;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
} & LeadingSlot & InteractiveProps;
export declare const ListItem: React.ForwardRefExoticComponent<ListItemProps & React.RefAttributes<HTMLElement>>;
export {};
//# sourceMappingURL=ListItem.d.ts.map