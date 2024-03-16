import { Input } from "src/components/ui/input";
import { DatePickerWithRange } from "../DatePicker";
import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import { DropdownEndHour } from "../DropdownEndHour";
import { DropdownEndMinute } from "../DropdownEndMinute";
import { DropdownStartHour } from "../DropdownStartHour";
import { DropdownStartMinute } from "../DropdownStartMinute";
import axios from "axios";
import { API_LOCAL } from "src/config/API";

export function EditTimeSlot() {
    const [open, setOpen] = useState(false);
    const [fromHour, setFromHour] = useState("");
    const [fromMinute, setFromMinute] = useState("");
    const [toHour, setToHour] = useState("");
    const [toMinute, setToMinute] = useState("");
    const [capacity, setCapacity] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const submitTimeSlot = async (event) => {
        event.preventDefault();
        if (!fromHour) {
            alert("Field from hour is required")
        }
        if (fromMinute === null) {
            alert("Field from minute is required")
        }
        if (!toHour) {
            alert("Field to hour is required")
        }
        if (toMinute === null) {
            alert("Field to minute is required")
        }

        const from = fromHour + ":" + fromMinute
        const to = toHour + ":" + toMinute

        try {
            const response = await axios({
                method: "post",
                url: `${API_LOCAL}/api/users/add/slot`,
                data: {
                    startDate: startDate,
                    endDate: endDate,
                    from: from,
                    to: to,
                    capacity: capacity,
                    ID_Terminal: 1
                }
            })
            console.log(response.data)
            setOpen(false)
            setCapacity("")
        }
        catch (error) {
            console.log(error);
        }
    };

    const handleStartHour = (data) => {
        setFromHour(data);
    };

    const handleStartMinute = (data) => {
        setFromMinute(data);
    };

    const handleEndHour = (data) => {
        setToHour(data);
    };
    const handleEndMinute = (data) => {
        setToMinute(data);
    };

    const handleChangeCapacity = (event) => {
        const newValue = event.target.value;
        setCapacity(newValue);
    };

    const handleDate = (data) => {
        setStartDate(data.from)
        setEndDate(data.to)
    }

    return (
        <>
            <button
                className="flex gap-[2px] bg-white rounded-lg w-[100px] h-[54px] text-white btn items-center justify-center"
                onClick={() => setOpen(true)}
            >
                <p className="font-medium text-primary">Edit</p>
            </button>
            {open ? (
                <form onSubmit={submitTimeSlot}>
                    <div className="absolute inset-0 bg-opacity-60 backdrop-blur-sm flex justify-center items-center bg-black">
                        <div className=" bg-white w-[947px] max-h-[720px] rounded-xl py-[31px] px-[47px] flex flex-col gap-4">
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
                            <h1 className="text-lg font-medium">Add Timeslot</h1>
                            <div className="flex flex-col gap-4 scrollbar-hide overflow-y-scroll">
                                <div className="flex flex-col gap-2">
                                    <h2 className="font-medium">Date</h2>
                                    {/* <p>Start Date: {startDate ? startDate : "-"}, End Date: {endDate? endDate : "-"}</p> */}
                                    <DatePickerWithRange dataDate={handleDate} />
                                </div>
                                <div className="border-b">
                                    <div className="flex flex-col gap-2.5 pb-5">
                                        <h2 className="font-medium">Timeslot</h2>
                                        <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem value="item-1" className="border rounded-lg">
                                                <div className="relative">
                                                    <AccordionTrigger className="text-sm">
                                                        Time Slot
                                                        <button>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                                <path d="M12.6602 22.5076C18.1602 22.5076 22.6602 18.0076 22.6602 12.5076C22.6602 7.00763 18.1602 2.50763 12.6602 2.50763C7.16016 2.50763 2.66016 7.00763 2.66016 12.5076C2.66016 18.0076 7.16016 22.5076 12.6602 22.5076Z" stroke="#F64E60" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M9.83008 15.3376L15.4901 9.67761" stroke="#F64E60" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M15.4901 15.3376L9.83008 9.67761" stroke="#F64E60" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>
                                                    </AccordionTrigger>
                                                </div>
                                                <AccordionContent>
                                                    <div className="flex flex-col gap-y-5 border-t pt-4">
                                                        <div className="grid grid-cols-2 gap-2 ">
                                                            <div className="flex flex-col gap-y-3 justify-between">
                                                                <p className="font-medium">From</p>
                                                                <div className="grid grid-cols-2 gap-2">
                                                                    <DropdownStartHour
                                                                        dataStartHour={handleStartHour}
                                                                    />
                                                                    <DropdownStartMinute
                                                                        dataStartMinute={handleStartMinute}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col gap-y-3 justify-between">
                                                                <p className="font-medium">To</p>
                                                                <div className="grid grid-cols-2 gap-2">
                                                                    <DropdownEndHour dataEndHour={handleEndHour} />
                                                                    <DropdownEndMinute
                                                                        dataEndMinute={handleEndMinute}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-1 gap-2 items-center">
                                                            <div className="flex flex-col gap-y-3">
                                                                <p className="font-medium">Real Capacity</p>
                                                                <Input
                                                                    type="Capacity Planning"
                                                                    placeholder="100"
                                                                    value={capacity}
                                                                    onChange={handleChangeCapacity}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row-reverse gap-3">
                                <button
                                    type="submit"
                                    className="w-[118px] h-[53px] items-center justify-center bg-primary text-sm rounded-full text-white"
                                >
                                    Save
                                </button>
                                <button
                                    className="w-[118px] h-[53px] items-center justify-center text-sm rounded-full border border-primary text-primary"
                                    onClick={() => setOpen(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            ) : (
                ""
            )}
        </>
    );
}
