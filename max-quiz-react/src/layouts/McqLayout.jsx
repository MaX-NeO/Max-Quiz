import React from 'react'
import { Outlet } from 'react-router-dom'

const McqLayout = () => {
    return (
        <>
            <div className='m-0 p-0 flex flex-col h-[100vh] w-[100vw] overflow-hidden justify-center items-center'>
                <Outlet />
            </div>
        </>
    )
}

export default McqLayout