import React, { useId } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button/Button";
import { IconButton } from "../IconButton/IconButton";
import styles from "./Dialog.module.css";

export interface DialogAction {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title: string;
  subtitle?: string;
  dismissible?: boolean;
  content?: string;
  children?: React.ReactNode;
  primaryAction?: DialogAction;
  secondaryAction?: DialogAction;
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
        className={[styles.dialog, className].filter(Boolean).join(" ")}
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
                variant="brandPrimary"
                emphasis="tertiary"
                onClick={secondaryAction.onClick}
                disabled={secondaryAction.disabled}
              >
                {secondaryAction.label}
              </Button>
            )}
            {primaryAction && (
              <Button
                variant="brandPrimary"
                emphasis="primary"
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
