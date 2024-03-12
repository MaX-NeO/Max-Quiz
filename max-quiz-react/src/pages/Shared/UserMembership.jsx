import React from 'react'
import UserTitlebar from '../../components/Shared/UserTitlebar'

const UserMembership = () => {
  return (
    <>
      <UserTitlebar Title='Membership Plans' />
      <div className='h-[90vh] flex justify-center items-start shadow-sm shadow-slate-100 w-[84vw]'>
        Membership Plans
      </div>
    </>
  )
}

export default UserMembership