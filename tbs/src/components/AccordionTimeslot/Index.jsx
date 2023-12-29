import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { DropdownGenerateTimeslot, DropdownTime } from "../DropdownTime";
import { InputCapacity } from "../InputCapacity";
import { InputBuffer } from "../InputBuffer";
import { DropdownMenu } from "../ui/dropdown-menu";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { Input } from "src/components/ui/input"


export default function AccordionTimeslot() {
  const [dataTimeslot, setDataTimeslot] = useState([])
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border rounded-lg">
        <div className="relative">
          <AccordionTrigger className="text-sm">
            Time Slot 
            {/* {data.id} */}
          </AccordionTrigger>
        </div>
        <AccordionContent>
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
              <div className="flex flex-col gap-y-3 justify-between">
                <p className="font-medium">To</p>
                <div className="grid grid-cols-2 gap-2">
                  <DropdownTime />
                  <DropdownTime />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center">
              <div className="flex flex-col gap-y-3">
                <p className="font-medium">Real Capacity</p>
                {/* <InputCapacity /> */}
                <Input type="Capacity Planning" placeholder="100" />
              </div>
              <div className="flex flex-col gap-y-3">
                <p className="font-medium">Buffer</p>
                {/* <InputBuffer /> */}
                <Input type="buffer" placeholder="100"/>
              </div>
              <div className="flex flex-col gap-y-3">
                <Label htmlFor="UoM">UoM</Label>
                <Select>
                  <SelectTrigger
                    id="userCategory"
                    className="text-[#7D7D7D] flex w-full rounded-md border border-input bg-background px-3 h-[47px] text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <SelectValue placeholder="User Category" />
                  </SelectTrigger>
                  <SelectContent position="popper" className="z-[999]">
                    <SelectItem value="next">Container</SelectItem>
                    <SelectItem value="sveltekit">Truck</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
