import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "src/components/ui/accordion"
import { DropdownGenerateTimeslot, DropdownTime } from "../DropdownTime"
import { InputCapacity } from "../InputCapacity"
import { InputBuffer } from "../InputBuffer"

export default function AccordionTimeslot() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border rounded-lg">
                <AccordionTrigger className="text-sm ">Time Slot 1</AccordionTrigger>
                <AccordionContent >
                    <div className="flex flex-col gap-y-5 border-t pt-4">
                        <div className="grid grid-cols-2 gap-2 ">
                            {/* <div className="flex justify-between gap-x-2"> */}
                            <div className="flex flex-col gap-y-3 justify-between">
                                <p className="font-medium">From</p>
                                <div className="grid grid-cols-2 gap-2">
                                    <DropdownTime />
                                    <DropdownTime />
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <p className="font-medium">To</p>
                                <div className="grid grid-cols-2 gap-2">
                                    <DropdownTime />
                                    <DropdownTime />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="flex flex-col gap-y-3">
                                <p className="font-medium">Real Capacity</p>
                                <div className="flex">
                                    <InputCapacity />
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <p className="font-medium">Buffer</p>
                                <div className="flex gap-x-5">
                                    <InputBuffer className="h-[51px]" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <p className="font-medium">UoM</p>
                                <div className="flex gap-x-5">
                                    <DropdownTime />
                                </div>
                            </div>
                        </div>

                    </div>
                </AccordionContent>
            </AccordionItem>
            {/* <AccordionItem value="item-2" className="border mt-[20px]">
                <AccordionTrigger>Timeslot 2</AccordionTrigger>
                <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border mt-[20px]">
                <AccordionTrigger>Timeslot 3</AccordionTrigger>
                <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                </AccordionContent>
            </AccordionItem> */}
        </Accordion>
    )
}