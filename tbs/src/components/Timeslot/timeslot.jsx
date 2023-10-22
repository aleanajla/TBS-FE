import React from "react";

export default function Timeslot(){
    return(
    <>
        <div className="mt-20 flex place-content-center">
            <div className="rounded-lg w-2/4 p-8 bg-gray-100">
                <div className="border-b-2 border-gray-400">
                    <div className="pb-4">
                        <div className="pb-6">
                            <div className="flex justify-end">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                    <path d="M18 1L1 18" stroke="black" stroke-width="1.61905" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1 1L18 18" stroke="black" stroke-width="1.61905" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <p className="font-medium text-sm pb-1 pt-3.5">Eligible Slot Time Detail</p>
                            <p className="text-gray-500 text-sm">Select the days of the week to be active</p>
                        </div>
                        {/*Days timeslot*/}
                        <div>
                            <div className="w-28 py-5 px-2 bg-white border border-gray-400 rounded-lg flex flex-col justify-item-center items-center font-medium text-gray-500">
                                <p className="text-xs">30 Sept 2023</p>
                                <p className="text-md">Today</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Timeslot*/}
                <div className="pt-4 flex justify-between">
                    <div className="w-1/2 mr-4">
                        <div className="flex justify-between p-4 bg-white border border-gray-400 rounded-lg flex flex-row">
                            <div>
                                <p>00.01-04.00</p>
                                <p>150/200</p>
                                <p>CONTAINER</p>
                            </div>
                            <div className="radial-progress text-primary" style={{"--value":70}}>70%</div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="flex justify-between p-4 bg-white border border-gray-400 rounded-lg flex flex-row">
                            <div>
                                <p>00.01-04.00</p>
                                <p>150/200</p>
                                <p>CONTAINER</p>
                            </div>
                            <div className="radial-progress text-primary" style={{"--value":70}}>70%</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    
    
    </>)
}