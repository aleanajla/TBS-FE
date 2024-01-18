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

export default function TableValue({ data }) {
  console.log(data.ID_Request, "data props");
  const [dataContainer, setDataContainer] = useState([]);
  const [dataSTID, setDataSTID] = useState([]);
  const { Role_ID } = useSelector((state) => state.Auth.user);
  const [timeslot, setTimeslot] = useState([]);
  const [openTimeslot, setOpenTimeslot] = useState("");
  const [openAssignJob, setOpenAssignJob] = useState(false);

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
      alert("Successfully Send!");
      getDataContainer();
    } catch (error) {
      console.log(error);
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
              <TableHead className="text-center">Kontainer</TableHead>
              <TableHead className="text-center">Slot Waktu</TableHead>
              <TableHead className="text-center">STID - Driver - Size</TableHead>
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
                          }}
                          updateData={getDataFromChild}
                        />
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
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex place-content-center">
                      {openAssignJob === key && Role_ID === 2 ? (
                        <>
                          <ChooseSTID
                            data={{ id: data.ID_Trucking, index: key, date: job?.detailSlot?.slot.Date ? job?.detailSlot.slot.Date: null, Size: job?.requestContainer.Container_Size}}
                            getDataDetailSTID={getSTID}
                          />
                        </>
                      ) : (
                        Role_ID === 2 &&
                        (job?.assignJob ? (
                          <>
                            <p>
                              {job?.assignJob.masterSTID.STID_Number} - {" "}
                              {
                                job?.assignJob.masterSTID.masterDriver
                                  .Driver_Name
                              } - {" "}
                              {
                                job?.requestContainer.Container_Size
                              }{`"`}
                            </p>
                          </>
                        ) : (
                          <>
                            <ChooseSTID
                              data={{ id: data.ID_Trucking, index: key, date: job?.detailSlot?.slot.Date ? job?.detailSlot.slot.Date: null, Size: job?.requestContainer.Container_Size}}
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
                              } - {" "}
                              {
                                job?.requestContainer.Container_Size
                              }{`"`}
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
                          <button
                            className=" bg-white mr-2 border-primary border-2 text-white px-8 py-2 rounded-lg text-sm"
                            onClick={() => setOpenTimeslot(key)}
                          >
                            <p className="text-primary">Edit</p>
                          </button>
                          <PDFDownloadLink
                              document={<Eticket data={{id_booking: job.id}}/>}
                              fileName="Eticket"
                            >
                              <button
                                className=" bg-primary text-white px-5 border-2 border-primary py-2 rounded-lg text-sm"
                              >
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
                      <>
                        <button
                          className=" bg-primary text-white px-8 py-2 rounded-lg text-sm"
                          onClick={() => submitData(job.id)}
                        >
                          <p>Save & Send</p>
                        </button>
                      </>
                    ) : job?.requestContainer ? (
                      job?.assignJob ? (
                        <>
                          <div>
                            <button
                              className=" bg-white mr-2 border-primary border-2 text-white px-8 py-2 rounded-lg text-sm"
                              onClick={() => setOpenAssignJob(key)}
                            >
                              <p className="text-primary">Edit TC</p>
                            </button>
                            <PDFDownloadLink
                              document={<Eticket data={{id_booking: job.id}}/>}
                              fileName="Eticket"
                            >
                              <button
                                className=" bg-primary text-white px-5 border-2 border-primary py-2 rounded-lg text-sm"
                              >
                                <p>View E-Ticket</p>
                              </button>
                            </PDFDownloadLink>
                          </div>
                        </>
                      ) : (
                        <>
                          <button
                            className=" bg-primary text-white px-8 py-2 rounded-lg text-sm"
                            onClick={() => submitAssignJob(job.id, dataSTID.id)}
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
