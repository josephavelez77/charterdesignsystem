import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    leadingIcon?: IconDefinition;
    trailingIcon?: IconDefinition;
    selected?: boolean;
    variant?: 'default' | 'danger';
}
export declare const MenuItem: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=MenuItem.d.ts.map