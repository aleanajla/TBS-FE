import React from "react";

export default function StatusJob({ status }) {
  return (
    <>
      {status.Status_Name === 'Waiting Approval' && (
        <>
          <div className="bg-[#FFF8DD] rounded-xl py-2 px-4 justify-center items-center">
            <p className="text-[#FABC2F] text-sm font-medium">
              {status.Status_Name}
            </p>
          </div>
        </>
      )}
      {status.Status_Name === 'Approved' && (
        <>
          <div className="bg-[#00A36C] rounded-xl py-2 px-4 justify-center items-center">
            <p className="text-[#FFFFFF] text-sm font-medium"> {status.Status_Name}</p>
          </div>
        </>
      )}
      {status.Status_Name === 'Rejected' && (
        <>
          <div className="bg-[#FF0000] rounded-xl py-2 px-4 justify-center items-center">
            <p className="text-[#FFFFFF] text-sm font-medium"> {status.Status_Name}</p>
          </div>
        </>
      )}
    </>
  );
}
