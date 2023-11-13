import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "src/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex px-4 flex-1 gap-4 items-center justify-between py-4 font-medium transition-all hover:none [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}>
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      <div className="w-full justify-between flex items-center">
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M12.6602 22.7483C18.1602 22.7483 22.6602 18.2483 22.6602 12.7483C22.6602 7.24829 18.1602 2.74829 12.6602 2.74829C7.16016 2.74829 2.66016 7.24829 2.66016 12.7483C2.66016 18.2483 7.16016 22.7483 12.6602 22.7483Z" stroke="#F64E60" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9.83008 15.5783L15.4901 9.91833" stroke="#F64E60" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M15.4901 15.5783L9.83008 9.91833" stroke="#F64E60" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
    <div className="pb-4 pt-0 px-4">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }