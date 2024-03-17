import { MailPlus, Trash } from 'lucide-react'
import React, { useState } from 'react'

const AdminMails = () => {

    const [deletemodel, setDeletemodel] = useState(false)
    const deleteQuery = () => {
        setDeletemodel(true)
    }
    return (
        <>
            <div className='h-[90vh] flex justify-center items-center shadow-sm shadow-slate-100 w-[84vw]'>
                <div className='h-full w-5/6 flex justify-center items-start shadow-sm shadow-orange-500/30 '>
                    <table className='w-full h-auto border-2 border-orange-600 '>
                        <thead className='border-collapse border-2 border-orange-500 bg-orange-500 text-white'>
                            <tr>
                                <th>
                                    Query ID
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Phone
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Query
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    2341
                                </td>
                                <td>
                                    Mohanraj M
                                </td>
                                <td>
                                    9876543210
                                </td>
                                <td>
                                    max.neo.dev@gmail.com
                                </td>
                                <td>
                                    Good !
                                </td>
                                <td className='flex justify-center items-center gap-4'>
                                    <button onClick={() => window.location = 'mailto:max.neo.dev@gmail.com'}> <MailPlus className='text-purple-500 p-1 rounded-md border-2 border-purple-500 hover:bg-purple-500 hover:text-white' size={30} /> </button>
                                    <button onClick={deleteQuery}> <Trash className='text-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-red-500 hover:text-white' size={30} /> </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {
                deletemodel && (
                    <>
                        <div className='h-screen w-screen flex absolute z-50 bg-gray-500/60 justify-center items-center top-0 left-0'>
                            <div className='h-[45vh] w-[30vw] flex flex-col shadow-md shadow-orange-500/20 bg-white rounded-sm'>
                                <div className='h-5/6 w-full flex flex-col justify-center items-center p-2 gap-4'>

                                    Are you sure want to delete ?
                                </div>
                                <div className='h-1/6 w-full flex flex-row justify-center items-center'>
                                    <button className='w-1/2 h-full bg-red-500 font-bold text-white' onClick={() => { setDeletemodel(false) }}> Cancel </button>
                                    <button className='w-1/2 h-full bg-blue-500 font-bold text-white'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default AdminMails