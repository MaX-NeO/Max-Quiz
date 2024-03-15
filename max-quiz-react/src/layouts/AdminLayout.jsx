import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminLeftbar from '../components/Admin/AdminLeftbar'
import AdminTopBar from '../components/Admin/AdminTopbar'

const AdminLayout = () => {
    return (
        <>
            <div className='m-0 p-0 flex flex-row h-[100vh] w-[100vw] overflow-hidden'>
                <AdminLeftbar />
                <div className=''>
                    <AdminTopBar />
                    <div className='w-[85vw] h-[95vh] flex flex-col p-2 gap-4'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout