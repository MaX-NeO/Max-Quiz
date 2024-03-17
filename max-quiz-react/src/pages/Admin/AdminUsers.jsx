import { Pencil, Plus, Trash } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminUsers = () => {
    const navigate = useNavigate()
    const [addmodel, setAddmodel] = useState(false)
    const [deletemodel, setDeletemodel] = useState(false)
    const editUser = (uid) => {
        navigate(`/admin/plans/user/${uid}`)
    }
    const deleteUser = () => {
        setDeletemodel(true)
    }
    const addUser = () => {
        setAddmodel(true)
    }
    return (
        <>
            <div className='h-[90vh] flex justify-center items-center shadow-sm shadow-slate-100 w-[84vw]'>
                <div className='h-full w-5/6 flex justify-center items-start shadow-sm shadow-orange-500/30 '>
                    <table className='w-full h-auto border-2 border-orange-600 '>
                        <thead className='border-collapse border-2 border-orange-500 bg-orange-500 text-white'>
                            <tr>
                                <th>
                                    User ID
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
                                    Rank
                                </th>
                                <th>
                                    Score
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
                                    #1
                                </td>
                                <td>
                                    2312
                                </td>
                                <td className='flex justify-center items-center gap-4'>
                                    <button onClick={editUser}> <Pencil className='text-blue-500 p-1 rounded-md border-2 border-blue-500 hover:bg-blue-500 hover:text-white' size={30} /> </button>
                                    <button onClick={deleteUser}> <Trash className='text-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-red-500 hover:text-white' size={30} /> </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button className='text-green-500 p-1 rounded-md border-2 border-green-500 hover:bg-green-500 hover:text-white absolute right-4 bottom-4 flex flex-row justify-center items-center gap-1 font-semibold h-10 w-10' onClick={addUser}><Plus size={30} /></button>
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
            {
                addmodel && (
                    <>
                        <div className='h-screen w-screen flex absolute z-50 bg-gray-500/60 justify-center items-center top-0 left-0'>
                            <div className='h-[45vh] w-[30vw] flex flex-col shadow-md shadow-orange-500/20 bg-white rounded-sm'>
                                <div className='h-5/6 w-full flex flex-col justify-center items-center p-2 gap-4'>
                                    <input placeholder='Name' className='bg-orange-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                                    <input placeholder='Email' className='bg-orange-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                                    <input placeholder='Phone' className='bg-orange-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                                </div>
                                <div className='h-1/6 w-full flex flex-row justify-center items-center'>
                                    <button className='w-1/2 h-full bg-red-500 font-bold text-white' onClick={() => { setAddmodel(false) }}> Cancel </button>
                                    <button className='w-1/2 h-full bg-blue-500 font-bold text-white'>Add User</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default AdminUsers