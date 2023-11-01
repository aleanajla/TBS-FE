import React from "react"
import Footer from "../Footer"
import Navbar from "../Navbar"

export default function Layout({ children }) {
    return (
        <div className="flex flex-col justify-between min-h-[calc(100vh)]">
            <div>
                <Navbar />
                <main className="px-10 py-16 relative">{children}</main>
            </div>
            <Footer />
        </div>
    )
}