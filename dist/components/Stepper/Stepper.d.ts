export interface StepItem {
    label: string;
}
export interface StepperProps {
    steps: StepItem[];
    /** 0-indexed */
    activeStep: number;
    onNext?: () => void;
    onBack?: () => void;
    onCancel?: () => void;
    onDone?: () => void;
    cancelLabel?: string;
    backLabel?: string;
    nextLabel?: string;
    doneLabel?: string;
    className?: string;
}
export declare const Stepper: {
    ({ steps, activeStep, onNext, onBack, onCancel, onDone, cancelLabel, backLabel, nextLabel, doneLabel, className, }: StepperProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Stepper.d.ts.map