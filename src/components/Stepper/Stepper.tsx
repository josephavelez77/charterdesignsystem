import React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import { Button } from '../Button/Button'
import styles from './Stepper.module.css'

export interface StepItem {
  /** Display label shown beneath the step badge. */
  label: string
}

export interface StepperProps {
  /** Ordered list of step definitions; each requires a `label`. */
  steps: StepItem[]
  /** 0-indexed index of the currently active step; steps before it are shown as complete. */
  activeStep: number
  /** Called when the user clicks the Next button (not on the last step). */
  onNext?: () => void
  /** Called when the user clicks the Back button (not on the first step). */
  onBack?: () => void
  /** Called when the user clicks the Cancel button. */
  onCancel?: () => void
  /** Called when the user clicks the Done button (on the last step). */
  onDone?: () => void
  /** Label for the cancel button. Defaults to `"Cancel"`. */
  cancelLabel?: string
  /** Label for the back button. Defaults to `"Back"`. */
  backLabel?: string
  /** Label for the next button (all steps except last). Defaults to `"Next"`. */
  nextLabel?: string
  /** Label for the done button (last step). Defaults to `"Done"`. */
  doneLabel?: string
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

type StepState = 'active' | 'upcoming' | 'complete'

function StepBadge({ state, number }: { state: StepState; number: number }) {
  return (
    <div className={[styles.badge, styles[`badge_${state}`]].join(' ')}>
      {state === 'complete'
        ? <Icon icon={faCheck} size="small" />
        : <span className={styles.badgeNumber}>{number}</span>
      }
    </div>
  )
}

export const Stepper = ({
  steps,
  activeStep,
  onNext,
  onBack,
  onCancel,
  onDone,
  cancelLabel = 'Cancel',
  backLabel = 'Back',
  nextLabel = 'Next',
  doneLabel = 'Done',
  className,
}: StepperProps) => {
  const isFirst = activeStep === 0
  const isLast = activeStep === steps.length - 1

  return (
    <div className={[styles.stepper, className ?? ''].filter(Boolean).join(' ')}>
      {/* Steps row */}
      <div className={styles.stepsRow}>
        {steps.map((step, i) => {
          const state: StepState = i < activeStep ? 'complete' : i === activeStep ? 'active' : 'upcoming'
          return (
            <React.Fragment key={i}>
              {i > 0 && <div className={[styles.divider, i <= activeStep ? styles.dividerComplete : ''].filter(Boolean).join(' ')} />}
              <div className={styles.stepItem}>
                <StepBadge state={state} number={i + 1} />
                <span className={[styles.stepLabel, styles[`label_${state}`]].join(' ')}>
                  {step.label}
                </span>
              </div>
            </React.Fragment>
          )
        })}
      </div>

      {/* Controls row */}
      <div className={styles.controls}>
        <div className={styles.leftControls}>
          <Button variant="brandPrimary" emphasis="tertiary" onClick={onCancel}>
            {cancelLabel}
          </Button>
          {!isFirst && (
            <Button variant="neutral" emphasis="secondary" onClick={onBack}>
              {backLabel}
            </Button>
          )}
        </div>
        <Button variant="brandPrimary" emphasis="primary" onClick={isLast ? onDone : onNext}>
          {isLast ? doneLabel : nextLabel}
        </Button>
      </div>
    </div>
  )
}

Stepper.displayName = 'Stepper'
