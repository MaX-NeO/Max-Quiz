import React, { Suspense, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AdminLeftbar from '../components/Admin/AdminLeftbar'
import AdminTopBar from '../components/Admin/AdminTopbar'
import Loader2 from '../components/public/Loader2'
import { authService } from '../services/auth'
import { User } from '../services/user'

const AdminLayout = () => {
    const Navigate = useNavigate()
    const [username, setUsername] = useState(null)
    const checkAuth = async () => {
        if (!authService.isLoggedIn() || authService.getUserRole() !== "Admin") {
            Navigate('/login');
        }
        else {
            const usernameData = async () => {
                const data = await User.getUsername()
                return setUsername(data);
            };
            usernameData()
        }
    };
    useEffect(() => {
        checkAuth();
    }, [Navigate]);
    return (
        <>
            <div className='m-0 p-0 flex flex-row h-[100vh] w-[100vw] overflow-hidden'>
                <AdminLeftbar />
                <div className='h-screen'>
                    <AdminTopBar username={username} />
                    <div className='w-[85vw] h-[95vh] flex flex-col p-2 gap-4'>
                        <Suspense fallback={<Loader2 />}>
                            <Outlet />
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout