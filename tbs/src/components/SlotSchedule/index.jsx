import React from "react";

export default function SlotSchedule(){
    return(
    <>
        <div className="bg-primary w-full h-auto p-[44px] rounded-lg">
            <div className="flex justify-between">
                <div className="flex items-center gap-[15px]">
                    <h1 className="text-white font-semibold text-2xl">TODAY</h1>
                    <div className="bg-white h-[25px] w-[2px]"/>
                    <h2 className="text-white font-normal text-xl">12 September 2022</h2>
                </div>
                <button className="flex bg-white py-[15px] px-[35px] rounded-lg">
                    <p className="text-primary text-md font-semibold">Edit</p>
                </button>
            </div>
            <div className="bg-white w-full h-[1px] rounded-sm mt-[15px]"/>
            <div className="pt-9 flex justify-center gap-x-14">
                <button className="flex flex-col gap-y-[5px] items-center">
                    <div className="flex gap-[5px] text-[#4185BB] font-medium">
                        <p>12.01</p>
                        <p>-</p>
                        <p>16.00</p>
                    </div>
                    <div className="border-[1px] w-[80px] h-[56px] flex items-center justify-center border-[#4185BB] rounded-lg">
                        <p className="text-[#4185BB] font-normal text-[28px]">19</p>
                    </div>
                </button>
                {/* hover  */}
                {/* <button className="flex flex-col gap-y-[5px] items-center bg-[#0B5EA0] rounded-xl p-2">
                    <div className="flex gap-[5px] text-white font-medium">
                        <p>12.01</p>
                        <p>-</p>
                        <p>16.00</p>
                    </div>
                    <div className="border-[1px] w-[80px] h-[56px] flex items-center justify-center bg-white rounded-lg">
                        <p className="text-primary font-normal text-[28px]">25</p>
                    </div>
                </button> */}
                <button className="flex flex-col gap-y-[5px] items-center">
                    <div className="flex gap-[5px] text-white font-medium">
                        <p>12.01</p>
                        <p>-</p>
                        <p>16.00</p>
                    </div>
                    <div className="border-[1px] w-[80px] h-[56px] flex items-center justify-center border-white rounded-lg">
                        <p className="text-white font-normal text-[28px]">25</p>
                    </div>
                </button>
            </div>
        </div>

    </>
    )
}