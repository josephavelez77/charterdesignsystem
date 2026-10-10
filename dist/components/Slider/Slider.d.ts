import { default as React } from 'react';
export type SliderVariant = 'discrete' | 'continuous';
export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'defaultValue' | 'onChange' | 'min' | 'max' | 'step' | 'size'> {
    /** `discrete` snaps between marked steps; `continuous` moves smoothly along an unmarked track. Defaults to `discrete`. */
    variant?: SliderVariant;
    /** Visible label shown above the track (rendered as `Label:`). When omitted, pass `aria-label` for an accessible name. */
    label?: string;
    /** Controlled value; when provided the component is controlled. */
    value?: number;
    /** Initial value for uncontrolled usage — ignored when `value` is provided. Defaults to `min`. */
    defaultValue?: number;
    /** Lowest selectable value. Defaults to `0`. */
    min?: number;
    /** Highest selectable value. Defaults to `100`. */
    max?: number;
    /**
     * Distance between selectable values. Discrete sliders draw a tick at every step and are designed for 3–12 positions;
     * defaults to five evenly spaced positions. Continuous sliders default to `1`.
     */
    step?: number;
    /** Formats the value for the selection text, end labels and screen readers (e.g. `v => \`${v}%\``). Defaults to `String(value)`. */
    formatValue?: (value: number) => string;
    /** Show the current selection next to the label. Defaults to `true`. */
    showSelection?: boolean;
    /** Text under the start of the track. Defaults to `formatValue(min)`. */
    lowLabel?: string;
    /** Text under the end of the track. Defaults to `formatValue(max)`. */
    highLabel?: string;
    /** Show the low end label. Defaults to `true`. */
    showLowLabel?: boolean;
    /** Show the high end label. Defaults to `true`. */
    showHighLabel?: boolean;
    /** When true, the slider is non-interactive and rendered in muted colors. */
    disabled?: boolean;
    /** Called with the new numeric value whenever the user moves the slider. */
    onChange?: (value: number) => void;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Slider.d.ts.map