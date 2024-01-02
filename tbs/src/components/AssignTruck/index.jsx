import React, { useEffect } from "react";
import { Check } from "lucide-react";
import { cn } from "src/lib/utils";
import { useState } from "react";
import { Button } from "src/components/ui/button";
import axios from "axios";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "src/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "src/components/ui/command";
import TableTimeslot from "../TableTimeslot";
import { id } from "date-fns/locale";
import { useSelector } from "react-redux";

export default function AssignTruck({ data }) {
  const [open, setOpen] = useState(false);
  const [trucking, setTrucking] = useState("");
  const [dataTrucking, setDataTrucking] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [openTrucking, setOpenTrucking] = useState(false);
  const [statusRequest, setStatusRequest] = useState([]);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const { Role_ID } = useSelector((state) => state.Auth.user);
  // const [dataBooking, setDataBooking] = useState([])

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const getTruckingCompany = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:3000/api/users/view/trucking",
      });
      console.log(response);
      setDataTrucking(() => response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getRequestTruckingCompany = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/api/users/search/reqTrucking/${data.id}`,
      });
      console.log(response);
      setStatusRequest(() => response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    disabledButton();
    getTruckingCompany();
    getRequestTruckingCompany();
  }, []);

  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/api/users/create/requestTC",
        data: {
          ID_Request: data.id,
          ID_Customer: trucking,
        },
      });
      console.log(response);
      setOpen(false);
      setTrucking("");
      // setDataBooking(()=>response.data)
      alert("Assign Job Success!");

    } catch (error) {
      console.log(error);
      setError(error.response.data);
      setTrucking("");
    }
  };

  const disabledButton = () => {
    if (statusRequest.ID_Status === 2) {
      setButtonDisabled(true);
    }
    setButtonDisabled(false);
  };

  return (
    <>
      {Role_ID === 1 && (
        <>
          <div className="w-full flex flex-row-reverse py-7">
            {/* tinggal ganti warna jadi abu2 kl di disabled */}
            <button
              className={`bg-${
                statusRequest.ID_Status === 2 ? "secondary" : "primary"
              } py-3 px-6 rounded-lg text-${
                statusRequest.ID_Status === 2 ? "primary" : "white"
              } btn items-center justify-center`}
              onClick={() =>
                statusRequest.ID_Status === 2 ? setOpen(false) : setOpen(true)
              }
              disabled={isButtonDisabled}
            >
              <p>Assign Trucking Company</p>
            </button>
          </div>
        </>
      )}
      {open ? (
        <form onSubmit={onSubmitForm}>
          <div className="absolute inset-0 bg-opacity-60 backdrop-blur-sm flex justify-center items-center bg-black">
            <div className="bg-white flex place-content-center w-1/2 h-auto rounded-xl py-7 px-11">
              <div className="rounded-lg w-full p-2">
                <div className="flex flex-row-reverse">
                  <button className="btn" onClick={() => setOpen(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                    >
                      <path
                        d="M18 1.5L1 18.5"
                        stroke="black"
                        stroke-width="1.61905"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1 1.5L18 18.5"
                        stroke="black"
                        stroke-width="1.61905"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="py-3.5">
                  <div className="border-b-2 border-gray-400">
                    <p className="font-medium">Assign Trucking Company</p>
                    <p className="text-gray-500 pb-6 text-sm">
                      Tambahkan Nama Trucking Company beserta Jumlah
                      Containernya
                    </p>
                  </div>
                  <div className="border-b-2 border-gray-400">
                    <div className="my-7 bg-gray-200 rounded-md">
                      <div className="px-8 py-4">
                        <p className="text-sm font-medium pb-5">
                          Trucking Company
                        </p>
                        <Popover
                          open={openTrucking}
                          onOpenChange={setOpenTrucking}
                          className="w-full"
                        >
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={open}
                              className="w-full justify-between text-gray-500"
                            >
                              {trucking
                                ? dataTrucking.find(
                                    (truckings) => truckings.id === trucking
                                  )?.Company_Name
                                : "Trucking"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="z-0 p-0">
                            <Command>
                              <CommandInput
                                placeholder="Search Trucking..."
                                onChange={handleInputChange}
                              />
                              <CommandEmpty>Not Found.</CommandEmpty>
                              <CommandGroup>
                                {dataTrucking.map((truckings) => (
                                  <CommandItem
                                    key={truckings.id}
                                    value={truckings.id}
                                    onSelect={() => {
                                      setTrucking(
                                        truckings.id === truckings
                                          ? ""
                                          : truckings.id
                                      );
                                      setOpenTrucking(false);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        trucking === truckings.id
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {truckings.Company_Name}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-3.5 right-0 flex justify-end">
                  <button className="btn" onClick={() => setOpen(false)}>
                    <div className="w-28 py-3.5 mr-5 border border-primary text-primary rounded-lg font-medium ">
                      <p>Batal</p>
                    </div>
                  </button>
                  <button
                    className="w-28 py-3.5 bg-primary text-white rounded-lg font-medium"
                    type="submit"
                  >
                    <p>Simpan</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : (
        ""
      )}
      <TableTimeslot data={statusRequest} dataTCA={data}/>
    </>
  );
}
