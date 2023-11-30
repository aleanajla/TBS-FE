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

export function ChooseTruck() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [dataTruck, setDataTruck] = React.useState([])
    const {Customer_ID} = useSelector((state) => state.Auth.user)

    const getDataTruck = async() => {
        try{
            let response = await axios({
                method: "get",
                url: `http://localhost:3000/api/users/trucks/${Customer_ID}`
            })
            setDataTruck(()=> response.data)
            console.log(dataTruck);
        }
        catch(error){
            console.log(error);
        }
    }

    // React.useEffect(()=> {
    //     getDataTruck();
    //     console.log("value: ",value);
    // }, [])

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
                        ? dataTruck.find((truck) => truck.id === value)?.Plat_Number
                        : "Truck"}
                        
                    {/* <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] p-0">
                <Command>
                    <CommandInput placeholder="Search truck..." />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        {dataTruck.map((truck) => (
                            <CommandItem
                                key={truck.id}
                                value={truck.id}
                                onSelect={() => {
                                    setValue(truck.id === value ? "" : truck.id)
                                    setOpen(false)
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === truck.id ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {truck.Plat_Number}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
