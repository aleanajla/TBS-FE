import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RadialProgress from "../RadialProgress";

export default function DetailTimeslot({dataTimeSlot}) {
    const { date } = useSelector((state) => state.CapacityPlanning.Date);
    const [slots, setSlots] = useState([])
    // const [timeslot, setTimeslot] = useState([])


    const getDetailSlot = async () => {
        try {
            const response = await axios({
                method: "get",
                url: `http://localhost:3000/api/users/slot/${date}`
            })
            console.log(response.data);
            setSlots(() => response.data)
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDetailSlot()
    })

    const handleClick = (start, end, id) => {
        const data = {start: start, end: end, id: id}
        dataTimeSlot(data)
    }

    return (
        <>
            <div className="pt-4 flex justify-between">
                <div className="w-full gap-2 grid grid-cols-2">
                    {slots.map((slot) => (
                        slot.detailSlots.map((detail, index) => {
                            const totalBookingQty = slot.detailSlots.reduce((sum, detail) => sum + detail.Booking_Qty, 0);
                            const totalQty = slot.detailSlots.reduce((sum, detail) => sum + detail.Qty, 0);
                            const overallProgressValue = Math.round((totalBookingQty / totalQty) * 100);
                            return (
                                <button key={index} className="w-full" onClick={()=>handleClick(detail.Start, detail.End, detail.id)}>
                                    <div className="flex justify-between p-4 bg-white border border-gray-400 rounded-lg items-center flex-row hover:border-primary hover:border-2 transition duration-300">
                                        <div className="flex flex-col gap-2 text-left">
                                            <p className="text-[#7D7D7D] text-lg font-medium flex ">
                                                {detail.Start.split(':').slice(0, 2).join(':')} - {detail.End.split(':').slice(0, 2).join(':')}
                                            </p>
                                            <p className="text-2xl font-semibold text-[#292D32]">{detail.Booking_Qty}/{detail.Qty}</p>
                                            <p className="text-[#7D7D7D] text-sm font-medium ">CONTAINER</p>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <RadialProgress progress={overallProgressValue} />
                                        </div>
                                    </div>
                                </button>
                            );
                        })
                    ))}
                </div>
            </div>
        </>
    );
}