import React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import { Button } from '../Button/Button'
import styles from './Stepper.module.css'

export interface StepItem {
  label: string
}

export interface StepperProps {
  steps: StepItem[]
  /** 0-indexed */
  activeStep: number
  onNext?: () => void
  onBack?: () => void
  onCancel?: () => void
  onDone?: () => void
  cancelLabel?: string
  backLabel?: string
  nextLabel?: string
  doneLabel?: string
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
            <Button variant="brandSecondary" emphasis="secondary" onClick={onBack}>
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
