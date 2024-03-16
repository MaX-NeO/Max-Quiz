import React from 'react'
import Navbar from '../components/public/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/public/Footer'

const WebLayout = () => {
    // const auth = false
    // const uname = "mohan"
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default WebLayout