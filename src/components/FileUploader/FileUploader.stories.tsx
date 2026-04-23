import React, { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FileUploader } from './FileUploader'
import { FileUploaderListItem } from '../FileUploaderListItem/FileUploaderListItem'

const meta: Meta<typeof FileUploader> = {
  title: 'Components/FileUploader',
  component: FileUploader,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 400 }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof meta>

// ── Empty ─────────────────────────────────────────────────────────────────────

export const Empty: Story = {
  args: {
    label: 'Label',
    helperText: 'Helper Text',
    requirements: 'PNG, JPG, PDF up to 10MB',
  },
}

export const EmptyNoLabel: Story = {
  args: { requirements: 'PNG, JPG, PDF up to 10MB' },
}

// ── With files ────────────────────────────────────────────────────────────────

export const WithUploadingFile: Story = {
  render: () => (
    <FileUploader label="Label" helperText="Helper Text" requirements="PNG, JPG, PDF up to 10MB">
      <FileUploaderListItem fileName="image_01.jpg" status="uploading" progress={55} />
    </FileUploader>
  ),
}

export const WithUploadedFiles: Story = {
  render: () => (
    <FileUploader label="Label" helperText="Helper Text">
      <FileUploaderListItem fileName="image_01.jpg" status="uploaded" fileSize={22733} />
      <FileUploaderListItem fileName="report.pdf" status="uploaded" fileSize={1048576} />
    </FileUploader>
  ),
}

export const WithMixedFiles: Story = {
  render: () => (
    <FileUploader label="Label" requirements="PNG, JPG, PDF up to 10MB">
      <FileUploaderListItem fileName="image_01.jpg" status="uploading" progress={70} />
      <FileUploaderListItem fileName="report.pdf" status="uploaded" fileSize={1048576} />
    </FileUploader>
  ),
}

// ── Interactive ───────────────────────────────────────────────────────────────

interface FileEntry {
  id: string
  file: File
  status: 'uploading' | 'uploaded'
  progress: number
}

export const Interactive: Story = {
  render: () => {
    const [files, setFiles] = useState<FileEntry[]>([])

    const handleFilesSelected = (selected: File[]) => {
      const newEntries: FileEntry[] = selected.map((file) => ({
        id: `${file.name}-${Date.now()}`,
        file,
        status: 'uploading',
        progress: 0,
      }))
      setFiles((prev) => [...prev, ...newEntries])

      newEntries.forEach((entry) => {
        let p = 0
        const interval = setInterval(() => {
          p += Math.random() * 15 + 5
          if (p >= 100) {
            p = 100
            clearInterval(interval)
            setFiles((prev) =>
              prev.map((f) => f.id === entry.id ? { ...f, status: 'uploaded', progress: 100 } : f),
            )
          } else {
            setFiles((prev) =>
              prev.map((f) => f.id === entry.id ? { ...f, progress: Math.round(p) } : f),
            )
          }
        }, 300)
      })
    }

    const handleDelete = (id: string) => {
      setFiles((prev) => prev.filter((f) => f.id !== id))
    }

    return (
      <FileUploader
        label="Upload Files"
        helperText="Max file size 10MB"
        requirements="PNG, JPG, PDF, DOCX, XLSX accepted"
        multiple
        onFilesSelected={handleFilesSelected}
      >
        {files.map((entry) => (
          <FileUploaderListItem
            key={entry.id}
            fileName={entry.file.name}
            status={entry.status}
            progress={entry.progress}
            fileSize={entry.file.size}
            onDelete={() => handleDelete(entry.id)}
          />
        ))}
      </FileUploader>
    )
  },
}
