import { MailPlus, Pencil, ShieldAlert, Trash } from 'lucide-react'
import React from 'react'

const AdminSiteconfigs = () => {

    const deleteQuery = () => {

    }
    return (
        <>
            <div className='h-[90vh] flex justify-center items-center shadow-sm shadow-slate-100 w-[84vw]'>
                <div className='h-2/4 w-4/6 flex flex-col justify-center items-start shadow-sm shadow-orange-500/30 gap-1'>
                    <div className='h-5/6 w-full flex flex-row items-center justify-center'>
                        <div className='w-1/2 h-full flex flex-col'>
                            <div className='h-1/4 w-full flex flex-row border-2 border-orange-100/50 bg-orange-500'>
                                <div className='w-3/4 h-full flex items-center justify-start text-white font-bold px-4'>
                                    Contact info
                                </div>
                                <div className='w-1/4 h-full flex items-center justify-start px-4 text-white'>
                                    <button className='p-2 border-2 border-slate-100/50 hover:border-white hover:bg-slate-200/40 rounded-full'>
                                        <Pencil className='text-white' />
                                    </button>
                                </div>
                            </div>
                            <div className='h-1/4 w-full flex flex-row border-2 border-orange-100/50'>
                                <div className='w-1/3 h-full flex items-center justify-start text-orange-500 font-bold bg-orange-100/10 px-4'>
                                    Email
                                </div>
                                <div className='w-2/3 h-full flex items-center justify-start font-semibold px-4'>
                                    support@maxquiz.io
                                </div>
                            </div>
                            <div className='h-1/4 w-full flex flex-row border-2 border-orange-100/50'>
                                <div className='w-1/3 h-full flex items-center justify-start text-orange-500 font-bold bg-orange-100/10 px-4'>
                                    Phone
                                </div>
                                <div className='w-2/3 h-full flex items-center justify-start font-semibold px-4'>
                                    9789683210
                                </div>
                            </div>
                            <div className='h-1/4 w-full flex flex-row border-2 border-orange-100/50'>
                                <div className='w-1/3 h-full flex items-center justify-start text-orange-500 font-bold bg-orange-100/10 px-4'>
                                    Address
                                </div>
                                <div className='w-2/3 h-full flex items-center justify-start font-semibold px-4'>
                                    CBE
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2 h-full flex flex-col'>
                            <div className='h-1/4 w-full flex flex-row border-2 border-orange-100/50 bg-orange-500'>
                                <div className='w-3/4 h-full flex items-center justify-start text-white font-bold px-4'>
                                    Social info
                                </div>
                                <div className='w-1/4 h-full flex items-center justify-start px-4 text-white'>
                                    <button className='p-2 border-2 border-slate-100/50 hover:border-white hover:bg-slate-200/40 rounded-full'>
                                        <Pencil className='text-white' />
                                    </button>
                                </div>
                            </div>
                            <div className='h-1/4 w-full flex flex-row border-2 border-orange-100/50'>
                                <div className='w-1/3 h-full flex items-center justify-start text-blue-500 font-bold bg-blue-100/10 px-4'>
                                    Facebook
                                </div>
                                <div className='w-2/3 h-full flex items-center justify-start font-semibold px-2 line-clamp-1'>
                                    https://www.facebook.com/iamneoai/
                                </div>
                            </div>
                            <div className='h-1/4 w-full flex flex-row border-2 border-orange-100/50'>
                                <div className='w-1/3 h-full flex items-center justify-start text-red-500 font-bold bg-red-100/10 px-4'>
                                    Youtube
                                </div>
                                <div className='w-2/3 h-full flex items-center justify-start font-semibold px-2 line-clamp-1'>
                                    https://www.youtube.com/@iamneo_ai3526
                                </div>
                            </div>
                            <div className='h-1/4 w-full flex flex-row border-2 border-orange-100/50'>
                                <div className='w-1/3 h-full flex items-center justify-start text-black font-bold bg-slate-950/10 px-4'>
                                    X
                                </div>
                                <div className='w-2/3 h-full flex items-center justify-start font-semibold px-2 line-clamp-1'>
                                    https://x.com/iamneo_ai
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-1/6 w-full items-center justify-center'>
                        <h1 className='h-1/2 w-full flex justify-center items-center border-2 border-orange-100/50 bg-orange-500 p-1 font-bold text-white'>
                            Maintianance Mode
                        </h1>
                        <div className='w-full h-full flex items-center justify-center'>
                            <button className='w-[20%] bg-gradient-to-tr from-yellow-600 to-yellow-300 text-white p-1 rounded-sm font-bold shadow-md shadow-orange-500/40 flex flex-row items-center justify-center gap-2'>
                                <ShieldAlert /> Setup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSiteconfigs