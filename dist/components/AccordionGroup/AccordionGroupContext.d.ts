interface AccordionGroupContextValue {
    exclusive: boolean;
    openId: string | null;
    onItemToggle: (id: string, expanded: boolean) => void;
}
export declare const AccordionGroupContext: import('react').Context<AccordionGroupContextValue | null>;
export declare const useAccordionGroup: () => AccordionGroupContextValue | null;
export {};
//# sourceMappingURL=AccordionGroupContext.d.ts.map