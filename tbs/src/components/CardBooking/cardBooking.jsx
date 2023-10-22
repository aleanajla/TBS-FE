import React from "react";

export default function CardBooking() {
    return (
    <>
        <div className="mt-20 border-2 border-gray-300 rounded-md w-full">
            {/* Header Request */}
            <div className="border-b-2 border-grey-400 w-full h-14 flex items-center">
                <p className="font-medium text-gray text-md px-8">Request Id : 1117298388290202</p>
            </div>
            {/* Detail */}
            <div className="w-full mt-22 px-8">
                <div className="flex flex-row gap-x-7 border-b-2 border-grey-400 py-7">
                    <div>
                        <img src="/images/vesselLogo.png" alt="" />
                    </div>
                    <div>
                        <div className="flex flex-row gap-4 flex items-center">
                            <p className="font-medium text-md">MV PAROS</p>
                            <div className="px-4 py-0.5 bg-primary text-white rounded-md font-medium" >
                                <p>RECEIVING</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row items-center gap-1.5 py-2.5 font-medium">
                                <div className="flex flex-row items-center gap-x-1.5 pr-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M6 1.5V3.75" stroke="#292D32" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 1.5V3.75" stroke="#292D32" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2.625 6.8175H15.375" stroke="#292D32" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z" stroke="#292D32" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.7713 10.2749H11.778" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.7713 12.5249H11.778" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.99588 10.2749H9.00262" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.99588 12.5249H9.00262" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.22049 10.2749H6.22723" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.22049 12.5249H6.22723" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p>Created Date: Fri, Jan 15, 2022 (12:00) </p>
                                </div>
                                <div className="flex flex-row items-center gap-x-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M6 1.5V3.75" stroke="#292D32" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 1.5V3.75" stroke="#292D32" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2.625 6.8175H15.375" stroke="#292D32" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z" stroke="#292D32" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.7713 10.2749H11.778" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.7713 12.5249H11.778" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.99588 10.2749H9.00262" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.99588 12.5249H9.00262" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.22049 10.2749H6.22723" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.22049 12.5249H6.22723" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p>Closing Time: Fri, Jan 15, 2022 (12:00) </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2.5">
                            <div className="flex flex-row">
                                <p className="font-medium text-gray-500">Port: </p>
                                <p className="pl-1 text-gray-500">Pelabuhan Tanjung Priok</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="font-medium text-gray-500">Terminal: </p>
                                <p className="pl-1 text-gray-500">Jakarta Internation Container Terminal II (JICT II)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="py-5">
                        <div>
                            <progress class="progress w-68" value="3" max="20"></progress>
                        </div>
                        <div className="flex flex-row pt-2.5 pb-1">
                            <div className="flex flex-row ">
                                <p className="text-primary font-poppins">Time Slot</p>
                                <p className="text-primary font-bold px-1 font-poppins">3</p>
                                <p className="text-primary font-poppins">dari</p>
                                <p className="text-primary px-1 font-poppins">20</p>
                                <p className="text-primary font-poppins">telah terisi</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="bg-primary text-white h-12 px-4 rounded-md items-center ">
                            <p className="font-medium">Booking Time Slot</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}