import React from 'react'
import UserTitlebar from '../../components/Shared/UserTitlebar'
import { Play } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const UserAssesments = () => {
  const navigate = useNavigate()
  const routeMcq = () => {
    navigate('/mcq/2341')
  }
  return (
    <>
      <UserTitlebar Title='Assesments' />
      <div className='h-[90vh] flex justify-center items-center shadow-sm shadow-slate-100 w-[84vw]'>
        <div className='h-5/6 w-5/6 flex justify-center items-start shadow-sm shadow-orange-500/30 '>
          <table className='w-full h-auto border-2 border-orange-600 '>
            <thead className='border-collapse border-2 border-orange-500 bg-orange-500 text-white'>
              <tr>
                <th>
                  MCQ ID
                </th>
                <th>
                  MCQ Time
                </th>
                <th>
                  Status
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
                  12:00
                </td>
                <td>
                  <span className='rounded-md bg-green-500/80 text-white px-3 py-1'>
                    active
                  </span>
                </td>
                <td className=''>
                  <button onClick={routeMcq}> <Play className='text-green-500 p-1 rounded-md border-2 border-green-500 hover:bg-green-500 hover:text-white' size={30} /> </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default UserAssesments