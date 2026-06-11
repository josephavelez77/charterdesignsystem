import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Icon.module.css'

export type IconSize = 'xs' | 'small' | 'medium' | 'large' | 'xl'

export interface IconProps {
  /** Font Awesome icon definition — e.g. `faHouse` from `@fortawesome/free-solid-svg-icons`. */
  icon: IconDefinition
  /** Visual size: `xs` (10 px) → `xl` (24 px). Defaults to `medium`. */
  size?: IconSize
  /** Overrides the CSS `color` of the icon; accepts any valid CSS color value or token variable. */
  color?: string
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
  /** Provide when the icon conveys meaning on its own (no surrounding text) — sets `role="img"` and removes `aria-hidden`. */
  'aria-label'?: string
}

export const Icon = ({
  icon,
  size = 'medium',
  color,
  className,
  'aria-label': ariaLabel,
}: IconProps) => {
  const classNames = [styles.icon, styles[size], className].filter(Boolean).join(' ')

  return (
    <span
      className={classNames}
      style={color ? { color } : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      role={ariaLabel ? 'img' : undefined}
    >
      <FontAwesomeIcon icon={icon} aria-hidden />
    </span>
  )
}

Icon.displayName = 'Icon'
