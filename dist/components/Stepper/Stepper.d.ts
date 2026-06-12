export interface StepItem {
    /** Display label shown beneath the step badge. */
    label: string;
}
export interface StepperProps {
    /** Ordered list of step definitions; each requires a `label`. */
    steps: StepItem[];
    /** 0-indexed index of the currently active step; steps before it are shown as complete. */
    activeStep: number;
    /** Called when the user clicks the Next button (not on the last step). */
    onNext?: () => void;
    /** Called when the user clicks the Back button (not on the first step). */
    onBack?: () => void;
    /** Called when the user clicks the Cancel button. */
    onCancel?: () => void;
    /** Called when the user clicks the Done button (on the last step). */
    onDone?: () => void;
    /** Label for the cancel button. Defaults to `"Cancel"`. */
    cancelLabel?: string;
    /** Label for the back button. Defaults to `"Back"`. */
    backLabel?: string;
    /** Label for the next button (all steps except last). Defaults to `"Next"`. */
    nextLabel?: string;
    /** Label for the done button (last step). Defaults to `"Done"`. */
    doneLabel?: string;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const Stepper: {
    ({ steps, activeStep, onNext, onBack, onCancel, onDone, cancelLabel, backLabel, nextLabel, doneLabel, className, }: StepperProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Stepper.d.ts.map