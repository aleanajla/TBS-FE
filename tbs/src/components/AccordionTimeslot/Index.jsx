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

export default function AccordionTimeslot({ data, onClick }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border rounded-lg">
        <div className="relative">
          <AccordionTrigger className="text-sm">
            Time Slot {data.id}
          </AccordionTrigger>
          <button
            onClick={onClick}
            className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer colour-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M12.6602 22.7483C18.1602 22.7483 22.6602 18.2483 22.6602 12.7483C22.6602 7.24829 18.1602 2.74829 12.6602 2.74829C7.16016 2.74829 2.66016 7.24829 2.66016 12.7483C2.66016 18.2483 7.16016 22.7483 12.6602 22.7483Z"
                stroke="#F64E60"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.83008 15.5783L15.4901 9.91833"
                stroke="#F64E60"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.4901 15.5783L9.83008 9.91833"
                stroke="#F64E60"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
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
                <InputCapacity />
              </div>
              <div className="flex flex-col gap-y-3">
                <p className="font-medium">Buffer</p>
                <InputBuffer />
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
