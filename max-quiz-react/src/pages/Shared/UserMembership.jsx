import React from 'react'
import UserTitlebar from '../../components/Shared/UserTitlebar'
import { MembershipPlans } from '../../configs/Config'
const UserMembership = () => {
  return (
    <>
      <UserTitlebar Title='Membership Plans' />
      <div className='h-[90vh] flex justify-center items-center shadow-sm shadow-slate-100 w-[84vw] gap-5'>
        {
          MembershipPlans.map((plan) => (
            <div className='flex flex-col justify-center items-center h-[30vh] w-[20vw] shadow-md shadow-orange-500/60 hover:shadow-orange-700' key={plan.pid}>
              <div className='h-1/4 w-full flex justify-center items-center font-bold text-orange-500 text-xl border-2 border-orange-500 '>
                {plan.planname}
              </div>
              <div className='h-2/4 flex flex-col w-full justify-around items-center'>
                <div>
                  {
                    plan.price === 0 ? 'Free Plan' : `Rs. ${plan.price}`
                  }
                </div>
                <div>
                  {plan.days} Days
                </div>
              </div>
              <div className='h-1/4 w-full flex justify-center items-center'>
                <button className='w-[80%] bg-gradient-to-tr from-orange-600 to-orange-300 hover:bg-gradient-to-tr hover:from-orange-300 hover:to-orange-500 text-white p-2 rounded-sm font-bold mt-4 shadow-md shadow-orange-500/40'> Upgrade </button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default UserMembership