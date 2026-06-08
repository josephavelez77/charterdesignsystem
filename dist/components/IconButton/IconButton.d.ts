import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconSize } from '../Icon/Icon';
export type IconButtonVariant = 'brandPrimary' | 'brandSecondary' | 'neutral' | 'ghost';
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: IconDefinition;
    variant?: IconButtonVariant;
    iconSize?: IconSize;
    /** Required for accessibility when there is no surrounding visible label */
    'aria-label': string;
}
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=IconButton.d.ts.map