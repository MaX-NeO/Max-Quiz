import React from 'react'
import { Facebook, Twitter, Youtube } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <div className='w-full bg-white flex items-center justify-center h-16 shadow-md shadow-orange-200 absolute bottom-0 left-0 border-orange-200/30 border-2'>
                <div className='w-5/6 flex items-center justify-between'>
                    <h1 className='w-2/4 font-bold'>
                        ©
                        <span className='text-orange-500 px-2'>
                            Max Quiz
                        </span>
                        2024
                    </h1>
                    <ul className='flex w-2/4 justify-end items-center font-bold gap-10'>
                        <Facebook className='text-blue-500 cursor-pointer' onClick={() => window.location.href = 'https://www.facebook.com/iamneoai/'} />
                        <Twitter className='text-sky-500 cursor-pointer' onClick={() => window.location.href = 'https://x.com/iamneo_ai'} />
                        <Youtube className='text-red-500 cursor-pointer' onClick={() => window.location.href = 'https://www.youtube.com/@iamneo_ai352'} />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer