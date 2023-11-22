import React from "react";
import { Link } from "react-router-dom";

export function MenuTC() {
  return (
    <>
      <div className="flex flex-col">
        <Link to={"/transportOder"}>
          <button className="flex flex-col items-center rounded-md px-4 pt-4 min-h-[180px] gap-4" style={{ backgroundColor: "#38358F" }}>
            <img src="/images/transportOrdeLogo.svg" />
            <p className="w-24 text-center font-medium">Transport <br /> Order </p>
          </button>
        </Link>
      </div>
      <div className="w-full flex flex-col" >
        <Link to={"/STID"}>
          <button className="flex flex-col items-center rounded-md px-4 pt-4 min-h-[180px] gap-4" style={{ backgroundColor: "#38358F" }}>
            <img src="/images/STIDlogo.svg" />
            <p className="w-24 text-center font-medium"> STID <br />  </p>
          </button>
        </Link>
      </div>
    </>
  );
}
