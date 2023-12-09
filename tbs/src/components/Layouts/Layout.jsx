import React from "react"
import Footer from "../Footer"
import Navbar from "../Navbar"

export default function Layout({ children }) {
    return (
        <div className="flex flex-col justify-between min-h-[calc(100vh)] scrollbar-h">
            <div>
                <Navbar />
                <main className="py-10 px-10">{children}</main>
            </div>
            <Footer />
        </div>
    )
}