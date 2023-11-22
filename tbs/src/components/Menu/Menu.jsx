import { Role } from "../../lib/utils";
import React from "react";
import {Link} from "react-router-dom"
import { MenuJPT } from "./menuJPT";
import { MenuTC } from "./menuTC";
import { useSelector } from "react-redux";

export function Menu () {
    const {Role_ID} = useSelector((state) => state.Auth.user)
    return(
        <div className="flex rounded-lg p-5 flex-row text-white" style= {{backgroundColor: "#3430AA"}}>
            <div className="">
                <div className="p-6">
                    <p className="font-bold text-3xl mb-3">WE BUILD DIGITAL EXPERIENCE.</p>
                    <p className="font-normal">Find your terminal service</p>
                </div>
                <img src="/images/homepage_menu_logo.svg" />
            </div>
            <div className="w-full p-4 flex flex-col r" style={{backgroundColor: "#2D2A86"}}>
                {
                    Role_ID == Role.FreightForwarder && <MenuJPT/>
                }
                {
                    Role_ID == Role.TruckingCompany && <MenuTC/>
                }
            </div>
        </div>
    );
}