import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import UserLeftbar from '../components/Shared/UserLeftbar'
import UserTopBar from '../components/Shared/UserTopbar'
import Loader from '../components/public/Loader'

const UserLayout = () => {
    return (
        <>
            <div className='m-0 p-0 flex flex-row h-[100vh] w-[100vw] overflow-hidden'>
                <UserLeftbar />
                <div className=''>
                    <UserTopBar />
                    <div className='w-[85vw]h-[95vh] flex flex-col p-2 gap-4'>
                        <Suspense fallback={<Loader />}>
                            <Outlet />
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLayout