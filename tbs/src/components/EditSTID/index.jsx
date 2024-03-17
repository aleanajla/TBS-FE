import * as React from "react";
import { Button } from "src/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Check } from "lucide-react";
import {useEffect} from "react";


import { cn } from "src/lib/utils";
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
import { API_LOCAL } from "src/config/API";

export function EditSTID({ data }) {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState("");
    const { Customer_ID } = useSelector((state) => state.Auth.user);
    const [driver, setDriver] = useState("");
    const [dataDriver, setDataDriver] = useState([]);
    const [openDriver, setOpenDriver] = useState(false);
    const [search, setSearch] = useState('')


    const getDataDriver = async () => {
        try {
            let response = await axios({
                method: "get",
                url: `${API_LOCAL}/api/users/drivers/${Customer_ID}`,
                params: {
                    search: search
                }
            });
            setDataDriver(() => response.data);
            console.log(dataDriver);
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    const onSubmitForm = async (event) => {
        event.preventDefault();
        try {
            const response = await axios({
                method: "post",
                url: `${API_LOCAL}/api/users/update/stid`,
                data: {
                    id: data.id,
                    Driver_ID: driver
                },
            });
            console.log(response);
            setOpen(false);
            setDriver("");
            window.location.reload();
            alert("Sucessfully Edit!")
        } catch (error) {
            console.log(error);
            setError(error.response.data);
            setDriver("");
        }
    };

    useEffect(()=>{
        if(open){
          document.body.style.overflowY = 'hidden'
        }else{
          document.body.style.overflowY = 'scroll'
        }
        return() => {document.body.style.overflowY = 'scroll'}
      }, [open])

    React.useEffect(() => {
        getDataDriver();
    }, []);

    return (
        <>
            <button
                className="bg-primary text-white px-8 py-2 rounded-lg text-sm"
                onClick={() => setOpen(true)}
            >
                <p className="font-medium text-white">Edit</p>
            </button>
            {open ? (
                <form onSubmit={onSubmitForm}>
                    <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm flex justify-center items-center bg-black">
                        <div className=" bg-white w-[700px] max-h-[720px] rounded-xl py-[31px] px-[47px] flex flex-col gap-2">
                            <div className="flex flex-row-reverse">
                                <button className="btn" onClick={() => {
                                    setOpen(false)
                                    setError("")
                                }}>
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
                            <div>
                                <h1 className="text-lg font-semibold text-primary text-left">Edit STID</h1>
                                <p className="font-medium text-gray-400 text-left">
                                    Choose your driver to edit STID!
                                </p>

                            </div>
                            <div className="text-red-500 text-left">{error}</div>
                            <div className="flex justify-center items-center pt-4 pb-8 gap-14">
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    disabled
                                    className="w-[250px] justify-between bg-gray-200"
                                >
                                    <p className="text-gray-800">{data.Plat_Number}</p>
                                </Button>
                                -
                                <Popover open={openDriver} onOpenChange={setOpenDriver}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className="w-[250px] justify-between text-gray-500"
                                        >
                                            {driver
                                                ? dataDriver.find((drivers) => drivers.id === driver)
                                                    ?.Driver_Name
                                                : "Driver"}
                                            {/* <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="z-0 w-[250px] p-0">
                                        <Command>
                                            <CommandInput placeholder="Search driver..." onChange={handleInputChange} />
                                            <CommandEmpty>Not Found.</CommandEmpty>
                                            <CommandGroup>
                                                {dataDriver.map((drivers) => (
                                                    <CommandItem
                                                        key={drivers.id}
                                                        value={drivers.id}
                                                        onSelect={() => {
                                                            setDriver(
                                                                drivers.id === driver ? "" : drivers.id
                                                            );
                                                            setOpenDriver(false);
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                driver === drivers.id
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            )}
                                                        />
                                                        {drivers.Driver_Name}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="flex flex-row-reverse gap-3">
                                <button
                                    className={driver ? "w-[118px] h-[53px] items-center justify-center bg-primary text-sm rounded-full text-white" : "w-[118px] h-[53px] items-center justify-center bg-gray-500 text-sm rounded-full text-white"}
                                    type="submit"
                                    disabled={driver ? false : true}

                                >
                                    Save
                                </button>
                                <button
                                    className="w-[118px] h-[53px] items-center justify-center text-sm rounded-full border border-primary text-primary"
                                    onClick={() => {
                                        setOpen(false)
                                        setError("")
                                    }}>
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
