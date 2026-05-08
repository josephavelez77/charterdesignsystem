import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export type AvatarType = 'initials' | 'icon' | 'image';
export type AvatarSize = 'default' | 'small';
export interface AvatarProps {
    type?: AvatarType;
    size?: AvatarSize;
    /** For type="initials" — 1 or 2 characters */
    initials?: string;
    /** For type="icon" — defaults to faUser */
    icon?: IconDefinition;
    /** For type="image" */
    src?: string;
    alt?: string;
    className?: string;
}
export declare const Avatar: {
    ({ type, size, initials, icon, src, alt, className, }: AvatarProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Avatar.d.ts.map