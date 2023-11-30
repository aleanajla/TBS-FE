import React from "react";

export default function HeaderJob({data}){
    return(
    <>
        <div className="py-4 px-6 bg-gray-100 w-full rounded-lg">
            <div className="flex flex-row items-center gap-2">
                <p className="font-medium">{data.No_Request} - {data.Vessel_Name.toUpperCase()}</p>
                <div className="bg-success bg-[#0F9B71] rounded-full text-white font-medium py-1 px-2">
                    <p>3/{data.Qty}</p>
                </div>
            </div>

            <div className="flex flex-row items-center gap-3 py-2.5">
                <div className="px-4 py-1 bg-primary text-white rounded-md font-medium">
                    <p>{data.Service_Name.toUpperCase()}</p>
                </div>
                <div className="flex flex-row py-0.5 items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                        <path d="M7.21112 2V4.25" stroke="#064B82" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.5834 2V4.25" stroke="#064B82" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.62671 7.31738H17.1678" stroke="#064B82" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.5661 6.875V13.25C17.5661 15.5 16.3713 17 13.5834 17H7.21112C4.42326 17 3.22845 15.5 3.22845 13.25V6.875C3.22845 4.625 4.42326 3.125 7.21112 3.125H13.5834C16.3713 3.125 17.5661 4.625 17.5661 6.875Z" stroke="#064B82" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.3402 10.7749H13.3474" stroke="#064B82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.3402 13.0249H13.3474" stroke="#064B82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.3936 10.7749H10.4008" stroke="#064B82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.3936 13.0249H10.4008" stroke="#064B82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.44559 10.7749H7.45274" stroke="#064B82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.44559 13.0249H7.45274" stroke="#064B82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className="text-primary font-medium  ">{data.Closing_Time} </p>
                </div>
            </div>

            <div className="flex flex-row gap-2.5">
                <div className="flex flex-row">
                    <p className="font-medium text-gray-500">Port: </p>
                    <p className="pl-1 text-gray-500">{data.Port_Name}</p>
                </div>
                <div className="flex flex-row">
                    <p className="font-medium text-gray-500">Terminal: </p>
                    <p className="pl-1 text-gray-500">{data.Terminal_Name}</p>
                </div>
            </div>

        </div>


    </>
    )
}