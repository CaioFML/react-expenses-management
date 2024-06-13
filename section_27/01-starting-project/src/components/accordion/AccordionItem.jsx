import AccordionContent from "./AccordionContent";
import AccordionTitle from "./AccordionTitle";

export default function AccordionItem({ className, children }) {
  return (
    <li className={className}>
      {children}
    </li>
  )
}