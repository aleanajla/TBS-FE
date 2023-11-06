import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "src/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b px-[25px]", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex ">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center gap-5 py-4 font-medium transition-all hover: [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}>
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      <div className="flex items-center justify-between w-full">
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M12.4902 22.5151C17.9902 22.5151 22.4902 18.0151 22.4902 12.5151C22.4902 7.01514 17.9902 2.51514 12.4902 2.51514C6.99023 2.51514 2.49023 7.01514 2.49023 12.5151C2.49023 18.0151 6.99023 22.5151 12.4902 22.5151Z" stroke="#F64E60" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9.66016 15.3452L15.3202 9.68518" stroke="#F64E60" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M15.3202 15.3452L9.66016 9.68518" stroke="#F64E60" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}>
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }



