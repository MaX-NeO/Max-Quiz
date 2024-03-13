import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, CreditCard, BookCheck, Cog } from 'lucide-react'
const AdminLeftbar = () => {
    const navigate = useNavigate()
    const UserLinks = [
        {
            title: 'Dashboard',
            path: '/admin/dashboard',
            icon: LayoutDashboard
        },
        {
            title: 'Membership',
            path: '/admin/membership',
            icon: CreditCard
        },
        {
            title: 'MCQ',
            path: '/admin/assesments',
            icon: BookCheck
        },
        {
            title: 'Settings',
            path: '/admin/settings',
            icon: Cog
        },
    ]
    const handleLogout = () => {
        navigate('/login')
    }
    return (
        <>
            <div className='w-[15vw] bg-orange-50/20 shadow-md shadow-orange-500 flex flex-col'>
                <div className='h-[5vh] bg-orange-100/10 text-black flex items-center justify-center w-full font-bold border-b-2'>
                    <span className='text-orange-500'> Admin </span>
                </div>
                <div className='h-[90vh] flex flex-col gap-1'>
                    {
                        UserLinks.map((link, index) => (
                            <NavLink key={index} to={link.path} className='p-5 border-b-4 border-gray-500 hover:border-orange-600 font-bold mt-2'>
                                <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                                    {React.createElement(link.icon, { size: 20 })}
                                    {link.title}
                                </span>
                            </NavLink>
                        ))
                    }
                </div>
                <div className='h-[5vh] flex justify-center items-end'>
                    <button className='bg-red-500 hover:bg-red-600 font-semibold text-white w-full h-full p-2' onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </>
    )
}

export default AdminLeftbar