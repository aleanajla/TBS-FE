import React from "react";
import { Link } from "react-router-dom";

export function MenuTC() {
  return (
    <>
      <Link to={"/myBooking"}>
        <button
          className="w-32 flex flex-col items-center rounded-md p-2"
          style={{ backgroundColor: "#38358F" }}
        >
          <img src="/images/homepage_mybooking_logo.svg" />
          <p className="w-24 text-center">STID</p>
        </button>
      </Link>
      <Link to={"/myBooking"}>
        <button
          className="w-32 flex flex-col items-center rounded-md p-2"
          style={{ backgroundColor: "#38358F" }}
        >
          <img src="/images/homepage_mybooking_logo.svg" />
          <p className="w-24 text-center">Transport Order</p>
        </button>
      </Link>
    </>
  );
}
