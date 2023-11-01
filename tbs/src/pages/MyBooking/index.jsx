import Timeslot from "../../components/Timeslot/timeslot";
import CardBooking from "../../components/CardBooking/cardBooking";
import FilterSearch from "../../components/FilterSearch";
import Layout from "../../components/Layouts/Layout";
import React from "react";

export default function MyBooking() {
    return (
        <Layout>
            <h3 className="font-medium">Daftar Pesanan</h3>
            <div className="py-6">
                <FilterSearch />
            </div>
            <div>
                <CardBooking/>
                <Timeslot/>
            </div>
        </Layout>
    )
}