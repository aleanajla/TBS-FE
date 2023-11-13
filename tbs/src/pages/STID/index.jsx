import React from "react";
import Layout from "src/components/Layouts/Layout";
import { STIDtable } from "src/components/STIDTable";
import { AddSTID } from "src/components/AddSTID";
import SearchBar from "src/components/SearchBar";

export default function STID() {
    return (
        <Layout>
            <div className="flex flex-col gap-10">
                <div>
                    <button className="flex gap-4 items-center pb-7">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M16.0002 6.99813V8.99813H4.00016L9.50016 14.4981L8.08016 15.9181L0.160156 7.99813L8.08016 0.078125L9.50016 1.49813L4.00016 6.99813H16.0002Z" fill="black" />
                        </svg>
                        <p className="font-medium text-md text-[#7D7D7D]">Homepage</p>
                    </button>
                    <div className="flex justify-between items-center pt-5">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-semibold text-primary">Single Truck Identfication Data</h1>
                            <h2 className="text-xl font-medium text-[#7D7D7D]">Truck and driver association</h2>
                        </div>
                        {/* <div className="flex flex-row-reverse"> */}
                        <AddSTID />
                        {/* </div> */}
                    </div>
                </div>
                <div className="py-10 px-4 flex flex-col gap-8 border rounded-lg">
                    <SearchBar />
                    <div className="scrollbar-hide overflow-y-scroll max-h-[600px]">
                    <STIDtable />

                    </div>
                </div>
            </div>
        </Layout>
    )
}