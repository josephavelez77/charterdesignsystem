export interface GlobalToolbarProps {
    /** URL of the current user's avatar photo; when omitted, falls back to initials. */
    avatarSrc?: string;
    /** 1–2 character initials displayed in the avatar when no `avatarSrc` is provided. Defaults to `"AB"`. */
    avatarInitials?: string;
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const GlobalToolbar: {
    ({ avatarSrc, avatarInitials, className, }: GlobalToolbarProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=GlobalToolbar.d.ts.map