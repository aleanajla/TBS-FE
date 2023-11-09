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

const stids = [
    {
        no: "1",
        STID: "C100010",
        namaDriver: "Yogi M Irshad",
        phoneNumber: "0829839283",
        platNomor: "B 3498 CDR",
        size: "40"
    },
    {
        no: "2",
        STID: "C100010",
        namaDriver: "Yahya",
        platNomor: "B 3498 LK",
        size: "40"
    },
    {
        no: "3",
        STID: "C100212",
        namaDriver: "Saiful",
        platNomor: "B 3498 YTC",
        size: "40"
    },
    {
        no: "4",
        STID: "C100546",
        namaDriver: "Mahmud",
        platNomor: "B 3498 DFR",
        size: "40"
    },
    {
        no: "5",
        STID: "C100093",
        namaDriver: "Asep",
        platNomor: "B 3498 IO",
        size: "40"
    },
    {
        no: "1",
        STID: "C100010",
        namaDriver: "Yogi M Irshad",
        phoneNumber: "0829839283",
        platNomor: "B 3498 CDR",
        size: "40"
    },
    {
        no: "2",
        STID: "C100010",
        namaDriver: "Yahya",
        platNomor: "B 3498 LK",
        size: "40"
    },
    {
        no: "3",
        STID: "C100212",
        namaDriver: "Saiful",
        platNomor: "B 3498 YTC",
        size: "40"
    },
    {
        no: "4",
        STID: "C100546",
        namaDriver: "Mahmud",
        platNomor: "B 3498 DFR",
        size: "40"
    },
    {
        no: "5",
        STID: "C100093",
        namaDriver: "Asep",
        platNomor: "B 3498 IO",
        size: "40"
    }
]

export function STIDtable() {
    return (
        <Table >
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center">No</TableHead>
                    <TableHead className="text-center">STID</TableHead>
                    <TableHead className="text-center">Driver</TableHead>
                    {/* <TableHead className="text-center">Phone Number</TableHead> */}
                    <TableHead className="text-center">Plat Number</TableHead>
                    <TableHead className="text-center">Truck Size</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="px-0">
                {stids.map((stid) => (
                    <TableRow key={stid.no}>
                        <TableCell className="text-center">{stid.no}</TableCell>
                        <TableCell className="text-center">{stid.STID}</TableCell>
                        <TableCell className="text-center">{stid.namaDriver}</TableCell>
                        {/* <TableCell className="text-center">{stid.phoneNumber}</TableCell> */}
                        <TableCell className="text-center">{stid.platNomor}</TableCell>
                        <TableCell className="text-center">{stid.size}</TableCell>
                        <TableCell className="text-center">
                            <div className="flex items-center justify-center gap-4">
                                <button className=" bg-primary text-white px-8 py-2 rounded-lg text-sm">
                                    <p>Edit</p>
                                </button>
                                <button className="bg-[#FF234F] p-2 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M15.75 4.48499C13.2525 4.23749 10.74 4.10999 8.235 4.10999C6.75 4.10999 5.265 4.18499 3.78 4.33499L2.25 4.48499" stroke="white" stroke-width="1.11429" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275" stroke="white" stroke-width="1.11429" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.1373 6.85498L13.6498 14.4075C13.5673 15.585 13.4998 16.5 11.4073 16.5H6.5923C4.4998 16.5 4.4323 15.585 4.3498 14.4075L3.8623 6.85498" stroke="white" stroke-width="1.11429" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.74805 12.375H10.2455" stroke="white" stroke-width="1.11429" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.125 9.375H10.875" stroke="white" stroke-width="1.11429" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
