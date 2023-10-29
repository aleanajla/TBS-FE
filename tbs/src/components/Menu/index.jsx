import React from "react";
import {Link} from "react-router-dom"

export default function Menu () {
    return(
        <div className="flex rounded-lg p-5 flex-row text-white" style= {{backgroundColor: "#3430AA"}}>
            <div className="">
                <div className="p-6">
                    <p className="font-bold text-3xl mb-3">WE BUILD DIGITAL EXPERIENCE.</p>
                    <p className="font-normal">Find your terminal service</p>
                </div>
                <img src="/images/homepage_menu_logo.svg"/>
            </div>
            <div className="w-full p-4 flex flex-col r" style={{backgroundColor: "#2D2A86"}}>
                <Link to={"/capacityPlanning"}> 
                    <button className="w-32 flex flex-col items-center rounded-md p-2" style={{backgroundColor: "#38358F"}}>
                        <img src="/images/homepage_mybooking_logo.svg"/>
                        <p className="w-24 text-center">My Booking</p>
                    </button>
                </Link>
            </div>
        </div>
    );
}