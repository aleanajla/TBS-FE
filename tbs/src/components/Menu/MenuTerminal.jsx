import React from "react";
import { Link } from "react-router-dom";

export function MenuTerminal() {
  return (
    <>
      <div className="flex flex-col">
        <Link to={"/CapacityPlanning"}>
          <button className="flex flex-col items-center rounded-md px-4 pt-4 min-h-[180px] gap-4" style={{ backgroundColor: "#38358F" }}>
            <img src="/images/menuTimeSlotManagement.svg" />
            <p className="w-24 text-center font-medium">Capacity <br /> Planning </p>
          </button>
        </Link>
      </div>
    </>
  );
}
