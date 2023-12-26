"use client";

import * as React from "react";
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
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function ChooseSTID({ data, getDataDetailSTID }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [STID_Number, setSTID_Number] = React.useState("");
  const [search, setSearch] = useState("");
  const [dataSTID, setSTID] = useState([]);

  const getDataSTID = async () => {
    try {
      const result = await axios({
        method: "get",
        url: `http://localhost:3000/api/users/view/stid/${data.id}`,
        params: {
          search: search,
        },
      });
      console.log(result);
      setSTID(() => result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateSTID = (id, STID_Number, Driver_Name) => {
    const datas = {id: id, STID_Number: STID_Number, Driver_Name: Driver_Name, index: data.index}
    console.log(datas, "UPDATE STID");
    getDataDetailSTID(datas);
  }

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(()=> {
    getDataSTID()
  }, [data])

  return (
    value ? (
      <>
        <p>{STID_Number}</p>
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

              {/* <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
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
                  <CommandItem
                    key={stid.id}
                    value={stid.id}
                    onSelect={() => {
                      setValue(stid.id === value ? "" : stid.id);
                      setOpen(false);
                      setSTID_Number(stid.STID_Number === STID_Number ? "" : stid.STID_Number)
                      updateSTID(stid.id, stid.STID_Number, stid.masterDriver.Driver_Name)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === stid.id ? "opacity-100" : "opacity-0"
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
    )
  );
}
