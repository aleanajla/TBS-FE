import React from "react"
import Footer from "../Footer"
import Navbar from "../Navbar"

export default function Layout( {children} ) {
    return (
        <>
        <div className="">
            <Navbar/>
            <main className="p-10 relative">{children}</main>
            <Footer/>
        </div>
        </>
    )
}