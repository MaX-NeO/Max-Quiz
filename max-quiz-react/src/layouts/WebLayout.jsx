import React, { Suspense } from 'react'
import Navbar from '../components/public/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/public/Footer'
import Loader from '../components/public/Loader'

const WebLayout = () => {
    // const auth = false
    // const uname = "mohan"
    return (
        <>
            <Navbar />

            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    )
}

export default WebLayout