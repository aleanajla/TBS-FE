import React from "react";
import Layout from "../../components/Layouts/Layout";
import Menu from "../../components/Menu";
import FilterSearch from "../../components/FilterSearch";
import Tabs from "../../components/Tabs";

export default function Homepage() {
    return(
        <Layout>
            <Menu/>
            <Tabs/>
        </Layout>

    )
}