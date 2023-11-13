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
        label: "C100301 - B 3498 CDR",
    },
    {
        value: "2",
        label: "C100398 - B 3498 BKS",
    },
    {
        value: "3",
        label: "C100647 - B 3498 RFJ",
    },
    {
        value: "4",
        label: "C100039 - B 3498 KLD",
    },
    {
        value: "5",
        label: "C100172 - B 3498 FN",
    },
]

export function ChooseSTID() {
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
                        : "STID"}
                        
                    {/* <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] p-0">
                <Command>
                    <CommandInput placeholder="Search STID..." />
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
