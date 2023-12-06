import React, { useState } from "react";
import Layout from "../../components/Layouts/Layout";
import HeaderJob from "../../components/HeaderJob/headerJob";
import AssignTruck from "../../components/AssignTruck";
import TableTimeslot from "../../components/TableTimeslot";
import { useLocation, useNavigate } from "react-router-dom";

export default function TimeSlot() {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate()

  const onClickBack = () => {
    navigate('/myBooking')
  }

  return (
    <Layout>
      <div>
        <button className="flex gap-4 items-center pb-7" onClick={onClickBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M16.0002 6.99813V8.99813H4.00016L9.50016 14.4981L8.08016 15.9181L0.160156 7.99813L8.08016 0.078125L9.50016 1.49813L4.00016 6.99813H16.0002Z"
              fill="black"
            />
          </svg>
          <p className="font-medium text-md">My Booking</p>
        </button>
      </div>
      <HeaderJob data={data}/>
      <div>
        <AssignTruck data={data}/>
        <TableTimeslot/>
      </div>
    </Layout>
  );
}
