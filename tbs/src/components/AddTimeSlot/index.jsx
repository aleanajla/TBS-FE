import { Button } from "src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "src/components/ui/dialog";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import { DatePickerWithRange } from "../DatePicker";
import { useState } from "react";
import AccordionTimeslot from "../AccordionTimeslot/Index";

export function AddTimeSlot() {
  const [open, setOpen] = useState(false);
  const [sections, setSections] = useState([]);
  const [data, setData] = useState([])

  const addSection = () => {
    setSections((prevSections) => [
      ...prevSections,
      {
        id: prevSections.length + 1,
      },
    ]);
  };

  const deleteSection = (id) => {
    setSections((prevSections) => prevSections.filter((section) => section.id !== id));
  };

  return (
    <>
      <button
        className="flex gap-[2px] bg-primary rounded-lg w-[170px] h-[54px] text-white btn items-center justify-center"
        onClick={() => setOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M18.0234 12.7735H6.02344C5.61344 12.7735 5.27344 12.4335 5.27344 12.0235C5.27344 11.6135 5.61344 11.2735 6.02344 11.2735H18.0234C18.4334 11.2735 18.7734 11.6135 18.7734 12.0235C18.7734 12.4335 18.4334 12.7735 18.0234 12.7735Z"
            fill="white"
          />
          <path
            d="M12.0234 18.7735C11.6134 18.7735 11.2734 18.4335 11.2734 18.0235V6.02353C11.2734 5.61353 11.6134 5.27353 12.0234 5.27353C12.4334 5.27353 12.7734 5.61353 12.7734 6.02353V18.0235C12.7734 18.4335 12.4334 18.7735 12.0234 18.7735Z"
            fill="white"
          />
        </svg>
        <p className="font-medium text-white">Add Time slot</p>
      </button>
      {open ? (
        <div className="absolute inset-0 bg-opacity-60 backdrop-blur-sm flex justify-center items-center bg-black">
          <div className=" bg-white w-[947px] max-h-[720px] rounded-xl py-[31px] px-[47px] flex flex-col gap-4">
            <div className="flex flex-row-reverse">
              <button className="btn" onClick={() => setOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                >
                  <path
                    d="M18 1.5L1 18.5"
                    stroke="black"
                    stroke-width="1.61905"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1.5L18 18.5"
                    stroke="black"
                    stroke-width="1.61905"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <h1 className="text-lg font-medium">Add Timeslot</h1>
            <div className="flex flex-col gap-4 scrollbar-hide overflow-y-scroll">
              <div className="flex flex-col gap-2">
                <h2 className="font-medium">Date</h2>
                <DatePickerWithRange />
              </div>
              <div className="border-b">
                <div className="flex flex-col gap-2.5 pb-5">
                  <h2 className="font-medium">Timeslot</h2>
                  {sections.map((section) => (
                      <AccordionTimeslot data={{id: section.id}} onClick={()=>deleteSection(section.id)}/>
                  ))}
                  <button
                    className="flex gap-x-2.5 items-center mt-[10px]"
                    onClick={addSection}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M12 22.5076C17.5 22.5076 22 18.0076 22 12.5076C22 7.00757 17.5 2.50757 12 2.50757C6.5 2.50757 2 7.00757 2 12.5076C2 18.0076 6.5 22.5076 12 22.5076Z"
                        stroke="#064B82"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 12.5076H16"
                        stroke="#064B82"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 16.5076V8.50757"
                        stroke="#064B82"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="text-sm">Timeslot</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse gap-3">
              <button className="w-[118px] h-[53px] items-center justify-center bg-primary text-sm rounded-full text-white">
                Save
              </button>
              <button className="w-[118px] h-[53px] items-center justify-center text-sm rounded-full border border-primary text-primary" onClick={()=> setOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

