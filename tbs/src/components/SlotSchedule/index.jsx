import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function SlotSchedule(){
    const {date} = useSelector((state) => state.CapacityPlanning.Date);
    const [slots, setSlots] = useState([])

    const getDetailSlot = async() => {
        try{
            const response = await axios({
                method: "get",
                url: `http://localhost:3000/api/users/slot/${date}`
            })
            console.log(response.data);
            setSlots(()=>response.data)
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getDetailSlot()
    },[date])

    return(
    <>
        <div className="bg-primary w-full h-auto p-[44px] rounded-lg">
            <div className="flex justify-between">
                <div className="flex items-center gap-[15px]">
                    <h2 className="text-white font-normal text-xl">{date}</h2>
                </div>
                <button className="flex bg-white py-[15px] px-[35px] rounded-lg">
                    <p className="text-primary text-md font-semibold">Edit</p>
                </button>
            </div>
            <div className="bg-white w-full h-[1px] rounded-sm mt-[15px]"/>
            <div className="pt-9 flex justify-center gap-x-14">
                {slots.map((slot)=> {
                    return(
                        slot.detailSlots.map((detail) => (
                            <button className="flex flex-col gap-y-[5px] items-center">
                                <div className="flex gap-[5px] text-[#4185BB] font-medium">
                                    <p>{detail.Start.split(':').slice(0, 2).join(':')}</p>
                                    <p>-</p>
                                    <p>{detail.End.split(':').slice(0, 2).join(':')}</p>
                                </div>
                                <div className="border-[1px] w-[80px] h-[56px] flex items-center justify-center border-[#4185BB] rounded-lg">
                                    <p className="text-[#4185BB] font-normal text-[28px]">{detail.Qty}</p>
                                </div>
                            </button>
                        ))
                    )
                })}
            </div>
        </div>

    </>
    )
}