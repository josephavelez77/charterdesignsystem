export interface FileUploaderListItemProps {
    fileName: string;
    status: 'uploading' | 'uploaded';
    /** 0–100. Used when status is 'uploading'. */
    progress?: number;
    /** Bytes. Displayed when status is 'uploaded'. */
    fileSize?: number;
    onDelete?: () => void;
    className?: string;
}
export declare const FileUploaderListItem: {
    ({ fileName, status, progress, fileSize, onDelete, className, }: FileUploaderListItemProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=FileUploaderListItem.d.ts.map