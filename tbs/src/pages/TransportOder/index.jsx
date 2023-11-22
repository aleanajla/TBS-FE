import Timeslot from "../../components/ChooseTimeslot";
import CardBooking from "../../components/CardBooking/cardBooking";
import FilterSearch from "../../components/FilterSearch";
import Layout from "../../components/Layouts/Layout";
import React from "react";
import { Link } from "react-router-dom";
import Tabs from "src/components/Tabs";
import { Tab } from "src/components/Tab/Tab";

export default function TransportOrder() {
    return (
        <Layout>
            <div className="flex flex-col gap-4">
                <Link to={"/homepage"} className="flex items-center gap-4 pb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20.0002 10.9981V12.9981H8.00016L13.5002 18.4981L12.0802 19.9181L4.16016 11.9981L12.0802 4.07812L13.5002 5.49813L8.00016 10.9981H20.0002Z" fill="#7D7D7D" />
                    </svg>
                    <p className="font-medium text-md text-[#7D7D7D]">Homepage</p>
                </Link>
                <Tab/>
            </div>
        </Layout>
    )
}