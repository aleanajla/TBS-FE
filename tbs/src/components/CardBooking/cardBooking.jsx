import React, { useEffect, useState } from "react";
import { ProgressBar } from "../ProgressBar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { API_LOCAL } from "src/config/API";


export default function CardBooking() {
  const [booking, setBooking] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { Customer_ID } = useSelector((state) => state.Auth.user);
  const [countTCA, setCountTCA] = useState([]);
  const navigate = useNavigate();

  const getDataBooking = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${API_LOCAL}/api/users/view/request/${Customer_ID}`,
        params: {
          search: searchTerm,
        },
      });

      console.log(response);
      setBooking(() => response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (
    id,
    Service_Name,
    Vessel_Name,
    No_Request,
    Closing_Time,
    Port_Name,
    Terminal_Name,
    Qty,
    count
  ) => {
    const data = {
      id: id,
      Service_Name: Service_Name,
      Vessel_Name: Vessel_Name,
      No_Request: No_Request,
      Closing_Time: Closing_Time,
      Port_Name: Port_Name,
      Terminal_Name: Terminal_Name,
      Qty: Qty,
      count: count,
    };
    navigate("/timeslot", { state: data });
  };

  const countingTCA = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${API_LOCAL}/api/users/view/countingTCA/${booking.id}`,
      });
      setCountTCA(() => response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataBooking();
    countingTCA();
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="py-6">
        <div className="border-2 border-gray-200 rounded-lg p-6">
          <div
            class="flex items-center mx-auto w-full mb-5"
            x-data="{ search: '' }"
          >
            <div class="w-full">
              <input
                type="search"
                class="w-full px-6 text-gray-800 bg-[#F8F8F8] py-4 rounded-xl focus:outline-none"
                placeholder="Search..."
                x-model="search"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button
                type="submit"
                class="flex items-center justify-center w-12 h-12 text-white rounded-r-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.59 12.41 8.11 13 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z"
                    fill="#7D7D7D"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        {booking.map((bookings) => (
          <div className="border-2 border-gray-300 rounded-md w-full">
            {/* Header Request */}
            <div className="border-b-2 border-grey-400 w-full h-14 flex items-center">
              <p className="font-medium text-gray text-md px-8">
                Request ID : {bookings.requests.No_Request}
              </p>
            </div>
            {/* Detail */}
            <div className="w-full mt-22 px-8">
              <div className="flex flex-row gap-x-7 border-b-2 border-grey-400 py-7">
                <div>
                  <img src="/images/vesselLogo.png" alt="" />
                </div>
                <div>
                  <div className="flex flex-row gap-4 items-center">
                    <p className="font-medium text-md">
                      {bookings.requests.Vessel_Name.toUpperCase()}
                    </p>
                    <div className="px-4 py-0.5 bg-primary text-white rounded-md font-medium">
                      <p>{bookings.requests.Service_Name.toUpperCase()}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center gap-1.5 py-2.5 font-medium">
                      <div className="flex flex-row items-center gap-x-1.5 pr-1.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M6 1.5V3.75"
                            stroke="#292D32"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 1.5V3.75"
                            stroke="#292D32"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.625 6.8175H15.375"
                            stroke="#292D32"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z"
                            stroke="#292D32"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.7713 10.2749H11.778"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.7713 12.5249H11.778"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.99588 10.2749H9.00262"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.99588 12.5249H9.00262"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.22049 10.2749H6.22723"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.22049 12.5249H6.22723"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <p>{bookings.requests.createdAt}</p>
                      </div>
                      <div className="flex flex-row items-center gap-x-1.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M6 1.5V3.75"
                            stroke="#292D32"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 1.5V3.75"
                            stroke="#292D32"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.625 6.8175H15.375"
                            stroke="#292D32"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z"
                            stroke="#292D32"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.7713 10.2749H11.778"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.7713 12.5249H11.778"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.99588 10.2749H9.00262"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.99588 12.5249H9.00262"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.22049 10.2749H6.22723"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.22049 12.5249H6.22723"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <p>Closing Time : {bookings.requests.Closing_Time}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2.5">
                    <div className="flex flex-row">
                      <p className="font-medium text-gray-500">Port: </p>
                      <p className="pl-1 text-gray-500">
                        {bookings.requests.Port_Name}
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <p className="font-medium text-gray-500">Terminal: </p>
                      <p className="pl-1 text-gray-500">
                        {bookings.requests.Terminal_Name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="py-5 ">
                  <div className="w-full">
                    <ProgressBar
                      value={bookings.counts.count}
                      max={bookings.requests.Qty}
                    />
                    {/* <progress class="progress w-68" value="3" max="20"></progress> */}
                    {/* <progress className="progress progress-red-500 bg-black rounded w-full" value="10" max="100"></progress> */}
                  </div>
                  <div className="flex flex-row pt-2.5 pb-1">
                    <div className="flex flex-row ">
                      <p className="text-primary font-poppins">Time Slot</p>
                      <p className="text-primary font-bold px-1 font-poppins">
                        {bookings.counts.count}
                      </p>
                      <p className="text-primary font-poppins">dari</p>
                      <p className="text-primary px-1 font-poppins">
                        {bookings.requests.Qty}
                      </p>
                      <p className="text-primary font-poppins">telah terisi</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    className="bg-primary text-white h-12 px-4 rounded-md items-center"
                    onClick={() =>
                      handleClick(
                        bookings.requests.id,
                        bookings.requests.Service_Name,
                        bookings.requests.Vessel_Name,
                        bookings.requests.No_Request,
                        bookings.requests.Closing_Time,
                        bookings.requests.Port_Name,
                        bookings.requests.Terminal_Name,
                        bookings.requests.Qty,
                        bookings.counts.count
                      )
                    }
                  >
                    <p className="font-medium">Booking Time Slot</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
