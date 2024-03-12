import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='p-0 m-0 h-[90vh] w-screen flex justify-center items-center flex-col'>
                <form className='flex flex-col gap-5 bg-slate-50/80 h-3/6 w-[30%] items-center justify-center rounded-md shadow-md shadow-orange-100'>
                    <input type="text" name="" id="" placeholder='Name' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                    <input type="number" name="" id="" placeholder='Phone' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                    <input type="email" name="" id="" placeholder='Email' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                    <input type="password" name="" id="" placeholder='Password' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                    <button type="submit" className='w-[80%] bg-gradient-to-tr from-orange-600 to-orange-300 text-white p-2 rounded-sm font-bold mt-4 shadow-md shadow-orange-500/40'>Register</button>
                    <p>Already have an account ? <span className='text-orange-500 cursor-pointer font-bold' onClick={() => navigate('/login')}> Login ! </span></p>
                </form>
            </div>
        </>
    )
}

export default Register