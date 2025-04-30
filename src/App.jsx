// import { useState } from 'react'
import Navbar from "./Navbar"
import Header from "./Header"
import Section from "./Section"
import Footer from "./Footer"
import Login from "./Login"
import { Outlet } from "react-router-dom"

function App() {
    return (
        <div className="app">
            <Navbar />
                <Outlet />
            {/* <Login/> */}
            <Footer />
        </div>
    )
}

export default App
