import React from "react";
import Layout from "src/components/Layouts/Layout";
import { STIDtable } from "src/components/STIDTable";
import { AddSTID } from "src/components/AddSTID";
import SearchBar from "src/components/SearchBar";
import { Link } from "react-router-dom";

export default function STID() {
  return (
    <Layout>
      <div className="flex flex-col gap-10">
        <div>
          <Link to={"/homepage"} className="flex gap-4 items-center pb-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20.0002 10.9981V12.9981H8.00016L13.5002 18.4981L12.0802 19.9181L4.16016 11.9981L12.0802 4.07812L13.5002 5.49813L8.00016 10.9981H20.0002Z"
                fill="#7D7D7D"
              />
            </svg>
            <p className="font-medium text-md text-[#7D7D7D]">Homepage</p>
          </Link>
          {/* <button className="flex gap-4 items-center pb-7">
                    </button> */}
          <div className="flex justify-between items-center pt-5">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold text-primary">
                Single Truck Identfication Data
              </h1>
              <h2 className="text-xl font-medium text-[#7D7D7D]">
                Truck and driver association
              </h2>
            </div>
            {/* <div className="flex flex-row-reverse"> */}
            <AddSTID />
            {/* </div> */}
          </div>
        </div>
        <STIDtable />
      </div>
    </Layout>
  );
}
