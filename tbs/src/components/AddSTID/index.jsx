import {useEffect} from "react";
import { Button } from "src/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Check } from "lucide-react";

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

export function AddSTID() {
  const [open, setOpen] = useState(false);
  const [driver, setDriver] = useState("");
  const [truck, setTruck] = useState("");
  const [dataDriver, setDataDriver] = useState([]);
  const [dataTruck, setDataTruck] = useState([]);
  const { Customer_ID } = useSelector((state) => state.Auth.user);
  const [openDriver, setOpenDriver] = useState(false);
  const [openTruck, setOpenTruck] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const getDataDriver = async () => {
    try {
      let response = await axios({
        method: "get",
        url: `http://localhost:3000/api/users/drivers/${Customer_ID}`,
        params: {
          search: search,
        },
      });
      setDataDriver(() => response.data);
      console.log(dataDriver);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataTruck = async () => {
    try {
      let response = await axios({
        method: "get",
        url: `http://localhost:3000/api/users/trucks/${Customer_ID}`,
        params: {
          search: search,
        },
      });
      setDataTruck(() => response.data);
      console.log(dataTruck);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/api/users/add/stid",
        data: {
          Driver_ID: driver,
          Truck_ID: truck,
        },
      });
      console.log(response);
      setOpen(false);
      setDriver("");
      setTruck("");
      alert("Sucessfully Added!");
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
      setDriver("");
      setTruck("");
    }
  };

  useEffect(() => {
    getDataDriver();
    getDataTruck();
  }, [search]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <button
        className="flex gap-[2px] bg-primary rounded-lg w-[150px] h-[50px] text-white btn items-center justify-center"
        onClick={() => setOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M18.0234 12.7735H6.02344C5.61344 12.7735 5.27344 12.4335 5.27344 12.0235C5.27344 11.6135 5.61344 11.2735 6.02344 11.2735H18.0234C18.4334 11.2735 18.7734 11.6135 18.7734 12.0235C18.7734 12.4335 18.4334 12.7735 18.0234 12.7735Z"
            fill="white"
          />
          <path
            d="M12.0234 18.7735C11.6134 18.7735 11.2734 18.4335 11.2734 18.0235V6.02353C11.2734 5.61353 11.6134 5.27353 12.0234 5.27353C12.4334 5.27353 12.7734 5.61353 12.7734 6.02353V18.0235C12.7734 18.4335 12.4334 18.7735 12.0234 18.7735Z"
            fill="white"
          />
        </svg>
        <p className="font-medium text-white">Add STID</p>
      </button>
      {open ? (
        <form onSubmit={onSubmitForm}>
          <div className="absolute inset-0 bg-opacity-60 backdrop-blur-sm flex justify-center items-center bg-black">
            <div className=" bg-white w-[700px] max-h-[720px] rounded-xl py-[31px] px-[47px] flex flex-col gap-2">
              <div className="flex flex-row-reverse">
                <button
                  className="btn"
                  onClick={() => {
                    setOpen(false);
                    setError("");
                  }}
                >
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
              <h1 className="text-lg font-semibold text-primary">Add STID</h1>
              <p className="font-medium text-gray-400">
                Choose your truck and driver to associate them!
              </p>
              <div className="text-red-500">{error}</div>
              <div className="flex justify-center items-center py-8 gap-14">
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
                      <CommandInput
                        placeholder="Search driver..."
                        onChange={handleInputChange}
                      />
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
                -
                <Popover open={openTruck} onOpenChange={setOpenTruck}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-[250px] justify-between text-gray-500"
                    >
                      {truck
                        ? dataTruck.find((trucks) => trucks.id === truck)
                            ?.Plat_Number
                        : "Truck"}

                      {/* <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[250px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search truck..."
                        onChange={handleInputChange}
                      />
                      <CommandEmpty>Not Found.</CommandEmpty>
                      <CommandGroup>
                        {dataTruck.map((trucks) => (
                          <CommandItem
                            key={trucks.id}
                            value={trucks.id}
                            onSelect={() => {
                              setTruck(trucks.id === truck ? "" : trucks.id);
                              setOpenTruck(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                truck === trucks.id
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {trucks.Plat_Number}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex flex-row-reverse gap-3">
                <button
                  className="w-[118px] h-[53px] items-center justify-center bg-primary text-sm rounded-full text-white"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="w-[118px] h-[53px] items-center justify-center text-sm rounded-full border border-primary text-primary"
                  onClick={() => {
                    setOpen(false);
                    setError("");
                  }}
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
