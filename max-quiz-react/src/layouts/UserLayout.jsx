import React from 'react'
import { Outlet } from 'react-router-dom'
import UserLeftbar from '../components/Shared/UserLeftbar'
import UserTopBar from '../components/Shared/UserTopbar'

const UserLayout = () => {
    return (
        <>
            <div className='m-0 p-0 flex flex-row h-[100vh] w-[100vw] overflow-hidden'>
                <UserLeftbar />
                <div className=''>
                    <UserTopBar />
                    <div className='w-[85vw]h-[95vh] flex flex-col p-2 gap-4'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLayout