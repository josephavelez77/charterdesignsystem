import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FileUploaderListItem } from './FileUploaderListItem'

const meta: Meta<typeof FileUploaderListItem> = {
  title: 'Components/FileUploaderListItem',
  component: FileUploaderListItem,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof meta>

export const Uploading: Story = {
  args: { fileName: 'image_01.jpg', status: 'uploading', progress: 45 },
}

export const Uploaded: Story = {
  args: { fileName: 'image_01.jpg', status: 'uploaded', fileSize: 22733 },
}

export const UploadedPDF: Story = {
  args: { fileName: 'report.pdf', status: 'uploaded', fileSize: 1048576 },
}

export const UploadedWord: Story = {
  args: { fileName: 'document.docx', status: 'uploaded', fileSize: 204800 },
}

export const UploadedExcel: Story = {
  args: { fileName: 'spreadsheet.xlsx', status: 'uploaded', fileSize: 512000 },
}

export const AllFileTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 360 }}>
      <FileUploaderListItem fileName="image_01.jpg" status="uploading" progress={60} />
      <FileUploaderListItem fileName="report.pdf" status="uploaded" fileSize={1048576} />
      <FileUploaderListItem fileName="document.docx" status="uploaded" fileSize={204800} />
      <FileUploaderListItem fileName="spreadsheet.xlsx" status="uploaded" fileSize={512000} />
      <FileUploaderListItem fileName="archive.zip" status="uploaded" fileSize={8388608} />
    </div>
  ),
}
