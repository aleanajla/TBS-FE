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
import { useSelector } from "react-redux"
import axios from "axios"

export function ChooseDriver() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    const [dataDriver, setDataDriver] = React.useState([])
    const {Customer_ID} = useSelector((state) => state.Auth.user)

    const getDataDriver = async() => {
        try{
            let response = await axios({
                method: "get",
                url: `http://localhost:3000/api/users/drivers/${Customer_ID}`
            })
            setDataDriver(()=> response.data)
            console.log(dataDriver);
        }
        catch(error){
            console.log(error);
        }
    }

    React.useEffect(()=> {
        getDataDriver();
    }, [])

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
                        ? dataDriver.find((driver) => driver.id === value)?.Driver_Name
                        : "Driver"}
                    {/* <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="z-0 w-[250px] p-0">
                <Command>
                    <CommandInput placeholder="Search driver..." />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        {dataDriver.map((driver) => (
                            <CommandItem
                                key={driver.id}
                                value={driver.id}
                                onSelect={() => {
                                    setValue(driver.id === value ? "" : driver.id)
                                    setOpen(false)
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === driver.id ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {driver.Driver_Name}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
