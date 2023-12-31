import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import { DatePickerWithRange } from "../DatePicker";
import { useState } from "react";
import AccordionTimeslot from "../AccordionTimeslot/Index";
import { endOfDay } from "date-fns";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { DropdownEndHour } from "../DropdownEndHour";
import { DropdownEndMinute } from "../DropdownEndMinute";
import { DropdownStartHour } from "../DropdownStartHour";
import { DropdownStartMinute } from "../DropdownStartMinute";
import axios from "axios";
import { useSelector } from "react-redux";

export function AddTimeSlot() {
  const [open, setOpen] = useState(false);
  // const [data, setData] = useState([]);
  const [fromHour, setFromHour] = useState("");
  const [fromMinute, setFromMinute] = useState("");
  const [toHour, setToHour] = useState("");
  const [toMinute, setToMinute] = useState("");
  const [capacity, setCapacity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { Customer_ID } = useSelector((state) => state.Auth.user);

  const submitTimeSlot = async (event) => {
    event.preventDefault();
    if(!fromHour){
      alert("Field from hour is required")
    }
    if(fromMinute === null){
      alert("Field from minute is required")
    }
    if(!toHour) {
      alert("Field to hour is required")
    }
    if(toMinute === null){
      alert("Field to minute is required")
    }

    const from = fromHour + ":" + fromMinute
    const to = toHour + ":" + toMinute 

    try{
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/api/users/add/slot",
        data: {
          startDate: startDate,
          endDate: endDate,
          from: from,
          to: to,
          capacity: capacity,
          ID_Terminal : 1
        }
      })
      console.log(response.data)
      setOpen(false)
      setCapacity("")
    }
    catch(error) {
      console.log(error);
    }
  };
  // const [penampung, setPenampung] = useState({
  //   startDate:"",
  //   endDate:""
  // })

  // setPenampung({
  //   stardate:data,
  //   endDate:end
  // })
  // const tampung = [
  //   {
  //     idTerminal,
  //     detail: [{ startDate, endDate }, {star}],
  //   },
  // ];

  // [{data1}, {data2}]
  // function startDateEndate(start) {
  //   [

  //   ]
  //     // return `${start-end}`
  // }

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
        className="flex gap-[2px] bg-primary rounded-lg w-[170px] h-[54px] text-white btn items-center justify-center"
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
        <p className="font-medium text-white">Add Time slot</p>
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
                <DatePickerWithRange dataDate={handleDate}/>
              </div>
              <div className="border-b">
                <div className="flex flex-col gap-2.5 pb-5">
                  <h2 className="font-medium">Timeslot</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border rounded-lg">
                      <div className="relative">
                        <AccordionTrigger className="text-sm">
                          Time Slot
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
                          <div className="grid grid-cols-2 gap-2 items-center">
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
