import React from 'react'
import { faFile, faFilePdf, faFileWord, faFileExcel, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from '../IconButton/IconButton'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import styles from './FileUploaderListItem.module.css'

function getFileIcon(fileName: string) {
  const ext = fileName.split('.').pop()?.toLowerCase()
  switch (ext) {
    case 'pdf': return faFilePdf
    case 'doc': case 'docx': return faFileWord
    case 'xls': case 'xlsx': return faFileExcel
    default: return faFile
  }
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes}B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}kb`
  return `${(bytes / (1024 * 1024)).toFixed(1)}mb`
}

export interface FileUploaderListItemProps {
  /** The file's name including extension, used to derive the file type icon. */
  fileName: string
  /** `uploading` shows a progress bar; `uploaded` shows the file size and a delete button. */
  status: 'uploading' | 'uploaded'
  /** 0–100. Used when status is 'uploading'. */
  progress?: number
  /** File size in bytes. Displayed when status is 'uploaded'. */
  fileSize?: number
  /** Called when the user clicks the delete/trash button (only visible when `status="uploaded"`). */
  onDelete?: () => void
  /** Additional CSS class applied to the root element for layout overrides. */
  className?: string
}

export const FileUploaderListItem = ({
  fileName,
  status,
  progress = 0,
  fileSize,
  onDelete,
  className,
}: FileUploaderListItemProps) => {
  const icon = getFileIcon(fileName)

  return (
    <div className={[styles.item, className ?? ''].filter(Boolean).join(' ')}>
      <FontAwesomeIcon
        icon={icon}
        className={styles.fileIcon}
        aria-hidden
      />
      <div className={styles.content}>
        <span className={styles.fileName}>{fileName}</span>
        {status === 'uploading' ? (
          <ProgressBar value={progress} />
        ) : (
          <span className={styles.fileSize}>
            {fileSize !== undefined ? formatFileSize(fileSize) : ''}
          </span>
        )}
      </div>
      {status === 'uploaded' && (
        <IconButton
          icon={faTrash}
          variant="brandPrimary"
          iconSize="small"
          aria-label={`Remove ${fileName}`}
          onClick={onDelete}
        />
      )}
    </div>
  )
}

FileUploaderListItem.displayName = 'FileUploaderListItem'
