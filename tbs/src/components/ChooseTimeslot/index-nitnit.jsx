import React, { useEffect, useState } from "react";
import RadialProgress from "../RadialProgress";
import axios from "axios";
import TableValue from "../TableValue";
import { useDispatch, useSelector } from "react-redux";
import DayTimeslot from "../DayTimeslot";
import DetailTimeslot from "../DetailTimeslot";

export default function ChooseTimeslot({ data, updateData }) {
  const [open, setOpen] = useState(false);
  const progressValue = 75;
  const [timeslot, setTimeslot] = useState([]);
  const { Role_ID } = useSelector((state) => state.Auth.user);

  const handleDataTimeSlot = (data) => {
    console.log(data);
    setTimeslot(data);
    setOpen(false);
    updateData(data)
  };
console.log(timeslot, "timeslot")
  return (
    <>
      {data?.Start ? (
        <p>{data.Start} - {data.End}</p>
      ) 
        :
        (
          <>
            {timeslot.length != 0 ? (
              <>
                <p>{timeslot.start} - {timeslot.end}</p>
              </>
            ) : (
              Role_ID === 1 ? (

                <>
                  <button
                    className="flex gap-3 items-center"
                    onClick={() => setOpen(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
                        fill="#064B82"
                      />
                    </svg>
                    <p className="text-primary">Add Timeslot</p>
                  </button>
                </>
              ) : "-"
            )}
          </>
        )
      }
      {open ? (
        <div className="fixed z-[999] inset-0 bg-opacity-60 backdrop-blur-sm flex justify-center items-center bg-black">
          {/* <div className="flex place-content-center"> */}
          <div className="rounded-lg p-8 bg-white w-[1047px] max-h-[720px]">
            <div className="border-b-2 border-gray-400">
              <div className="pb-4">
                <div className="pb-6 w-full">
                  <div className="flex justify-end">
                    <button onClick={() => setOpen(false)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <path
                          d="M18 1L1 18"
                          stroke="black"
                          stroke-width="1.61905"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1 1L18 18"
                          stroke="black"
                          stroke-width="1.61905"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <p className="font-medium text-sm pb-1 pt-3.5">
                      Eligible Slot Time Detail
                    </p>
                    <p className="text-gray-500 text-sm">
                      Select the days of the week to be active
                    </p>
                  </div>
                </div>
                <DayTimeslot />
              </div>
            </div>
            {/* <div className="pt-4 flex justify-between"> */}
            {/* <div className="w-1/2 mr-4"> */}
            <DetailTimeslot dataTimeSlot={handleDataTimeSlot} />
            {/* <div className="flex justify-between p-4 bg-white border border-gray-400 rounded-lg items-center flex-row">
                                        <div className="flex flex-col gap-2">
                                            <p className="text-[#7D7D7D] text-lg font-medium">00.01-04.00</p>
                                            <p className="text-2xl font-semibold">31/50</p>
                                            <p className="text-[#7D7D7D] text-md font-medium">CONTAINER</p>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <RadialProgress progress={progressValue} />
                                        </div>
                                    </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
