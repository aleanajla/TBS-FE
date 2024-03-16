import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RadialProgress from "../RadialProgress";
import { API_LOCAL } from "src/config/API";

export default function DetailTimeslot({ dataTimeSlot, dataTerminal, dataIndex }) {
  const { date } = useSelector((state) => state.CapacityPlanning.Date);
  const { Date } = useSelector((state) => state.CapacityPlanning);
  const [slots, setSlots] = useState([]);
  const { Customer_ID } = useSelector((state) => state.Auth.user);
  const [ID_Terminal, setIDTerminal] = useState("")

  const getIDTerminal = async () => {
    console.log("TERMINAL NAME: ", dataTerminal);
    try {
      const result = await axios({
        method: "get",
        url: `${API_LOCAL}/api/users/get/data/terminal`,
        params: {
          Customer_ID: dataTerminal,
        },
      });
      setIDTerminal(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDetailSlot = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${API_LOCAL}/api/users/slot/${date?date:Date}`,
        params: {
          ID_Terminal: ID_Terminal.id
        },
      });
      console.log(response.data);
      setSlots(() => response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailSlot();
    getIDTerminal();
  }, [Date,date]);

  const handleClick = (start, end, id) => {
    const data = { start: start, end: end, id: id, date: date, index: dataIndex };
    dataTimeSlot(data);
  };

  return (
    <>
      <div className="pt-4 flex justify-between">
        <div className="w-full gap-2 grid grid-cols-2">
          {slots.map((slot) =>
            slot.detailSlots.map((details, index) => {
              const overallProgressValue = Math.round(
                (details.Booking_Qty / details.Qty) * 100
              );
              return (
                <button
                  key={index}
                  className="w-full"
                  onClick={() =>
                    overallProgressValue != 100
                      ? handleClick(details.Start, details.End, details.id)
                      : ""
                  }
                >
                  <div className="flex justify-between p-4 bg-white border border-gray-400 rounded-lg items-center flex-row hover:border-primary hover:border-2 transition duration-300">
                    <div className="flex flex-col gap-2 text-left">
                      <p className="text-[#7D7D7D] text-lg font-medium flex ">
                        {details.Start.split(":").slice(0, 2).join(":")} -{" "}
                        {details.End.split(":").slice(0, 2).join(":")}
                      </p>
                      <p className="text-2xl font-semibold text-[#292D32]">
                        {details.Booking_Qty}/{details.Qty}
                      </p>
                      <p className="text-[#7D7D7D] text-sm font-medium ">
                        CONTAINER
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <RadialProgress progress={overallProgressValue} />
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
