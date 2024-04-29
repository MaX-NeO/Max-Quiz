import React, { Suspense, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Loader from '../components/public/Loader'
import { authService } from '../services/auth'

const McqLayout = () => {
    const Navigate = useNavigate()
    useEffect(() => {
        const checkAuth = async () => {
            if (!authService.isLoggedIn() || authService.getUserRole() !== "User") {
                Navigate('/login');
            }
        };
        checkAuth();
    }, [Navigate]);
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