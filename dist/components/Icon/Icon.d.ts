import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export type IconSize = 'xs' | 'small' | 'medium' | 'large' | 'xl';
export interface IconProps {
    /** Font Awesome icon definition, e.g. faHouse from @fortawesome/free-solid-svg-icons */
    icon: IconDefinition;
    size?: IconSize;
    color?: string;
    className?: string;
    /** Provide when the icon conveys meaning on its own (no surrounding text) */
    'aria-label'?: string;
}
export declare const Icon: {
    ({ icon, size, color, className, "aria-label": ariaLabel, }: IconProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Icon.d.ts.map