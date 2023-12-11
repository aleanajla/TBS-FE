"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "src/lib/utils"
import { Button } from "src/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "src/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "src/components/ui/popover"
import axios from "axios"
import { useState } from "react"




export function ChooseSTID() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [search, setSearch] = useState('');
    const [dataSTID, setSTID] = useState([])
    
    // const getData = async () => {
    //     try {
    //       const result = await axios({
    //         method: "get",
    //         url: `http://localhost:3000/api/users/view/stid/${id}`,
    //         params: {
    //           search: search,
    //         },
    //       });
    
    //       setSTID(() => result.data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    // };
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[250px] justify-between text-gray-500"
                >
                    {value
                        ? dataSTID.find((framework) => framework.value === value)?.STID_Number
                        : "STID"}
                        
                    {/* <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] p-0">
                <Command>
                    <CommandInput placeholder="Search STID..." />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        {dataSTID.map((framework) => (
                            <CommandItem
                                key={framework.id}
                                value={framework.id}
                                onSelect={() => {
                                    setValue(framework.id === value ? "" : framework.id)
                                    setOpen(false)
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === framework.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {framework.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
