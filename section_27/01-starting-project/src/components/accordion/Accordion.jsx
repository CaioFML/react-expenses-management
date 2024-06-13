import { createContext, useContext, useState } from "react"

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

  function openItem(id) {
    setOpenItemId(id)
  }

  function closeItem() {
    setOpenItemId(null)
  }

  const contextValue = {
    openItemId: openItemId,
    openItem,
    closeItem
  }

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>
        {children}
      </ul>
    </AccordionContext.Provider>
  )
}