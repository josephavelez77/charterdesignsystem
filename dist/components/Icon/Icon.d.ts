import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export type IconSize = 'xs' | 'small' | 'medium' | 'large' | 'xl';
export interface IconProps {
    /** Font Awesome icon definition — e.g. `faHouse` from `@fortawesome/free-solid-svg-icons`. */
    icon: IconDefinition;
    /** Visual size: `xs` (10 px) → `xl` (24 px). Defaults to `medium`. */
    size?: IconSize;
    /** Overrides the CSS `color` of the icon; accepts any valid CSS color value or token variable. */
    color?: string;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
    /** Provide when the icon conveys meaning on its own (no surrounding text) — sets `role="img"` and removes `aria-hidden`. */
    'aria-label'?: string;
}
export declare const Icon: {
    ({ icon, size, color, className, "aria-label": ariaLabel, }: IconProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Icon.d.ts.map