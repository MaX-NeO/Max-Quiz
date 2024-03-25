import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loader from '../components/public/Loader'

const McqLayout = () => {
    return (
        <>
            <div className='m-0 p-0 flex flex-col h-[100vh] w-[100vw] overflow-hidden justify-center items-center'>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </div>
        </>
    )
}

export default McqLayout