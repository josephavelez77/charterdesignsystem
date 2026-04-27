import { createContext, useContext } from 'react'

interface AccordionGroupContextValue {
  exclusive: boolean
  openId: string | null
  onItemToggle: (id: string, expanded: boolean) => void
}

export const AccordionGroupContext = createContext<AccordionGroupContextValue | null>(null)

export const useAccordionGroup = () => useContext(AccordionGroupContext)
