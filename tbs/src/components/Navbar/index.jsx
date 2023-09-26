import React from "react";
// import logo_tbs from '../../../public/images/logo_tbs.png'

export default function Navbar () {
    return(
        <>
            <div className="bg-white text-black p-10 flex flex-row items-center justify-between w-full sticky top-0">
                {/* Left Side */}
                <div className="flex flex-row items-center gap-9">
                    <div className="flex">
                        <img src="/images/logo_tbs.png"/>
                    </div>
                    <div className="flex">
                        <ul className="flex flex-row gap-7">
                            <li className="font-semibold"><a>My Booking</a></li>
                            <li className="font-semibold"><a>Help Center</a></li>
                        </ul>
                    </div>
                </div>
                {/* Right Side */}
                <div className="flex flex-row gap-5 items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                            <path d="M14.0892 7.07601C14.0892 5.66152 13.5273 4.30497 12.5271 3.30477C11.5269 2.30458 10.1703 1.74268 8.75586 1.74268C7.34137 1.74268 5.98482 2.30458 4.98462 3.30477C3.98443 4.30497 3.42253 5.66152 3.42253 7.07601C3.42253 13.2982 0.755859 15.076 0.755859 15.076H16.7559C16.7559 15.076 14.0892 13.2982 14.0892 7.07601Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.2943 18.6316C10.138 18.901 9.91372 19.1246 9.64384 19.2801C9.37396 19.4355 9.06798 19.5173 8.75653 19.5173C8.44508 19.5173 8.1391 19.4355 7.86922 19.2801C7.59933 19.1246 7.37503 18.901 7.21875 18.6316" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <select className="select select-sm select-bordered w-auto max-w-xs bg-white rounded-full border-black font-semibold">
                        <option disabled selected>Terminal 09</option>
                        <option>-</option>
                        <option>-</option>
                    </select>
                    <select className="select select-sm select-bordered w-auto max-w-xs bg-white rounded-full border-black font-semibold">
                        <option disabled selected>Judi Ginta</option>
                        <option>Profile</option>
                        <option>Log Out</option>
                    </select>
                </div>
            </div>
        </>
    )
}