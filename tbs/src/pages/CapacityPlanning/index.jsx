import React, { useState } from "react";
import Layout from "../../components/Layouts/Layout";
import DaySchedule from "../../components/DaySchedule";
import SlotSchedule from "../../components/SlotSchedule";
import { DatePickerWithRange } from "src/components/DatePicker";
import { AddTimeSlot } from "src/components/AddTimeSlot";
import { Navigate, useNavigate } from "react-router-dom";

export default function CapacityPlanning() {
  // const [open, setOpen] = useState(false)
  const navigate = useNavigate();

  const returnBack = () => {
    navigate("/homepage");
  };
  return (
    <div className="px-[69px] flex flex-col gap-y-[43px]">
      <div className="flex justify-between">
        <button onClick={returnBack}>
          <div className="flex gap-[13px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M20.0002 11.0217V13.0217H8.00016L13.5002 18.5217L12.0802 19.9417L4.16016 12.0217L12.0802 4.10165L13.5002 5.52165L8.00016 11.0217H20.0002Z"
                fill="black"
              />
            </svg>
            <p className="font-medium">Home</p>
          </div>
        </button>

        <AddTimeSlot />
      </div>
      <DaySchedule />
      <SlotSchedule />
    </div>
  );
}
