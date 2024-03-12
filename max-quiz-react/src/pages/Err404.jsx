import React from 'react'
import Errimg from '../assets/img/ico404.webp'
import { useNavigate } from 'react-router-dom'

const Err404 = () => {
    const navigate = useNavigate()
    const routeHome = () => {
        navigate('/')
    }
    return (
        <>
            <div className='h-screen w-screen p-0 m-0 flex items-center justify-center'>
                <div className='h-[50vh] w-[40vw] flex items-center justify-center flex-col shadow-md shadow-red-500 gap-4'>
                    <div className='h-3/4 flex items-center justify-center flex-col w-full'>
                        <img src={Errimg} alt='404' className='w-[50%]' />
                        <h1 className='text-8xl font-bold font-mono text-orange-500'>404</h1>
                        <p className='font-semibold'>Page not found ! </p>
                    </div>
                    <div className='h-1/4 w-full flex justify-center items-center'>
                        <button className='w-[80%] bg-gradient-to-tr from-orange-600 to-orange-300 hover:bg-gradient-to-tr hover:from-orange-300 hover:to-orange-500 text-white p-2 rounded-sm font-bold mt-4 shadow-md shadow-orange-500/40' onClick={routeHome}>Goto Home </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Err404