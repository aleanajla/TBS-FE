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

const frameworks = [
    {
        value: "1",
        label: "Asep Kurniawan",
    },
    {
        value: "2",
        label: "Saiful Makmur",
    },
    {
        value: "3",
        label: "Budi Lukman",
    },
    {
        value: "4",
        label: "Nurjaya Muhammad",
    },
    {
        value: "5",
        label: "Udin Sukmana",
    },
]

export function ChooseDriver() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

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
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : "Driver"}
                    {/* <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="z-0 w-[250px] p-0">
                <Command>
                    <CommandInput placeholder="Search driver..." />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        {frameworks.map((framework) => (
                            <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
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
