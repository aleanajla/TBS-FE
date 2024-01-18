import React from "react";
import SearchBar from "../SearchBar";
import StatusJob from "../StatusJob";
import TableValue from "../TableValue";
import { useSelector } from "react-redux";

export default function TableTimeslot({ data, dataTCA }) {
  const { Role_ID } = useSelector((state) => state.Auth.user);
  return (
    <>
      <div className="p-4 flex flex-col gap-6">
        {Role_ID === 1 && (
          <>
            <div className="flex justify-between">
              <div className="flex flex-row items-center gap-3">
                <p className="font-medium text-sm">{data.Customer_Name}</p>
                <div className="bg-[#0F9B71] rounded-full text-white font-medium py-1 px-2">
                  <p className="text-sm">{dataTCA.count}/{dataTCA.Qty}</p>
                </div>
              </div>
              <StatusJob status={{ Status_Name: data.Status_Name }} />
            </div>
          </>
        )}
      </div>
      <div className="w-full border rounded-lg">
        <TableValue data={data}/>
      </div>
    </>
  );
}
