import { AvatarType } from '../Avatar/Avatar';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface UserIdentificationTagProps {
    name: string;
    userId: string;
    avatarType?: AvatarType;
    avatarSrc?: string;
    avatarInitials?: string;
    avatarIcon?: IconDefinition;
    className?: string;
}
export declare const UserIdentificationTag: {
    ({ name, userId, avatarType, avatarSrc, avatarInitials, avatarIcon, className, }: UserIdentificationTagProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=UserIdentificationTag.d.ts.map