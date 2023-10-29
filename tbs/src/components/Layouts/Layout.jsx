import React from "react"
import Footer from "../Footer"
import Navbar from "../Navbar"

export default function Layout( {children} ) {
    return (
        <>
        <div className="">
            <Navbar/>
                <main className="px-10 py-16 relative">{children}</main>
            <Footer/>
        </div>
        </>
    )
}