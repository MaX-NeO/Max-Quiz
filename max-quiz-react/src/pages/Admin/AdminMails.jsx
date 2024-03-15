import { MailPlus, Trash } from 'lucide-react'
import React from 'react'

const AdminMails = () => {

    const deleteQuery = () => {

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
                                    <button  onClick={() => window.location = 'mailto:max.neo.dev@gmail.com'}> <MailPlus className='text-purple-500 p-1 rounded-md border-2 border-purple-500 hover:bg-purple-500 hover:text-white' size={30} /> </button>
                                    <button onClick={deleteQuery}> <Trash className='text-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-red-500 hover:text-white' size={30} /> </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AdminMails