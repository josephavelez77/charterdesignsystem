import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconSize } from '../Icon/Icon';
export type IconButtonVariant = 'brandPrimary' | 'brandSecondary' | 'neutral' | 'ghost';
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** The icon to render — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    icon: IconDefinition;
    /** Color scheme: `brandPrimary` (blue), `brandSecondary` (amber), `neutral` (gray), or `ghost` (transparent). */
    variant?: IconButtonVariant;
    /** Size of the rendered icon. Defaults to `medium`. */
    iconSize?: IconSize;
    /** Required for accessibility — describes the button's action since there is no visible text label. */
    'aria-label': string;
}
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=IconButton.d.ts.map