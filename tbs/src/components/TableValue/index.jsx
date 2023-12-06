import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "src/components/ui/table"
import { Switch } from "src/components/ui/switch"
import ChooseTimeslot from "../ChooseTimeslot/index-nitnit";
import { ChooseSTID } from "../chooseSTID";
import { ChooseDriver } from "../ChooseDriver";


export default function TableValue() {
    const jobs = [
        {
            no: "1",
            container: "HCBD1100114",
            // slotWaktu: "$250.00",
            STID: "C100010 - B 3498 CDR",
            Driver: "IDJKT - Yogi M Ishad",
        },
        {
            no: "2",
            container: "HCBD1100115",
            // slotWaktu: "$250.00",
            STID: "C100010 - B 3498 CDR",
            Driver: "IDJKT - Yogi M Ishad",
        },
        {
            no: "3",
            container: "HCBD1100116",
            // slotWaktu: "$250.00",
            STID: "C100010 - B 3498 CDR",
            Driver: "IDJKT - Yogi M Ishad",
        },
        {
            no: "3",
            container: "HCBD1100117",
            // slotWaktu: "$250.00",
            STID: "C100010 - B 3498 CDR",
            Driver: "IDJKT - Yogi M Ishad",
        },
        {
            no: "4",
            container: "HCBD1100118",
            // slotWaktu: "$250.00",
            STID: "C100010 - B 3498 CDR",
            Driver: "IDJKT - Yogi M Ishad",
        },
        {
            no: "5",
            container: "HCBD1100119",
            // slotWaktu: "$250.00",
            STID: "C100010 - B 3498 CDR",
            Driver: "IDJKT - Yogi M Ishad",
        },
    ]

    return (
        <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
                <TableRow>
                    {/* <div className="w-full flex justify-between bg-[#F5F5F5]"> */}
                    <TableHead className="text-center">No</TableHead>
                    <TableHead className="text-center" >Kontainer</TableHead>
                    <TableHead className="text-center">Slot Waktu</TableHead>
                    <TableHead className="text-center">STID</TableHead>
                    <TableHead className="text-center">Driver</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                    {/* </div> */}
                </TableRow>
            </TableHeader>
            <TableBody>
                {jobs.map((job) => (
                    <TableRow className="-z-10" key={job.no}>
                        <TableCell className="text-center">{job.no}</TableCell>
                        <TableCell className="text-center font-medium text-gray-400">{job.container}</TableCell>
                        <TableCell>
                            <div className="flex place-content-center">
                                <ChooseTimeslot />
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="flex place-content-center">
                                <ChooseSTID />
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="flex place-content-center">
                                <ChooseDriver />
                            </div>
                        </TableCell>
                        <TableCell className="text-center">
                            <button className=" bg-primary text-white px-8 py-2 rounded-lg text-sm">
                                <p>Save & Send</p>
                            </button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}