export interface FileUploaderListItemProps {
    /** The file's name including extension, used to derive the file type icon. */
    fileName: string;
    /** `uploading` shows a progress bar; `uploaded` shows the file size and a delete button. */
    status: 'uploading' | 'uploaded';
    /** 0–100. Used when status is 'uploading'. */
    progress?: number;
    /** File size in bytes. Displayed when status is 'uploaded'. */
    fileSize?: number;
    /** Called when the user clicks the delete/trash button (only visible when `status="uploaded"`). */
    onDelete?: () => void;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const FileUploaderListItem: {
    ({ fileName, status, progress, fileSize, onDelete, className, }: FileUploaderListItemProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=FileUploaderListItem.d.ts.map