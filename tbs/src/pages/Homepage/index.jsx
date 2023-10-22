import React from "react";
import Layout from "../../components/Layouts/Layout";
import Menu from "../../components/Menu";
import FilterSearch from "../../components/FilterSearch";
import Tabs from "../../components/Tabs";
import LoginForm from "../../components/LoginForm";
import CardBooking from "../../components/CardBooking/cardBooking";
import headerJob from "../../components/HeaderJob/headerJob";
import HeaderJob from "../../components/HeaderJob/headerJob";
import AssignTruck from "../../components/AssignTruck/assignTruck";
import Timeslot from "../../components/Timeslot/timeslot";
import ForgotPassword from "../../components/ForgotPasswordForm/forgotPassword";
import NewPassword from "../../components/NewPassword/newPassword";

export default function Homepage() {
    return(
        <Layout>
            <Menu/>
        </Layout>
    )
}