import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "src/components/ui/table"


export function STIDtable() {
    const [STID, setSTID] = useState([])
    const {id} = useSelector((state) => state.Auth.user)

    const deleteData = async (id_data) => {
        try{
            const result = await axios({
                method: "post",
                url: "http://localhost:3000/api/users/delete/stid",
                data: {
                    id: id_data
                }
            })
            console.log(result);
        }
        catch(error){
            console.log(error);
        }
    }

    const getData = async () => {
        try{
            const result = await axios({
                method: "get",
                url: `http://localhost:3000/api/users/view/stid/${id}`
            })

            setSTID(() => result.data)
        }
        catch(error){
            console.log(error);
        }
    }

    const editData = async () => {
        try{
            const response = await axios ({
                method: "post",
                url: "/users/update/stid",
                data: {
                    
                }
            })
        }
        catch (error){

        }
    }

    useEffect(()=> {
        getData()
    })
    return (
        <Table >
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center">No</TableHead>
                    <TableHead className="text-center">STID</TableHead>
                    <TableHead className="text-center">Driver</TableHead>
                    <TableHead className="text-center">Plat Number</TableHead>
                    <TableHead className="text-center">Truck Size</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="px-0">
                {STID.map((stid, index) => (
                    <TableRow key={stid.id}>
                        <TableCell className="text-center">{index+1}</TableCell>
                        <TableCell className="text-center">{stid.STID_Number}</TableCell>
                        <TableCell className="text-center">{stid.masterDriver.Driver_Name}</TableCell>
                        <TableCell className="text-center">{stid.masterTruck.Plat_Number}</TableCell>
                        <TableCell className="text-center">{stid.masterTruck.Size}</TableCell>
                        <TableCell className="text-center">
                            <div className="flex items-center justify-center gap-4">
                                <button className=" bg-primary text-white px-8 py-2 rounded-lg text-sm">
                                    <p>Edit</p>
                                </button>
                                <button className="bg-[#FF234F] p-2 rounded-md" onClick={() => deleteData(stid.id)}>
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
