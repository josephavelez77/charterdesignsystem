import { default as React } from 'react';
export interface FileUploaderProps {
    /** Visible label text displayed above the drop zone. */
    label?: string;
    /** Helper text shown below the drop zone. */
    hint?: string;
    /** Optional accepted file type / size requirements shown inside the drop zone. */
    requirements?: string;
    /** `FileUploaderListItem` elements rendered inside the drop zone below the upload prompt. */
    children?: React.ReactNode;
    /** Called with the array of selected `File` objects when the user drops or picks files. */
    onFilesSelected?: (files: File[]) => void;
    /** Value for the hidden file input's `accept` attribute, e.g. `"image/*"` or `".pdf,.docx"`. */
    accept?: string;
    /** When true, allows the user to select multiple files at once. */
    multiple?: boolean;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const FileUploader: {
    ({ label, hint, requirements, children, onFilesSelected, accept, multiple, className, }: FileUploaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=FileUploader.d.ts.map