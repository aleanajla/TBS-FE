import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "src/components/ui/table";
import { EditSTID } from "../EditSTID";
import { API_LOCAL } from "src/config/API";

export function STIDtable() {
  const [STID, setSTID] = useState([]);
  const { Customer_ID } = useSelector((state) => state.Auth.user);
  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };
  
  const getData = async () => {
    try {
      const result = await axios({
        method: "get",
        url: `${API_LOCAL}/api/users/view/stid/${Customer_ID}`,
        params: {
          search: search ? search : "",
        },
      });

      setSTID(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div className="py-10 px-4 flex flex-col gap-8 border rounded-lg">
      <div
        class="flex items-center mx-auto bg-[#F8F8F8] rounded-lg w-full"
        x-data="{ search: '' }"
      >
        <div class="w-full">
          <input
            type="search"
            class="w-full px-4 py-1 bg-[#F8F8F8] text-gray-800 text-sm rounded-full focus:outline-none"
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
      <div className="scrollbar-hide overflow-y-scroll max-h-[600px]"></div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">No</TableHead>
            <TableHead className="text-center">STID</TableHead>
            <TableHead className="text-center">Driver</TableHead>
            <TableHead className="text-center">Plat Number</TableHead>
            <TableHead className="text-center">Truck Size</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="px-0">
          {STID.map((stid, index) => (
            <TableRow key={stid.id}>
              <TableCell className="text-center">{index + 1}</TableCell>
              <TableCell className="text-center">{stid.STID_Number}</TableCell>
              <TableCell className="text-center">
                {stid.masterDriver.Driver_Name}
              </TableCell>
              <TableCell className="text-center">
                {stid.masterTruck.Plat_Number}
              </TableCell>
              <TableCell className="text-center">
                {stid.masterTruck.Size}
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-4">
                  <EditSTID data={{ id: stid.id, Plat_Number: stid.masterTruck.Plat_Number }} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}