import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { AvatarProps } from '../Avatar/Avatar';
type LeadingSlot = {
    leadingIcon: IconDefinition;
    leadingAvatar?: never;
} | {
    leadingAvatar: AvatarProps;
    leadingIcon?: never;
} | {
    leadingIcon?: never;
    leadingAvatar?: never;
};
type InteractiveProps = {
    interactive: true;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
} | {
    interactive?: false;
    onClick?: never;
    disabled?: never;
};
export type ListItemProps = {
    title: string;
    subtitle?: string;
    className?: string;
} & LeadingSlot & InteractiveProps;
export declare const ListItem: React.ForwardRefExoticComponent<ListItemProps & React.RefAttributes<HTMLElement>>;
export {};
//# sourceMappingURL=ListItem.d.ts.map