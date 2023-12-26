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
import { useEffect } from "react"

export function ChooseDriver({data}) {
    // const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    const updateDriver = () => {
        setValue(data.Driver_Name);
    } 

    useEffect(() => {
        updateDriver();
    }, [])

    return (
        data.length !=0 ? (
            <p>{value}</p>
        ) :
        "-"
    )
}
