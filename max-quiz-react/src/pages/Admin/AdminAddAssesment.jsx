import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminAddAssesment = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='h-[94vh] flex justify-center items-center shadow-sm shadow-slate-100 w-[84vw] overflow-y-scroll'>
                <div className='h-full w-5/6 flex justify-start items-center shadow-sm flex-col gap-4 py-5'>
                    <div className='w-full h-[20rem] flex flex-row shadow-sm shadow-orange-500/30 items-center justify-center '>
                        <div className='w-3/4 flex flex-col px-4 gap-2 h-full justify-center items-center'>
                            <div className='w-full text-orange-500 font-bold'>
                                MCQ Title
                            </div>
                            <div className='w-full'>
                                <input type='text' placeholder='Title' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                            </div>
                        </div>
                        <div className='w-1/4 flex flex-col px-4 gap-2'>
                            <div className='w-full text-orange-500 font-bold'>
                                Access Key
                            </div>
                            <div className='w-full'>
                                <input type='number' placeholder='Key' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[10rem] flex flex-col shadow-sm shadow-orange-500/30 items-center justify-center '>
                        <div className='w-full flex flex-col px-4 gap-2'>
                            <div className='w-full text-orange-500 font-bold'>
                                Question 1
                            </div>
                            <div className='w-full'>
                                <input type='text' placeholder='Question 1' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
                            </div>
                            <div className='w-full flex flex-row items-center justify-center gap-2'>
                                <input type='text' placeholder='Option 1' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 2' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 3' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <select className="w-1/4 border border-gray-300 rounded-sm text-gray-600  bg-orange-100/50 hover:border-gray-400 focus:outline-none appearance-none p-2">
                                    <option>Correct Option</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[10rem] flex flex-col shadow-sm shadow-orange-500/30 items-center justify-center '>
                        <div className='w-full flex flex-col px-4 gap-2'>
                            <div className='w-full text-orange-500 font-bold'>
                                Question 2
                            </div>
                            <div className='w-full'>
                                <input type='text' placeholder='Question 2' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
                            </div>
                            <div className='w-full flex flex-row items-center justify-center gap-2'>
                                <input type='text' placeholder='Option 1' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 2' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 3' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <select className="w-1/4 border border-gray-300 rounded-sm text-gray-600  bg-orange-100/50 hover:border-gray-400 focus:outline-none appearance-none p-2">
                                    <option>Correct Option</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[10rem] flex flex-col shadow-sm shadow-orange-500/30 items-center justify-center '>
                        <div className='w-full flex flex-col px-4 gap-2'>
                            <div className='w-full text-orange-500 font-bold'>
                                Question 3
                            </div>
                            <div className='w-full'>
                                <input type='text' placeholder='Question 3' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
                            </div>
                            <div className='w-full flex flex-row items-center justify-center gap-2'>
                                <input type='text' placeholder='Option 1' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 2' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 3' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <select className="w-1/4 border border-gray-300 rounded-sm text-gray-600  bg-orange-100/50 hover:border-gray-400 focus:outline-none appearance-none p-2">
                                    <option>Correct Option</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[10rem] flex flex-col shadow-sm shadow-orange-500/30 items-center justify-center '>
                        <div className='w-full flex flex-col px-4 gap-2'>
                            <div className='w-full text-orange-500 font-bold'>
                                Question 4
                            </div>
                            <div className='w-full'>
                                <input type='text' placeholder='Question 4' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
                            </div>
                            <div className='w-full flex flex-row items-center justify-center gap-2'>
                                <input type='text' placeholder='Option 1' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 2' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 3' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <select className="w-1/4 border border-gray-300 rounded-sm text-gray-600  bg-orange-100/50 hover:border-gray-400 focus:outline-none appearance-none p-2">
                                    <option>Correct Option</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[10rem] flex flex-col shadow-sm shadow-orange-500/30 items-center justify-center '>
                        <div className='w-full flex flex-col px-4 gap-2'>
                            <div className='w-full text-orange-500 font-bold'>
                                Question 5
                            </div>
                            <div className='w-full'>
                                <input type='text' placeholder='Question 5' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
                            </div>
                            <div className='w-full flex flex-row items-center justify-center gap-2'>
                                <input type='text' placeholder='Option 1' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 2' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 3' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <select className="w-1/4 border border-gray-300 rounded-sm text-gray-600  bg-orange-100/50 hover:border-gray-400 focus:outline-none appearance-none p-2">
                                    <option>Correct Option</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[10rem] flex flex-col shadow-sm shadow-orange-500/30 items-center justify-center '>
                        <div className='w-full flex flex-col px-4 gap-2'>
                            <div className='w-full text-orange-500 font-bold'>
                                Question 6
                            </div>
                            <div className='w-full'>
                                <input type='text' placeholder='Question 6' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
                            </div>
                            <div className='w-full flex flex-row items-center justify-center gap-2'>
                                <input type='text' placeholder='Option 1' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 2' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 3' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <select className="w-1/4 border border-gray-300 rounded-sm text-gray-600  bg-orange-100/50 hover:border-gray-400 focus:outline-none appearance-none p-2">
                                    <option>Correct Option</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[10rem] flex flex-col shadow-sm shadow-orange-500/30 items-center justify-center '>
                        <div className='w-full flex flex-col px-4 gap-2'>
                            <div className='w-full text-orange-500 font-bold'>
                                Question 7
                            </div>
                            <div className='w-full'>
                                <input type='text' placeholder='Question 7' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
                            </div>
                            <div className='w-full flex flex-row items-center justify-center gap-2'>
                                <input type='text' placeholder='Option 1' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 2' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 3' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <select className="w-1/4 border border-gray-300 rounded-sm text-gray-600  bg-orange-100/50 hover:border-gray-400 focus:outline-none appearance-none p-2">
                                    <option>Correct Option</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[10rem] flex flex-col shadow-sm shadow-orange-500/30 items-center justify-center '>
                        <div className='w-full flex flex-col px-4 gap-2'>
                            <div className='w-full text-orange-500 font-bold'>
                                Question 8
                            </div>
                            <div className='w-full'>
                                <input type='text' placeholder='Question 8' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
                            </div>
                            <div className='w-full flex flex-row items-center justify-center gap-2'>
                                <input type='text' placeholder='Option 1' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 2' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 3' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <select className="w-1/4 border border-gray-300 rounded-sm text-gray-600  bg-orange-100/50 hover:border-gray-400 focus:outline-none appearance-none p-2">
                                    <option>Correct Option</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[10rem] flex flex-col shadow-sm shadow-orange-500/30 items-center justify-center '>
                        <div className='w-full flex flex-col px-4 gap-2'>
                            <div className='w-full text-orange-500 font-bold'>
                                Question 9
                            </div>
                            <div className='w-full'>
                                <input type='text' placeholder='Question 9' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
                            </div>
                            <div className='w-full flex flex-row items-center justify-center gap-2'>
                                <input type='text' placeholder='Option 1' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 2' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 3' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <select className="w-1/4 border border-gray-300 rounded-sm text-gray-600  bg-orange-100/50 hover:border-gray-400 focus:outline-none appearance-none p-2">
                                    <option>Correct Option</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[10rem] flex flex-col shadow-sm shadow-orange-500/30 items-center justify-center '>
                        <div className='w-full flex flex-col px-4 gap-2'>
                            <div className='w-full text-orange-500 font-bold'>
                                Question 10
                            </div>
                            <div className='w-full'>
                                <input type='text' placeholder='Question 10' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
                            </div>
                            <div className='w-full flex flex-row items-center justify-center gap-2'>
                                <input type='text' placeholder='Option 1' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 2' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <input type='text' placeholder='Option 3' className='bg-orange-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-1/4 text-black placeholder:text-black p-2 shadow-sm' />
                                <select className="w-1/4 border border-gray-300 rounded-sm text-gray-600  bg-orange-100/50 hover:border-gray-400 focus:outline-none appearance-none p-2">
                                    <option>Correct Option</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[10rem] flex shadow-sm shadow-orange-500/30 items-center justify-center '>
                        <div className='w-[50%] flex flex-row px-4 gap-2 h-full'>
                            <button className='w-1/2 p-1 bg-orange-500 rounded-sm font-bold text-white' onClick={() => { navigate(-1) }}>
                                Back
                            </button>
                            <button className='w-1/2 p-1 bg-green-500 rounded-sm font-bold text-white'>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminAddAssesment