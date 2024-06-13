import { createContext, useContext, useState } from "react"

import AccordionItem from "./AccordionItem"
import AccordionTitle from "./AccordionTitle"
import AccordionContent from "./AccordionContent"

const AccordionContext = createContext()

export function useAccordionContext() {
  const ctx = useContext(AccordionContext)

  if (!ctx) {
    throw new Error('useAccordionContext must be used within an Accordion')
  }

  return ctx
}

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState(null)

  function toggleItem(id) {
    setOpenItemId(prevId => prevId === id ? null : id)
  }

  const contextValue = {
    openItemId: openItemId,
    toggleItem
  }

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>
        {children}
      </ul>
    </AccordionContext.Provider>
  )
}

Accordion.Item = AccordionItem
Accordion.Title = AccordionTitle
Accordion.Content = AccordionContent