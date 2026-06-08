import { default as React } from 'react';
export interface FileUploaderProps {
    label?: string;
    hint?: string;
    /** Optional accepted file type / size requirements shown inside the drop zone. */
    requirements?: string;
    /** FileUploaderListItem children rendered below the drop zone. */
    children?: React.ReactNode;
    onFilesSelected?: (files: File[]) => void;
    accept?: string;
    multiple?: boolean;
    className?: string;
}
export declare const FileUploader: {
    ({ label, hint, requirements, children, onFilesSelected, accept, multiple, className, }: FileUploaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=FileUploader.d.ts.map