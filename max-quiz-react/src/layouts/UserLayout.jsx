import React, { Suspense, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import UserLeftbar from '../components/Shared/UserLeftbar'
import UserTopBar from '../components/Shared/UserTopbar'
import Loader from '../components/public/Loader'
import { authService } from '../services/auth'
import { User } from '../services/user'

const UserLayout = () => {
    const Navigate = useNavigate()
    const [username, setUsername] = useState(null)
    useEffect(() => {
        const checkAuth = async () => {
            if (!authService.isLoggedIn() || authService.getUserRole() !== "User") {
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
        checkAuth();
    }, [Navigate]);
    return (
        <>
            <div className='m-0 p-0 flex flex-row h-[100vh] w-[100vw] overflow-hidden'>
                <UserLeftbar />
                <div className=''>
                    <UserTopBar username={username} />
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