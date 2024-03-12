import React from 'react'

const UserTitlebar = ({ Title }) => {
    return (
        <>
            <div className='w-full  h-[5vh] flex justify-start items-center pl-4 shadow-sm shadow-slate-100 font-semibold text-xl'>
                {Title}
            </div>
        </>
    )
}

export default UserTitlebar