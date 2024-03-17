import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const handleLogin = (e) => {
        e.preventDefault()
        const loginData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        console.log(loginData)
        navigate('/user/dashboard')
    }
    return (
        <>
            <div className='p-0 m-0 h-[90vh] w-screen flex justify-center items-center flex-col'>
                <form className='flex flex-col gap-5 bg-slate-50/80 h-3/6 w-[30%] items-center justify-center rounded-md shadow-md shadow-orange-100' onSubmit={handleLogin}>
                    <input type="email" ref={emailRef} placeholder='Email' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' required />
                    <input type="password" ref={passwordRef} placeholder='Password' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' required />
                    <button type="submit" className='w-[80%] bg-gradient-to-tr from-orange-600 to-orange-300 text-white p-2 rounded-sm font-bold mt-4 shadow-md shadow-orange-500/40'>Login</button>
                    <p>Don't have an account ? <span className='text-orange-500 cursor-pointer font-bold' onClick={() => navigate('/register')}> Register ! </span></p>
                </form>
            </div>
        </>
    )
}

export default Login