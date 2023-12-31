import React from "react";
import { ProgressBar } from "../ProgressBar";
import { Link } from "react-router-dom";

export default function CardComplete({data}) {
    return (
        <>
            <div className="border-2 border-gray-300 rounded-md w-full">
                {/* Header Request */}
                <div className="border-b-2 border-grey-400 w-full h-14 flex items-center justify-between px-8">
                    <div className="flex items-center gap-4">
                        <div>
                            <p className="font-medium text-gray text-md">Request Id : {data.No_Request}</p>
                        </div>
                        <div className="flex items-center bg-[#F3F3F3] rounded-md p-2">
                            <p className="font-medium text-gray text-md px-8 text-primary">PT PRIMA INDONESIA</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M3.66992 7.93994L12.4999 13.0499L21.2699 7.96994" stroke="#7D7D7D" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.5 22.11V13.04" stroke="#7D7D7D" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.4301 2.98004L5.09014 5.94004C3.88014 6.61004 2.89014 8.29004 2.89014 9.67004V15.32C2.89014 16.7 3.88014 18.38 5.09014 19.05L10.4301 22.02C11.5701 22.65 13.4401 22.65 14.5801 22.02L19.9201 19.05C21.1301 18.38 22.1201 16.7 22.1201 15.32V9.67004C22.1201 8.29004 21.1301 6.61004 19.9201 5.94004L14.5801 2.97004C13.4301 2.34004 11.5701 2.34004 10.4301 2.98004Z" stroke="#7D7D7D" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="font-medium">Qty Container</p>
                        <p className="bg-[#F64E60] py-2 px-3 rounded-full font-medium text-white">{data.Qty}</p>
                    </div>
                </div>
                {/* Detail */}
                <div className="w-full mt-22 px-8">
                    <div className="flex flex-row gap-x-7 border-b-2 border-grey-400 py-7">
                        <div>
                            <img src="/images/vesselLogo.png" alt="" />
                        </div>
                        <div>
                            <div className="flex flex-row gap-4 items-center">
                                <p className="font-medium text-md">{data.Vessel_Name}</p>
                                <div className="px-4 py-0.5 bg-primary text-white rounded-md font-medium" >
                                    <p>{data.Service_Name}</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row items-center gap-1.5 py-2.5 font-medium">
                                    <div className="flex flex-row items-center gap-x-1.5 pr-1.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M6 1.5V3.75" stroke="#292D32" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12 1.5V3.75" stroke="#292D32" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M2.625 6.8175H15.375" stroke="#292D32" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z" stroke="#292D32" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.7713 10.2749H11.778" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.7713 12.5249H11.778" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.99588 10.2749H9.00262" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.99588 12.5249H9.00262" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.22049 10.2749H6.22723" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.22049 12.5249H6.22723" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p>Created Date: {new Date(data.createdAt).toISOString().split('T')[0]}</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-1.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M6 1.5V3.75" stroke="#292D32" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12 1.5V3.75" stroke="#292D32" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M2.625 6.8175H15.375" stroke="#292D32" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z" stroke="#292D32" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.7713 10.2749H11.778" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.7713 12.5249H11.778" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.99588 10.2749H9.00262" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.99588 12.5249H9.00262" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.22049 10.2749H6.22723" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.22049 12.5249H6.22723" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p>Closing Time: {new Date(data.Closing_Time).toISOString().split('T')[0]} {new Date(data.Closing_Time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-2.5">
                                <div className="flex flex-row">
                                    <p className="font-medium text-gray-500">Port: {data.Port_Name} </p>
                                </div>
                                <div className="flex flex-row">
                                    <p className="font-medium text-gray-500">Terminal: {data.Terminal_Name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="py-5 ">
                            <div className="w-full">
                                <ProgressBar value={50} max={200} />
                            </div>
                            <div className="flex flex-row pt-2.5 pb-1">
                                <div className="flex flex-row ">
                                    <p className="text-primary font-poppins">TCA</p>
                                    <p className="text-primary font-bold px-1 font-poppins">20</p>
                                    <p className="text-primary font-poppins">out of</p>
                                    <p className="text-primary px-1 font-poppins">20</p>
                                    <p className="text-primary font-poppins">complete</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row-reverse py-4 gap-2 w-full">
                                <button className="bg-white text-primary border border-primary h-12 px-8 rounded-md items-center flex gap-1">
                                    <p className="font-medium">Review TCA</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}