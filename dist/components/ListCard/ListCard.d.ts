import { ListItemProps } from '../ListItem';
export interface ListCardItem extends Pick<ListItemProps, 'title' | 'subtitle'> {
}
export interface ListCardProps {
    /** Primary metric string displayed at the top of the card (e.g. `"42"`). */
    value: string;
    /** Short description of the metric shown beside `value`. */
    description: string;
    /** Items to display in the paginated list; each requires `title` and an optional `subtitle`. */
    items: ListCardItem[];
    /** Additional CSS class applied to the root element for layout overrides. */
    className?: string;
}
export declare const ListCard: {
    ({ value, description, items, className }: ListCardProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=ListCard.d.ts.map