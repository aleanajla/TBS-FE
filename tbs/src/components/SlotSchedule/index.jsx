import axios from "axios";
import React, { useEffect, useState } from "react";
import { Input } from "src/components/ui/input";
import { useSelector } from "react-redux";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { API_LOCAL } from "src/config/API";

export default function SlotSchedule() {
  const { date } = useSelector((state) => state.CapacityPlanning.Date);
  const { Date } = useSelector((state) => state.CapacityPlanning);
  const [slots, setSlots] = useState([]);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [open, setOpen] = useState(false);
  const [capacity, setCapacity] = useState("");

  const getDetailSlot = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${API_LOCAL}/api/users/slot/${date?date:Date}`,
      });
      console.log(response.data);
      setSlots(() => response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailSlot();
  }, [Date]);

  const handleSlotClick = (selectedDetail) => {
    setSelectedDetail(selectedDetail);
    setOpen(true);
    setCapacity(selectedDetail.Qty)
  };

  const handleChangeCapacity = (event) => {
    const newValue = event.target.value;
    setCapacity(newValue);
  };

  const handleEdit = async(event)=> {
    event.preventDefault();
    try{
        const response = await axios({
            method: "post",
            url: `${API_LOCAL}/api/users/update/slot`,
            data: {
                Qty: capacity,
                id: selectedDetail.id
            }
        })

        alert(response.data)
        setOpen(false)
    }
    catch(error){
        console.log(error);
    }
  }

  return (
    <>
      <div className="bg-primary w-full h-auto p-[44px] rounded-lg">
        <div className="flex items-center gap-[15px]">
          <h2 className="text-white font-normal text-xl">{date? date: Date}</h2>
        </div>
        <div className="bg-white w-full h-[1px] rounded-sm mt-[15px]" />
        <div className="pt-9 flex justify-center gap-x-14">
          {slots.map((slot) => {
            return slot.detailSlots.map((detail) => (
              <button
                key={detail.id}
                className="flex flex-col gap-y-[5px] items-center"
                onClick={() => handleSlotClick(detail)}
              >
                <div className="flex gap-[5px] text-[#4185BB] font-medium">
                  <p>{detail.Start.split(":").slice(0, 2).join(":")}</p>
                  <p>-</p>
                  <p>{detail.End.split(":").slice(0, 2).join(":")}</p>
                </div>
                <div className="border-[1px] w-[80px] h-[56px] flex items-center justify-center border-[#4185BB] rounded-lg">
                  <p className="text-[#4185BB] font-normal text-[28px]">
                    {detail.Qty}
                  </p>
                </div>
              </button>
            ));
          })}
        </div>
        {open && selectedDetail && (
          <div className="absolute inset-0 flex justify-center items-center bg-black backdrop-blur-sm bg-opacity-60">
            <div className="bg-white w-[947px] max-h-[720px] rounded-xl py-[31px] px-[47px] flex flex-col gap-4">
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
              <h1 className="text-lg font-medium">Edit Timeslot</h1>
              <div className="flex flex-col gap-4 scrollbar-hide overflow-y-scroll">
                <div className="flex flex-col gap-2">
                  <h2 className="font-medium">Date</h2>
                  <Input value={date?date:Date} disabled={true} />
                </div>
                <div>
                  <div className="flex flex-col gap-2.5 pb-5">
                    <h2 className="font-medium">Timeslot</h2>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem
                        value="item-1"
                        className="border rounded-lg"
                      >
                        <div className="relative">
                          <AccordionTrigger className="text-sm">
                            Time Slot
                          </AccordionTrigger>
                        </div>
                        <AccordionContent>
                          <div className="flex flex-col gap-y-5 border-t pt-4">
                            <div className="grid grid-cols-2 gap-2 ">
                              <div className="flex flex-col gap-y-3 justify-between">
                                <p className="font-medium">From</p>
                                <div className="grid grid-cols-2 gap-2">
                                  <Input
                                    value={selectedDetail.Start.split(":").slice(0, 2).join(":")}
                                    disabled={true}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-y-3 justify-between">
                                <p className="font-medium">To</p>
                                <div className="grid grid-cols-2 gap-2">
                                  <Input
                                    value={selectedDetail.End.split(":").slice(0, 2).join(":")}
                                    disabled={true}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 gap-2 items-center">
                              <div className="flex flex-col gap-y-3">
                                <p className="font-medium">Real Capacity</p>
                                <Input
                                  type="Capacity Planning"
                                  value={capacity}
                                  onChange={handleChangeCapacity}
                                />
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse gap-3">
                <button
                  type="submit"
                  className="w-[118px] h-[53px] items-center justify-center bg-primary text-sm rounded-full text-white" onClick={handleEdit}
                >
                  Save
                </button>
                <button
                  className="w-[118px] h-[53px] items-center justify-center text-sm rounded-full border border-primary text-primary"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
