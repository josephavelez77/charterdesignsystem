import React, { useId } from "react";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button, type ButtonVariant } from "../Button/Button";
import { IconButton } from "../IconButton/IconButton";
import { Icon } from "../Icon/Icon";
import styles from "./Dialog.module.css";

export interface DialogAction {
  /** Visible text for this action button. */
  label: string;
  /** Called when the user clicks this action button. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** When true, the action button is non-interactive. */
  disabled?: boolean;
  /** Color scheme for this action button — defaults to `brandPrimary`. */
  variant?: ButtonVariant;
  /** Optional leading icon — accepts an `IconDefinition` from `@fortawesome/fontawesome-svg-core`. */
  leadingIcon?: IconDefinition;
}

export type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface DialogProps {
  /** When true, the dialog is visible; when false, it is removed from the DOM. */
  open: boolean;
  /** Called when the user clicks the scrim or the dismiss ✕ button. */
  onClose?: () => void;
  /** Heading text shown at the top of the dialog. */
  title: string;
  /** Optional secondary text shown below the title. */
  subtitle?: string;
  /** When true (default), renders an ✕ button in the header to close the dialog. */
  dismissible?: boolean;
  /** Fallback body text rendered when no `children` are provided. */
  content?: string;
  /** Custom content rendered in the dialog body — takes precedence over `content`. */
  children?: React.ReactNode;
  /** Primary call-to-action button shown in the dialog footer. */
  primaryAction?: DialogAction;
  /** Secondary action button shown alongside the primary action. */
  secondaryAction?: DialogAction;
  /** Width preset: `xs` ≈ 320 px up to `xl` ≈ full-width. Defaults to `sm`. */
  size?: DialogSize;
  /** Additional CSS class applied to the dialog panel for layout overrides. */
  className?: string;
}

export const Dialog = ({
  open,
  onClose,
  title,
  subtitle,
  dismissible = true,
  content,
  children,
  primaryAction,
  secondaryAction,
  size = 'sm',
  className,
}: DialogProps) => {
  const titleId = useId();

  if (!open) return null;

  return (
    <div className={styles.scrim} onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={[styles.dialog, styles[size], className].filter(Boolean).join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2 id={titleId} className={styles.title}>
              {title}
            </h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          {dismissible && (
            <IconButton
              icon={faXmark}
              variant="brandPrimary"
              aria-label="Dismiss dialog"
              onClick={onClose}
            />
          )}
        </div>

        <div className={styles.content}>
          {children ??
            (content && <p className={styles.contentText}>{content}</p>)}
        </div>

        {(primaryAction || secondaryAction) && (
          <div className={styles.actions}>
            {secondaryAction && (
              <Button
                variant={secondaryAction.variant ?? "brandPrimary"}
                emphasis="tertiary"
                leadingIcon={secondaryAction.leadingIcon && <Icon icon={secondaryAction.leadingIcon} />}
                onClick={secondaryAction.onClick}
                disabled={secondaryAction.disabled}
              >
                {secondaryAction.label}
              </Button>
            )}
            {primaryAction && (
              <Button
                variant={primaryAction.variant ?? "brandPrimary"}
                emphasis="primary"
                leadingIcon={primaryAction.leadingIcon && <Icon icon={primaryAction.leadingIcon} />}
                onClick={primaryAction.onClick}
                disabled={primaryAction.disabled}
              >
                {primaryAction.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

Dialog.displayName = "Dialog";
