import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visible text displayed in the menu item. */
    label: string;
    /** Optional icon to the left of the label — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    leadingIcon?: IconDefinition;
    /** Optional icon to the right of the label — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    trailingIcon?: IconDefinition;
    /** When true, applies the selected/active highlight style to the item. */
    selected?: boolean;
    /** `default` uses standard text color; `danger` uses the error/destructive color. */
    variant?: 'default' | 'danger';
}
export declare const MenuItem: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=MenuItem.d.ts.map