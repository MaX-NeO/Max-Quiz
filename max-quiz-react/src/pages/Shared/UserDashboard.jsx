import React from 'react'
import UserTitlebar from '../../components/Shared/UserTitlebar'
import { BookCheck, BookCopy, CircleCheckBig, Medal } from 'lucide-react'

const UserDashboard = () => {
    return (
        <>
            <UserTitlebar Title='Dashboard' />
            <div className='h-[90vh] flex justify-center items-center shadow-sm shadow-slate-100 w-[84vw] gap-4'>
                <div className='flex flex-row h-40 w-1/4 shadow-md shadow-orange-500/40 cursor-pointer hover:shadow-orange-500 '>
                    <div className='h-full w-4/6 flex flex-col bg-orange-200/10'>
                        <div className='h-3/4 w-full flex justify-center items-center'>
                            <h2 className='text-5xl font-bold'>#1</h2>
                        </div>
                        <div className='h-2/6 w-full flex items-center justify-center'>
                            <p className='font-semibold'>Rank</p>
                        </div>
                    </div>
                    <div className='h-full w-2/4 flex items-center justify-center border-2 border-orange-500/5'>
                        <Medal className='text-orange-500' size={50} />
                    </div>
                </div>
                <div className='flex flex-row h-40 w-1/4 shadow-md shadow-orange-500/40 cursor-pointer hover:shadow-orange-500'>
                    <div className='h-full w-4/6 flex flex-col bg-orange-200/10'>
                        <div className='h-3/4 w-full flex justify-center items-center'>
                            <h2 className='text-5xl font-bold'>8</h2>
                        </div>
                        <div className='h-2/6 w-full flex items-center justify-center'>
                            <p className='font-semibold'>MCQ's Taken</p>
                        </div>
                    </div>
                    <div className='h-full w-2/4 flex items-center justify-center border-2 border-orange-500/5'>
                        <BookCheck className='text-orange-500' size={50} />

                    </div>
                </div>
                <div className='flex flex-row h-40 w-1/4 shadow-md shadow-orange-500/40 cursor-pointer hover:shadow-orange-500'>
                    <div className='h-full w-4/6 flex flex-col bg-orange-200/10'>
                        <div className='h-3/4 w-full flex justify-center items-center'>
                            <h2 className='text-5xl font-bold'>10</h2>
                        </div>
                        <div className='h-2/6 w-full flex items-center justify-center'>
                            <p className='font-semibold'>Total MCQ's</p>
                        </div>
                    </div>
                    <div className='h-full w-2/4 flex items-center justify-center border-2 border-orange-500/5'>
                        <BookCopy className='text-orange-500' size={50} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDashboard