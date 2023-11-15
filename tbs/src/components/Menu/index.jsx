import React from "react";
import { Link } from "react-router-dom"

// export default function Menu () {
//     return(
//         <div className="flex rounded-lg p-5 flex-row text-white" style= {{backgroundColor: "#3430AA"}}>
//             <div className="">
//                 <div className="p-6">
//                     <p className="font-bold text-3xl mb-3">WE BUILD DIGITAL EXPERIENCE.</p>
//                     <p className="font-normal">Find your terminal service</p>
//                 </div>
//                 <img src="/images/homepage_menu_logo.svg"/>
//             </div>
//             <div className="w-full p-4 flex flex-col r" style={{backgroundColor: "#2D2A86"}}>
//                 <Link to={"/myBooking"}> 
//                     <button className="w-32 flex flex-col items-center rounded-md p-2" style={{backgroundColor: "#38358F"}}>
//                         <img src="/images/homepage_mybooking_logo.svg"/>
//                         <p className="w-24 text-center">My Booking</p>
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     );
// }

export default function Menu() {
    return (
        <div className="flex rounded-lg p-5 flex-row text-white" style={{ backgroundColor: "#3430AA" }}>
            <div className="">
                <div className="p-6">
                    <p className="font-bold text-3xl mb-3">WE BUILD DIGITAL EXPERIENCE.</p>
                    <p className="font-normal">Find your terminal service</p>
                </div>
                <img src="/images/homepage_menu_logo.svg" />
            </div>
            <div className="w-full flex flex-row gap-5 bg-[#2D2A86] p-4">
                <div className="flex flex-col">
                    <Link to={"/transportOder"}>
                        <button className="flex flex-col items-center rounded-md px-4 pt-4 min-h-[180px] gap-4" style={{ backgroundColor: "#38358F" }}>
                            <img src="/images/transportOrdeLogo.svg" />
                            <p className="w-24 text-center font-medium">Transport <br /> Order </p>
                        </button>
                    </Link>
                </div>
                <div className="w-full flex flex-col" >
                    <Link to={"/STID"}>
                        <button className="flex flex-col items-center rounded-md px-4 pt-4 min-h-[180px] gap-4" style={{ backgroundColor: "#38358F" }}>
                            <img src="/images/STIDlogo.svg" />
                            <p className="w-24 text-center font-medium"> STID <br/>  </p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}