import React, { Suspense, useEffect, useState } from 'react'
import Navbar from '../components/public/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/public/Footer'
import Loader from '../components/public/Loader'
import { WebData } from '../services/api'
import MaintainanceMode from '../pages/MaintainanceMode'

const WebLayout = () => {
    const [Maintainance, siteMaintenance] = useState(false)
    const checkMaintainance = async () => {
        try {
            const res = await WebData();
            const siteDataRes = res.data;
            if (siteDataRes !== null) {
                if (siteDataRes[0].siteMaintenanceMode) {
                    return siteMaintenance(siteDataRes[0].siteMaintenanceMode)
                }
            }
        } catch (error) {
            console.error("Error fetching site data:", error);
        }
    };

    useEffect(() => {
        checkMaintainance();
    }, []);
    return (
        <>
            {
                Maintainance ? (
                    <>
                        <div className='h-screen w-screen flex justify-center items-center'>
                            <MaintainanceMode />
                        </div>
                    </>
                ) : (
                    <>
                        <Navbar />
                        <Suspense fallback={<Loader />}>
                            <Outlet />
                        </Suspense>
                        <Footer />
                    </>
                )
            }
        </>
    )
}

export default WebLayout