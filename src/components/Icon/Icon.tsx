import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Icon.module.css'

export type IconSize = 'xs' | 'small' | 'medium' | 'large' | 'xl'

export interface IconProps {
  /** Font Awesome icon definition, e.g. faHouse from @fortawesome/free-solid-svg-icons */
  icon: IconDefinition
  size?: IconSize
  className?: string
  /** Provide when the icon conveys meaning on its own (no surrounding text) */
  'aria-label'?: string
}

export const Icon = ({
  icon,
  size = 'medium',
  className,
  'aria-label': ariaLabel,
}: IconProps) => {
  const classNames = [styles.icon, styles[size], className].filter(Boolean).join(' ')

  return (
    <span
      className={classNames}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      role={ariaLabel ? 'img' : undefined}
    >
      <FontAwesomeIcon icon={icon} aria-hidden />
    </span>
  )
}

Icon.displayName = 'Icon'
