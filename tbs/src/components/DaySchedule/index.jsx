import React from "react";

export default function DaySchedule(){
    return(
    <>
        <div className="flex justify-between">
            <button className="rounded-full w-[45px] h-[45px] flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
                    <path d="M18.8379 6.82306L1.52237 7.31804" stroke="#064B82" stroke-width="1.36757" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.08594 13.5151L1.52418 7.31806L7.72122 0.756302" stroke="#064B82" stroke-width="1.36757" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>

            {[ ...Array(7).keys() ].map(function(value, index){
                return(
                    <button key={index} className="w-[151px] h-[64px] shadow-sm rounded-lg border-[1px] border-[#BDBDBD]">
                        <p className="font-medium text-sm text-[#7D7D7D]">{value+1}</p>
                        <p className="font-medium text-sm text-[#7D7D7D]">Friday</p>
                    </button>
                ) 
            })}

            {/* <button className="w-[151px] h-[64px] shadow-sm rounded-lg border-[1px] border-[#BDBDBD]">
                <p className="font-medium text-sm text-[#7D7D7D]">01 Sept</p>
                <p className="font-medium text-sm text-[#7D7D7D]">Friday</p>
            </button>
            <button className="w-[151px] h-[64px] shadow-sm rounded-lg border-[1px] border-[#BDBDBD]">
                <p className="font-medium text-sm text-[#7D7D7D]">01 Sept</p>
                <p className="font-medium text-sm text-[#7D7D7D]">Friday</p>
            </button>
            <button className="w-[151px] h-[64px] shadow-sm rounded-lg border-[1px] border-[#BDBDBD]">
                <p className="font-medium text-sm text-[#7D7D7D]">01 Sept</p>
                <p className="font-medium text-sm text-[#7D7D7D]">Friday</p>
            </button>
            <button className="w-[151px] h-[64px] shadow-sm rounded-lg border-[1px] border-[#BDBDBD]">
                <p className="font-medium text-sm text-[#7D7D7D]">01 Sept</p>
                <p className="font-medium text-sm text-[#7D7D7D]">Friday</p>
            </button>
            <button className="w-[151px] h-[64px] shadow-sm rounded-lg bg-[#F8F9FD]">
                <p className="font-medium text-sm text-[#7D7D7D]">01 Sept</p>
                <p className="font-medium text-sm text-[#7D7D7D]">Friday</p>
            </button>
            <button className="w-[151px] h-[64px] shadow-sm rounded-lg bg-[#F8F9FD]">
                <p className="font-medium text-sm text-[#7D7D7D]">01 Sept</p>
                <p className="font-medium text-sm text-[#7D7D7D]">Friday</p>
            </button> */}
            <button className="rounded-full w-[45px] h-[45px] flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
                    <path d="M0.740234 7.07062L18.0628 7.07062" stroke="#064B82" stroke-width="1.36757" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.6797 0.688568L18.0617 7.07058L11.6797 13.4526" stroke="#064B82" stroke-width="1.36757" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    
    </>
    )
}