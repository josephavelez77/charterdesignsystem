import React, { useId, useRef, useState } from 'react'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../Icon/Icon'
import styles from './FileUploader.module.css'

export interface FileUploaderProps {
  /** Visible label text displayed above the drop zone. */
  label?: string
  /** Helper text shown below the drop zone. */
  hint?: string
  /** Optional accepted file type / size requirements shown inside the drop zone. */
  requirements?: string
  /** `FileUploaderListItem` elements rendered inside the drop zone below the upload prompt. */
  children?: React.ReactNode
  /** Called with the array of selected `File` objects when the user drops or picks files. */
  onFilesSelected?: (files: File[]) => void
  /** Value for the hidden file input's `accept` attribute, e.g. `"image/*"` or `".pdf,.docx"`. */
  accept?: string
  /** When true, allows the user to select multiple files at once. */
  multiple?: boolean
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

export const FileUploader = ({
  label,
  hint,
  requirements,
  children,
  onFilesSelected,
  accept,
  multiple,
  className,
}: FileUploaderProps) => {
  const inputId = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDragActive, setIsDragActive] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragActive(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragActive(false)
    const files = Array.from(e.dataTransfer.files)
    if (files.length) onFilesSelected?.(files)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? [])
    if (files.length) onFilesSelected?.(files)
    e.target.value = ''
  }

  const containerClass = [
    styles.container,
    isDragActive ? styles.dragActive : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={[styles.wrapper, className ?? ''].filter(Boolean).join(' ')}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}

      <div
        className={containerClass}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className={styles.dropZone}>
          <Icon icon={faUpload} size="large" className={styles.uploadIcon} />
          <p className={styles.dropText}>
            <button
              type="button"
              className={styles.clickToUpload}
              onClick={() => inputRef.current?.click()}
            >
              Click to upload
            </button>
            {', or drag and drop files here.'}
          </p>
          {requirements && (
            <p className={styles.requirements}>{requirements}</p>
          )}
        </div>

        {children && <div className={styles.fileList}>{children}</div>}
      </div>

      {hint && <span className={styles.hintText}>{hint}</span>}

      <input
        ref={inputRef}
        id={inputId}
        type="file"
        className={styles.hiddenInput}
        accept={accept}
        multiple={multiple}
        onChange={handleInputChange}
      />
    </div>
  )
}

FileUploader.displayName = 'FileUploader'
