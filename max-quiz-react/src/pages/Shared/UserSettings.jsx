import React from 'react'
import UserTitlebar from '../../components/Shared/UserTitlebar'

const UserSettings = () => {
  return (
    <>
      <UserTitlebar Title='Settings' />
      <div className='h-[90vh] flex justify-center items-start shadow-sm shadow-slate-100 w-[84vw]'>
        Settings
      </div>
    </>
  )
}

export default UserSettings