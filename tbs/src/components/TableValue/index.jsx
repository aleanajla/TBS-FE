import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "src/components/ui/table";
import ChooseTimeslot from "../ChooseTimeslot/index-nitnit";
import { ChooseSTID } from "../chooseSTID";
import axios from "axios";
import { useSelector } from "react-redux";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Eticket from "../Eticket";
import { API_LOCAL } from "src/config/API";
import { Command } from "lucide-react";
import { CommandEmpty, CommandInput } from "cmdk";
import { Button } from "../ui/button";

export default function TableValue({ data, dataTCA }) {
  const [dataContainer, setDataContainer] = useState([]);
  const [dataSTID, setDataSTID] = useState([]);
  const { Role_ID } = useSelector((state) => state.Auth.user);
  const [timeslot, setTimeslot] = useState([]);
  const [openTimeslot, setOpenTimeslot] = useState("");
  const [openAssignJob, setOpenAssignJob] = useState(false);
  const Closing_Time = new Date(dataTCA.Closing_Time);
  const currentTime = new Date();

  const getDataContainer = async () => {
    console.log(data?.ID_Request, "id request");
    try {
      if (data?.ID_Request) {
        console.log(data?.ID_Request, "id request");
        const response = await axios({
          method: "get",
          url: `${API_LOCAL}/api/users/view/containers`,
          params: {
            ID_Request: data?.ID_Request,
          },
        });
        console.log(response, "result container");
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
    const selected_date = new Date(timeslot.date);

    if (selected_date >= Closing_Time) {
      window.location.reload();
      alert("The Selected Date Exceeds Closing Time!");
    } else {
      try {
        const response = await axios({
          method: "post",
          url: `${API_LOCAL}/api/user/create/booking`,
          data: {
            ID_Request_Container: id,
            ID_Request_TC: data.id,
            ID_Detail_Slot: timeslot.id,
          },
        });
        window.location.reload();
        alert("Successfully Send!");
        getDataContainer();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const submitAssignJob = async (id, id_stid) => {
    try {
      const response = await axios({
        method: "post",
        url: `${API_LOCAL}/api/users/create/TCA`,
        data: {
          ID_Booking: id,
          ID_STID: id_stid,
        },
      });
      window.location.reload();
      alert("Successfully Send!");
      getDataContainer();
    } catch (error) {
      console.log(error);
    }
  };

  const editBooking = async (id) => {
    try {
      const response = await axios({
        method: "post",
        url: `${API_LOCAL}/api/users/edit/timeslot`,
        data: {
          ID_Booking: id,
          New_Timeslot: timeslot.id,
        },
      });
      window.location.reload();
      alert(response.data);
      getDataContainer();
      setOpenTimeslot("");
    } catch (error) {
      console.log(error);
    }
  };

  const editAssignJob = async (ID_AssignJob, ID_STID) => {
    try {
      const response = await axios({
        method: "post",
        url: `${API_LOCAL}/api/users/edit/TCA`,
        data: {
          ID_AssignJob: ID_AssignJob,
          New_STID: ID_STID,
        },
      });
      window.location.reload();
      alert(response.data);
      getDataContainer();
      setOpenAssignJob("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataContainer();
  }, [data, dataSTID]);

  return (
    <>
      {data?.ID_Status === 2 && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">No</TableHead>
              <TableHead className="text-center">Container</TableHead>
              <TableHead className="text-center">Timeslot</TableHead>
              <TableHead className="text-center">
                STID - Driver - Size
              </TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataContainer?.mergedData?.map((job, key) => {
              return (
                <TableRow className="-z-10" key={key}>
                  <TableCell className="text-center">{key + 1}</TableCell>
                  <TableCell className="text-center font-medium text-gray-400">
                    {job?.requestContainer
                      ? job?.requestContainer.Container_Number
                      : job?.Container_Number}
                  </TableCell>
                  <TableCell>
                    {openTimeslot === key && Role_ID === 1 ? (
                      <div className="flex place-content-center">
                        <ChooseTimeslot
                          data={{
                            Container_Number: job?.requestContainer
                              ? job?.requestContainer.Container_Number
                              : job?.Container_Number,
                            Start: 0,
                            End: 0,
                            Date: null,
                            Terminal_Name: dataTCA?.Terminal_Name,
                            index: key,
                          }}
                          updateData={getDataFromChild}
                        />
                      </div>
                    ) : job?.detailSlot ? (
                      <div className="flex place-content-center">
                        <ChooseTimeslot
                          data={{
                            Container_Number: job?.requestContainer
                              ? job?.requestContainer.Container_Number
                              : job?.Container_Number,
                            Start: job?.detailSlot.Start,
                            End: job?.detailSlot.End,
                            Date: job?.detailSlot.slot.Date,
                            Terminal_Name: dataTCA?.Terminal_Name,
                            index: key,
                          }}
                          updateData={getDataFromChild}
                        />
                      </div>
                    ) : timeslot.index ? (
                      timeslot.index == key ? (
                        <div className="flex place-content-center">
                          <ChooseTimeslot
                            data={{
                              Container_Number: job?.requestContainer
                                ? job?.requestContainer.Container_Number
                                : job?.Container_Number,
                              Start: 0,
                              End: 0,
                              Date: null,
                              Terminal_Name: dataTCA?.Terminal_Name,
                              index: key,
                            }}
                            updateData={getDataFromChild}
                          />
                        </div>
                      ) : (
                        <div className="flex place-content-center">
                          <button className="flex gap-3 items-center" disabled>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
                                fill="#DCDCDC"
                              />
                            </svg>
                            <p className="text-gray-400">Add Timeslot</p>
                          </button>
                        </div>
                      )
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
                            Terminal_Name: dataTCA?.Terminal_Name,
                            index: key,
                          }}
                          updateData={getDataFromChild}
                        />
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex place-content-center">
                      {openAssignJob === key && Role_ID === 2 ? (
                        <>
                          <ChooseSTID
                            data={{
                              id: data.ID_Trucking,
                              index: key,
                              date: job?.detailSlot?.slot.Date
                                ? job?.detailSlot.slot.Date
                                : null,
                              Size: job?.requestContainer?.Container_Size
                                ? job?.requestContainer?.Container_Size
                                : null,
                              index: key,
                            }}
                            getDataDetailSTID={getSTID}
                          />
                        </>
                      ) : (
                        Role_ID === 2 &&
                        (job?.assignJob ? (
                          <>
                            <p>
                              {job?.assignJob.masterSTID.STID_Number} -{" "}
                              {
                                job?.assignJob.masterSTID.masterDriver
                                  .Driver_Name
                              }{" "}
                              - {job?.requestContainer.Container_Size}
                              {`"`}
                            </p>
                          </>
                        ) : dataSTID.index ? (
                          dataSTID.index !== key ? (
                            <Button
                              variant="outline"
                              role="combobox"
                              className="w-[250px] justify-between text-gray-500"
                              disabled
                            >
                              STID
                            </Button>
                          ) : (
                            <>
                              <ChooseSTID
                                data={{
                                  id: data.ID_Trucking,
                                  index: key,
                                  date: job?.detailSlot?.slot.Date
                                    ? job?.detailSlot.slot.Date
                                    : null,
                                  Size: job?.requestContainer?.Container_Size
                                    ? job?.requestContainer?.Container_Size
                                    : null,
                                  index: key,
                                }}
                                getDataDetailSTID={getSTID}
                              />
                            </>
                          )
                        ) : (
                          <>
                            <ChooseSTID
                              data={{
                                id: data.ID_Trucking,
                                index: key,
                                date: job?.detailSlot?.slot.Date
                                  ? job?.detailSlot.slot.Date
                                  : null,
                                Size: job?.requestContainer?.Container_Size
                                  ? job?.requestContainer?.Container_Size
                                  : null,
                                index: key,
                              }}
                              getDataDetailSTID={getSTID}
                            />
                          </>
                        ))
                      )}
                      {Role_ID === 1 &&
                        (job?.assignJob ? (
                          <>
                            <p>
                              {job?.assignJob.masterSTID.STID_Number} -{" "}
                              {
                                job?.assignJob.masterSTID.masterDriver
                                  .Driver_Name
                              }{" "}
                              - {job?.requestContainer.Container_Size}
                              {`"`}
                            </p>
                          </>
                        ) : (
                          "-"
                        ))}
                    </div>
                  </TableCell>

                  <TableCell className="text-center">
                    {openTimeslot === key || openAssignJob === key ? (
                      <>
                        {Role_ID === 1 ? (
                          <>
                            <button
                              className="bg-white mr-2 border-primary border-2 text-primary px-8 py-2 rounded-lg text-sm"
                              onClick={() => setOpenTimeslot("")}
                            >
                              <p>Cancel</p>
                            </button>
                            <button
                              className="bg-primary text-white px-8 py-2 rounded-lg text-sm"
                              onClick={() => editBooking(job.id)}
                            >
                              <p>Edit & Send</p>
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="bg-white mr-2 border-primary border-2 text-primary px-8 py-2 rounded-lg text-sm"
                              onClick={() => setOpenAssignJob("")}
                            >
                              <p>Cancel</p>
                            </button>
                            <button
                              className="bg-primary text-white px-8 py-2 rounded-lg text-sm"
                              onClick={() =>
                                editAssignJob(job.assignJob.id, dataSTID.id)
                              }
                            >
                              <p>Edit & Send</p>
                            </button>
                          </>
                        )}
                      </>
                    ) : Role_ID === 1 && job?.requestContainer ? (
                      job?.assignJob ? (
                        <div>
                          {currentTime <= Closing_Time && (
                            <button
                              className=" bg-white mr-2 border-primary border-2 text-white px-8 py-2 rounded-lg text-sm"
                              onClick={() => setOpenTimeslot(key)}
                            >
                              <p className="text-primary">Edit</p>
                            </button>
                          )}
                          <PDFDownloadLink
                            document={<Eticket data={{ id_booking: job.id }} />}
                            fileName="Eticket"
                          >
                            <button className=" bg-primary text-white px-5 border-2 border-primary py-2 rounded-lg text-sm">
                              <p>View E-Ticket</p>
                            </button>
                          </PDFDownloadLink>
                        </div>
                      ) : (
                        <button
                          className=" bg-gray-400 text-white px-8 py-2 rounded-lg text-sm"
                          disabled={true}
                        >
                          <p>Save & Send</p>
                        </button>
                      )
                    ) : Role_ID === 1 ? (
                      timeslot.index == key ? (
                        <>
                          <button
                            className=" bg-primary text-white px-8 py-2 rounded-lg text-sm"
                            onClick={() => submitData(job.id)}
                          >
                            <p>Save & Send</p>
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className=" bg-gray-400 text-white px-8 py-2 rounded-lg text-sm"
                            onClick={() => submitData(job.id)}
                            disabled
                          >
                            <p>Save & Send</p>
                          </button>
                        </>
                      )
                    ) : job?.requestContainer ? (
                      job?.assignJob ? (
                        <>
                          <div>
                            {currentTime <= Closing_Time ? (
                              <>
                                <button
                                  className=" bg-white mr-2 border-primary border-2 text-white px-8 py-2 rounded-lg text-sm"
                                  onClick={() => setOpenAssignJob(key)}
                                >
                                  <p className="text-primary">Edit</p>
                                </button>
                              </>
                            ) : (
                              ""
                            )}
                            <PDFDownloadLink
                              document={
                                <Eticket data={{ id_booking: job.id }} />
                              }
                              fileName="Eticket"
                            >
                              <button className=" bg-primary text-white px-5 border-2 border-primary py-2 rounded-lg text-sm">
                                <p>View E-Ticket</p>
                              </button>
                            </PDFDownloadLink>
                          </div>
                        </>
                      ) : dataSTID.index === key ? (
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
                            onClick={() => submitData(job.id)}
                            disabled
                          >
                            <p>Save & Send</p>
                          </button>
                        </>
                      )
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
