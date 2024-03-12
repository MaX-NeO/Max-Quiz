import React from 'react'
import UserTitlebar from '../../components/Shared/UserTitlebar'

const UserDashboard = () => {
    return (
        <>
            <UserTitlebar Title='Dashboard' />
            <div className='h-[90vh] flex justify-center items-start shadow-sm shadow-slate-100 w-[84vw]'>
                Dashboard
            </div>
        </>
    )
}

export default UserDashboard