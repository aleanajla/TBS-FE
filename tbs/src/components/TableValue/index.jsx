import React, { useEffect, useState } from "react";
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
import axios from "axios";
import RadialProgress from "../RadialProgress";


export default function TableValue({data}) {

    const [dataBooking, setDataBooking] = useState([])

    const getDataContainer = async() => {
        try{
            const response = await axios({
                method: "get",
                url: `http://localhost:3000/api/users/view/containers`,
                params: {
                    ID_Request: data.ID_Request
                }
            })
            console.log(response.data);
            setDataBooking(()=> response.data)
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=> {
        getDataContainer();
    },[getDataContainer])

    return (
        <>
            {data.ID_Status === 2 && (
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
                        {dataBooking.map((job, key) => (
                            <TableRow className="-z-10" key={key}>
                                <TableCell className="text-center">{key+1}</TableCell>
                                <TableCell className="text-center font-medium text-gray-400">{job.Container_Number}</TableCell>
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
            )}
        </>
    )
}