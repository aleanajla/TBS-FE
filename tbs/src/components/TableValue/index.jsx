import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "src/components/ui/table";
import ChooseTimeslot from "../ChooseTimeslot/index-nitnit";
import { ChooseSTID } from "../chooseSTID";
import axios from "axios";
import RadialProgress from "../RadialProgress";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "src/lib/utils";
import { Button } from "src/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "src/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "src/components/ui/popover";
import { useSelector } from "react-redux";
import { result } from "lodash";

export default function TableValue({ data }) {
  console.log(data.ID_Request, "data props");
  const [dataContainer, setDataContainer] = useState([]);
  // const [dataBooking, setDataBooking] = useState([]);
  const [dataSTID, setDataSTID] = useState([]);
  const { Role_ID } = useSelector((state) => state.Auth.user);
  const [loading, setLoading] = useState(true);
  const [timeslot, setTimeslot] = useState([]);
  // const [dataRequestBooking, setDataRequestBooking] = useState([]);

  const getDataContainer = async () => {
    console.log(data?.ID_Request, "id request");
    try {
      if (data?.ID_Request) {
        console.log(data?.ID_Request, "id request");
        const response = await axios({
          method: "get",
          url: `http://localhost:3000/api/users/view/containers`,
          params: {
            ID_Request: data?.ID_Request,
          },
        });
        console.log(response, "result container");
        // let data = []
        setDataContainer(response.data);
      }
    } catch (error) {
      console.log(error, "error container");
    }
  };

  const getDataFromChild = (data) => {
    setTimeslot(() => data);
  };

  const getSTID = (data) => {
    setDataSTID(data);
  };

  const submitData = async (id) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/api/user/create/booking",
        data: {
          ID_Request_Container: id,
          ID_Request_TC: data.id,
          ID_Detail_Slot: timeslot.id,
        },
      });
      alert("Successfully Send!");
    } catch (error) {
      console.log(error);
    }
  };

  const submitAssignJob = async (id, id_stid) => {
    try {
      const response = await axios({
        method: "post",
        url: `http://localhost:3000/api/users/create/TCA`,
        data: {
          ID_Booking: id,
          ID_STID: id_stid,
        },
      });
      alert("Successfully Send!");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(dataSTID.STID_Number, "DATA STID ARRAY FROM TABLE VALUE");
    getDataContainer();
  }, [data, dataSTID]);

  return (
    <>
      {data?.ID_Status === 2 && (
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              {/* <div className="w-full flex justify-between bg-[#F5F5F5]"> */}
              <TableHead className="text-center">No</TableHead>
              <TableHead className="text-center">Kontainer</TableHead>
              <TableHead className="text-center">Slot Waktu</TableHead>
              <TableHead className="text-center">STID - Driver</TableHead>
              <TableHead className="text-center">Action</TableHead>
              {/* </div> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataContainer?.mergedData?.map((job, key) => {
              // console.log("job");
              return (
                <TableRow className="-z-10" key={key}>
                  <TableCell className="text-center">{key + 1}</TableCell>
                  <TableCell className="text-center font-medium text-gray-400">
                    {job?.requestContainer
                      ? job?.requestContainer.Container_Number
                      : job?.Container_Number}
                  </TableCell>
                  <TableCell>
                    {job?.detailSlot ? (
                      <div className="flex place-content-center">
                        <ChooseTimeslot
                          data={{
                            Container_Number: job?.requestContainer
                              ? job?.requestContainer.Container_Number
                              : job?.Container_Number,
                            Start: job?.detailSlot.Start,
                            End: job?.detailSlot.End,
                            Date: job?.detailSlot.slot.Date,
                          }}
                          updateData={getDataFromChild}
                        />
                        {/* {Role_ID === 1 ? (
                            ) : (
                              ""
                            )} */}
                      </div>
                    ) : (
                      <div className="flex place-content-center">
                        <ChooseTimeslot
                          data={{
                            Container_Number: job?.requestContainer
                              ? job?.requestContainer.Container_Number
                              : job?.Container_Number,
                            Start: 0,
                            End: 0,
                            Date: null,
                          }}
                          updateData={getDataFromChild}
                        />
                        {/* {Role_ID === 1 ? (
                            ) : (
                              ""
                            )} */}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex place-content-center">
                      {/* {Role_ID === 2 && dataSTID.length == 0 ? (
                        <>
                          <ChooseSTID
                            data={{ id: data.ID_Trucking }}
                            getDataDetailSTID={getSTID}
                          />
                        </>
                      ) : (
                        <>
                          <p>{dataSTID.STID_Number}</p>
                        </>
                      )} */}

                      {Role_ID === 2 &&
                        (job?.assignJob ? (
                          <>
                            <p>
                              {job?.assignJob.masterSTID.STID_Number} -{" "}
                              {
                                job?.assignJob.masterSTID.masterDriver
                                  .Driver_Name
                              }
                            </p>
                          </>
                        ) : (
                          <>
                            <ChooseSTID
                              data={{ id: data.ID_Trucking, index: key }}
                              getDataDetailSTID={getSTID}
                            />
                          </>
                        ))}
                      {Role_ID === 1 &&
                        (job?.assignJob ? (
                          <>
                            <p>
                              {job?.assignJob.masterSTID.STID_Number} -{" "}
                              {
                                job?.assignJob.masterSTID.masterDriver
                                  .Driver_Name
                              }
                            </p>
                          </>
                        ) : (
                          "-"
                        ))}
                    </div>
                  </TableCell>

                  <TableCell className="text-center">
                    {Role_ID === 1 && job?.requestContainer ? (
                      <button
                        className=" bg-gray-400 text-white px-8 py-2 rounded-lg text-sm"
                        // onClick={() => submitData(job.id)}
                        disabled={true}
                      >
                        <p>Save & Send</p>
                      </button>
                    ) : Role_ID === 1 ? (
                      <>
                        <button
                          className=" bg-primary text-white px-8 py-2 rounded-lg text-sm"
                          onClick={() => submitData(job.id)}
                        >
                          <p>Save & Send</p>
                        </button>
                      </>
                    ) : job?.requestContainer ? (
                      <>
                        <button
                          className=" bg-primary text-white px-8 py-2 rounded-lg text-sm"
                          onClick={() => submitAssignJob(job.id, dataSTID.id)}
                        >
                          <p>Save & Send</p>
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className=" bg-gray-400 text-white px-8 py-2 rounded-lg text-sm"
                          disabled={true}
                        >
                          <p>Save & Send</p>
                        </button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </>
  );
}
