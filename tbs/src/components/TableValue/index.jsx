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
import { ChooseDriver } from "../ChooseDriver";
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

export default function TableValue({ data }) {
  const [dataBooking, setDataBooking] = useState([]);
  const [dataSTID, setDataSTID] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [search, setSearch] = useState("");
  const { Role_ID } = useSelector((state) => state.Auth.user);

  const getDataSTID = async () => {
    try {
      const result = await axios({
        method: "get",
        url: `http://localhost:3000/api/users/view/stid/${data.ID_Trucking}`,
        params: {
          search: search,
        },
      });
      console.log(result);
      setDataSTID(() => result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataContainer = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/api/users/view/containers`,
        params: {
          ID_Request: data.ID_Request,
        },
      });
      setDataBooking(() => response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getDataContainer();
    getDataSTID();
  }, [getDataContainer, getDataSTID]);

  return (
    <>
      {data.ID_Status === 2 && (
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              {/* <div className="w-full flex justify-between bg-[#F5F5F5]"> */}
              <TableHead className="text-center">No</TableHead>
              <TableHead className="text-center">Kontainer</TableHead>
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
                <TableCell className="text-center">{key + 1}</TableCell>
                <TableCell className="text-center font-medium text-gray-400">
                  {job.Container_Number}
                </TableCell>
                <TableCell>
                  <div className="flex place-content-center">
                    {Role_ID === 1 ? (
                      <ChooseTimeslot />
                    ): ""}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex place-content-center">
                    {Role_ID === 2 ? (
                      <>
                        <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={open}
                              className="w-[250px] justify-between text-gray-500"
                            >
                              {value
                                ? dataSTID.find((stid) => stid.id === value)
                                    ?.STID_Number
                                : "STID"}

                              {/* <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
                            </Button>
                          </PopoverTrigger>

                          <PopoverContent className="w-[250px] p-0">
                            <Command>
                              <CommandInput
                                placeholder="Search STID..."
                                onChange={handleInputChange}
                              />
                              <CommandEmpty>No framework found.</CommandEmpty>
                              <CommandGroup>
                                {dataSTID.map((stid) => (
                                  <CommandItem
                                    key={stid.id}
                                    value={stid.id}
                                    onSelect={() => {
                                      setValue(
                                        stid.id === value ? "" : stid.id
                                      );
                                      setOpen(false);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        value === stid.id
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {stid.STID_Number}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </>
                    ) : ""}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex place-content-center">
                    {Role_ID === 2 ? (
                      <>
                      <ChooseDriver />
                      </>
                    ): ""}
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
  );
}
