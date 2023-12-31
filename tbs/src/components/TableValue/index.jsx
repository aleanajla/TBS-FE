import React, { useEffect, useState, useCallback } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "src/components/ui/table"
import ChooseTimeslot from "../ChooseTimeslot/index-nitnit";
import { ChooseSTID } from "../chooseSTID";
import { ChooseDriver } from "../ChooseDriver";
import axios from "axios";
import PDFFile from "../ViewETicket";
import { PDFDownloadLink, pdf } from "@react-pdf/renderer";
import { usePDF } from "@react-pdf/renderer";

// function triggerDownload(url, title) {
//     const a = document.createElement("a")
//     a.href = url
//     a.download = title + ".pdf"
//     a.click()
// }

export default function TableValue({ data }) {
    // const [instance, updateInstance] = usePDF({});
    const [dataBooking, setDataBooking] = useState([])
    // console.log(dataBooking)

    const getDataContainer = async () => {
        try {
            const response = await axios({
                method: "get",
                url: `http://localhost:3000/api/users/view/containers`,
                params: {
                    ID_Request: data.ID_Request
                }
            })
            console.log(response.data);
            setDataBooking(() => response.data)
        }
        catch (error) {
            console.log(error);
        }
    }

    // const handleDownload = async () => {
    //     try {
    //         const response = await axios({
    //             method: "get",
    //             url: `http://localhost:3000/api/users/view/qrCode`
    //         })
    //         console.log(response.data);
    //         const fileName = 'eticket.pdf';
    //         const blob = pdf(<PDFFile />).toBlob();
    //         // saveAs(blob, fileName);
    //         // updateInstance(<PDFFile/>)
    //         // setQrCode(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    useEffect(() => {
        getDataContainer();
    }, [getDataContainer])

    // useEffect(() => {
    //     if (instance.url) {
    //         triggerDownload(instance.url, "eticket");
    //         console.log(instance)
    //     }
    // }, [instance.url])

    return (
        <>
            {data.ID_Status === 2 && (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center">No</TableHead>
                            <TableHead className="text-center" >Kontainer</TableHead>
                            <TableHead className="text-center">Slot Waktu</TableHead>
                            <TableHead className="text-center">STID</TableHead>
                            <TableHead className="text-center">Driver</TableHead>
                            <TableHead className="text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {dataBooking.map((job, key) => (
                            <TableRow className="-z-10" key={key}>
                                <TableCell className="text-center">{key + 1}</TableCell>
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
                                    {/* <PDFDownloadLink document={<PDFFile />}> */}
                                        <button className="bg-primary text-white px-8 py-2 rounded-lg text-sm">
                                            <p>View E-Ticket</p>
                                        </button>
                                    {/* </PDFDownloadLink> */}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </>
    )
}