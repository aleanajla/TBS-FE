"use client";

import * as React from "react";
import { Check } from "lucide-react";

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
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { API_LOCAL } from "src/config/API";

export function ChooseSTID({ data, getDataDetailSTID }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [STID_Number, setSTID_Number] = React.useState("");
  const [Driver, setDriver] = useState("");
  const [search, setSearch] = useState("");
  const [dataSTID, setSTID] = useState([]);
  const [Size, setSize] = useState("")

  const getDataSTID = async () => {
    try {
      const result = await axios({
        method: "get",
        url: `${API_LOCAL}/api/users/view/stid/booking/${data.id}`,
        params: {
          search: search,
          date: data.date
        },
      });
      console.log(result);
      setSTID(() => result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateSTID = (id, STID_Number, Driver_Name, Size) => {
    const datas = {
      id: id,
      STID_Number: STID_Number,
      Driver_Name: Driver_Name,
      index: data.index,
      Size: Size
    };
    console.log(datas, "UPDATE STID");
    getDataDetailSTID(datas);
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getDataSTID();
  }, [data]);

  return value ? (
    <>
      <p>
        {STID_Number} - {Driver} - {Size}{`"`}
      </p>
    </>
  ) : (
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
              ? dataSTID.find((stid) => stid.id === value)?.STID_Number
              : "STID"}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[250px] p-0">
          <Command>
            <CommandInput
              placeholder="Search STID..."
              onChange={handleInputChange}
            />
            <CommandEmpty>Not found.</CommandEmpty>
            <CommandGroup>
              {dataSTID.map((stid) => (
                stid.masterTruck.Size == data.Size &&  (
                <CommandItem
                  key={stid.id}
                  value={stid.id}
                  onSelect={() => {
                    setValue(stid.id === value ? "" : stid.id);
                    setOpen(false);
                    setSTID_Number(
                      stid.STID_Number === STID_Number ? "" : stid.STID_Number
                    );
                    setDriver(stid.masterDriver.Driver_Name);
                    setSize(stid.masterTruck.Size)
                    updateSTID(
                      stid.id,
                      stid.STID_Number,
                      stid.masterDriver.Driver_Name,
                      stid.masterTruck.Size
                    );
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === stid.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {stid.STID_Number} - {stid.masterDriver.Driver_Name} - {stid.masterTruck.Size}{`"`}
                </CommandItem>
                )
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}
