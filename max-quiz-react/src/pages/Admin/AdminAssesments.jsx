import { Pencil, Plus, Trash } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminAssesments = () => {
    const navigate = useNavigate()
    const editAssesment = () => {

    }
    const deleteAssesment = () => {

    }
    const addAssesment= () => {

    }
    return (
        <>
            <div className='h-[90vh] flex justify-center items-center shadow-sm shadow-slate-100 w-[84vw]'>
                <div className='h-full w-5/6 flex justify-center items-start shadow-sm shadow-orange-500/30 '>
                    <table className='w-full h-auto border-2 border-orange-600 '>
                        <thead className='border-collapse border-2 border-orange-500 bg-orange-500 text-white'>
                            <tr>
                                <th>
                                    Assesment ID
                                </th>
                                <th>
                                    Time
                                </th>
                                <th>
                                    Key
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
                                    1111
                                </td>
                                <td>
                                    12:30
                                </td>
                                <td className='flex justify-center items-center gap-4'>
                                    <button onClick={editAssesment}> <Pencil className='text-blue-500 p-1 rounded-md border-2 border-blue-500 hover:bg-blue-500 hover:text-white' size={30} /> </button>
                                    <button onClick={deleteAssesment}> <Trash className='text-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-red-500 hover:text-white' size={30} /> </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button className='text-green-500 p-1 rounded-md border-2 border-green-500 hover:bg-green-500 hover:text-white absolute right-4 bottom-4 flex flex-row justify-center items-center gap-1 font-semibold h-10 w-10' onClick={addAssesment}><Plus size={30} /></button>
        </>
    )
}

export default AdminAssesments