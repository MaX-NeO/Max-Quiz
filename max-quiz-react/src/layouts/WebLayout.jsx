import React from 'react'
import Navbar from '../components/public/Navbar'
import { Outlet } from 'react-router-dom'

const WebLayout = () => {
    // const auth = false
    // const uname = "mohan"
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default WebLayout