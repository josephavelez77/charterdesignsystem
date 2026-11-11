import { default as React } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export type SegmentedControlVariant = 'brandPrimary' | 'brandSecondary' | 'neutral';
export interface SegmentedControlOption {
    /** Value reported to `onChange` and matched against `value` / `defaultValue`. Must be unique within the control. */
    value: string;
    /** Visible text label for the segment. Keep it short — one or two words. */
    label: string;
    /** Optional icon shown before the label — an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    leadingIcon?: IconDefinition;
    /** Optional icon shown after the label — an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
    trailingIcon?: IconDefinition;
    /** When true, only this segment is non-interactive. Defaults to `false`. */
    disabled?: boolean;
}
export interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
    /** The segments to render, in order. Two to five options are recommended. */
    options: SegmentedControlOption[];
    /** Value of the active segment (controlled). Pair with `onChange`. */
    value?: string;
    /** Value of the initially active segment (uncontrolled). Defaults to the first option's value. */
    defaultValue?: string;
    /** Called with the newly selected option's `value` when the user picks a segment. */
    onChange?: (value: string) => void;
    /** Fill colour of the active segment: `brandPrimary` (blue), `brandSecondary` (rose) or `neutral` (inverse). Defaults to `brandPrimary`. */
    variant?: SegmentedControlVariant;
    /** When true, the whole control is non-interactive and rendered in the disabled colours. Defaults to `false`. */
    disabled?: boolean;
    /** When true, every segment takes the width of the widest one so the control reads as an even row. When false, each segment hugs its own label. Defaults to `true`. */
    equalWidth?: boolean;
    /** Form field name shared by the underlying radio inputs. Defaults to an auto-generated id. */
    name?: string;
    /** Accessible name for the group. Required unless `aria-labelledby` is provided. */
    'aria-label'?: string;
    /** Id of an element that labels the group, as an alternative to `aria-label`. */
    'aria-labelledby'?: string;
    /** Additional CSS class applied to the root element. */
    className?: string;
}
export declare const SegmentedControl: React.ForwardRefExoticComponent<SegmentedControlProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SegmentedControl.d.ts.map