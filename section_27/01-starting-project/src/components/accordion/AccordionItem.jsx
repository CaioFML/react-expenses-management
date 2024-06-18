import { createContext, useContext } from "react";
import AccordionContent from "./AccordionContent";
import AccordionTitle from "./AccordionTitle";

const AccordionContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionContext);

  if(!ctx) {
    throw new Error('AccordionItem should be used inside Accordion.Item')
  }

  return ctx
}

export default function AccordionItem({ id, className, children }) {


  return (
    <AccordionContext.Provider value={id}>
      <li className={className}>
        {children}
      </li>
    </AccordionContext.Provider>
  )
}