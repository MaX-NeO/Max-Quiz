import React, { useState } from 'react'
import UserTitlebar from '../../components/Shared/UserTitlebar'
import { MembershipPlans } from '../../configs/Config'
import { razorpayconfig, testuserconfig } from '../../configs/Config'
const UserMembership = () => {
  const [membership, setMembership] = useState(false)
  const [plandata, setPlandata] = useState({
    planName: '',
    planPrice: 0,
    planDays: 0,
    key: ''
  })
  const handleUpgrade = (planname, planprice, planddays) => {
    if (planprice > 0) {
      const options = {
        key: razorpayconfig.key,
        key_secret: razorpayconfig.key_secret,
        amount: planprice * 100,
        currency: razorpayconfig.currency,
        name: razorpayconfig.name,
        handler: (res) => {
          alert(res.razorpay_payment_id)
          setPlandata({
            planName: planname,
            planPrice: planprice,
            planDays: planddays,
            key: res.razorpay_payment_id
          })
          setMembership(true)
        },
        prefill: {
          name: testuserconfig.name,
          email: testuserconfig.email,
          contact: testuserconfig.contact
        },
        notes: {
          address: " office",
        },
        theme: {
          color: '#f5f5f7'
        }
      };
      const pay = new window.Razorpay(options);
      pay.open();
    }
    else {
      alert("invalid amount")
    }

  }

  return (
    <>
      <UserTitlebar Title='Membership Plans' />
      <div className='h-[90vh] flex justify-center items-center shadow-sm shadow-slate-100 w-[84vw] gap-5'>
        {membership ? (
          <>
            {plandata.planName}
            {plandata.planDays}
          </>
        ) : (
          <>
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
                    {
                      plan.price === 0 ? '' :
                        (
                          <>
                            <button className='w-[80%] bg-gradient-to-tr from-orange-600 to-orange-300 hover:bg-gradient-to-tr hover:from-orange-300 hover:to-orange-500 text-white p-2 rounded-sm font-bold mt-4 shadow-md shadow-orange-500/40' onClick={() => { handleUpgrade(plan.planname, plan.price, plan.days) }}> Upgrade </button>
                          </>
                        )
                    }
                  </div>
                </div>
              ))
            }
          </>
        )
        }

      </div>
    </>
  )
}

export default UserMembership