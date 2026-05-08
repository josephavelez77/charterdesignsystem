import { ListItemProps } from '../ListItem';
export interface ListCardItem extends Pick<ListItemProps, 'title' | 'subtitle'> {
}
export interface ListCardProps {
    value: string;
    description: string;
    items: ListCardItem[];
    className?: string;
}
export declare const ListCard: {
    ({ value, description, items, className }: ListCardProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=ListCard.d.ts.map