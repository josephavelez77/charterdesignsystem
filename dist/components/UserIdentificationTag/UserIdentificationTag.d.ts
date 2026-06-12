import { AvatarType } from '../Avatar/Avatar';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface UserIdentificationTagProps {
    /** Full display name shown below the avatar. */
    name: string;
    /** User identifier string (e.g. email or system ID) shown beneath the name. */
    userId: string;
    /** Avatar rendering mode: `initials`, `icon`, or `image`. Defaults to `initials`. */
    avatarType?: AvatarType;
    /** Image URL used when `avatarType="image"`. */
    avatarSrc?: string;
    /** 1–2 character string used when `avatarType="initials"`. */
    avatarInitials?: string;
    /** Icon used when `avatarType="icon"` — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    avatarIcon?: IconDefinition;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const UserIdentificationTag: {
    ({ name, userId, avatarType, avatarSrc, avatarInitials, avatarIcon, className, }: UserIdentificationTagProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=UserIdentificationTag.d.ts.map