import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export type AvatarType = 'initials' | 'icon' | 'image';
export type AvatarSize = 'default' | 'small';
export type AvatarColor = 'brandPrimary' | 'brandSecondary';
export interface AvatarProps {
    /** Rendering mode: `initials` shows text, `icon` shows a FontAwesome icon, `image` shows a photo. */
    type?: AvatarType;
    /** `default` is the standard size; `small` is a compact variant used in lists. */
    size?: AvatarSize;
    /** Background color for initials and icon types — `brandPrimary` (blue) or `brandSecondary` (amber). */
    color?: AvatarColor;
    /** 1- or 2-character string displayed when `type="initials"`. */
    initials?: string;
    /** Icon shown when `type="icon"` — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`; defaults to `faUser`. */
    icon?: IconDefinition;
    /** Image URL used when `type="image"`. */
    src?: string;
    /** Alt text for the image when `type="image"`. */
    alt?: string;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const Avatar: {
    ({ type, size, color, initials, icon, src, alt, className, }: AvatarProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Avatar.d.ts.map