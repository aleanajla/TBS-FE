import React from "react";
import SearchBar from "../SearchBar";
import StatusJob from "../StatusJob";
import TableValue from "../TableValue";

export default function TableTimeslot() {
    return (
        <>
            <div className="w-full border rounded-lg">
                <div className="p-4 flex flex-col gap-6">
                    <div className="flex justify-between">
                        <div className="flex flex-row items-center gap-3">
                            <p className="font-medium text-sm">PT Maritim Luas Tbk</p>
                            <div className="bg-[#0F9B71] rounded-full text-white font-medium py-1 px-2">
                                <p className="text-sm">3/20</p>
                            </div>
                        </div>
                        <StatusJob />
                    </div>
                    <SearchBar />
                    <div className="flex gap-2 items-center">
                        <div className="w-3 h-3 rounded-full bg-[#0F9B71]" />
                        <p>Tuntas</p>
                    </div>
                </div>
                <TableValue />
            </div>

        </>
    )
}