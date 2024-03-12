import React from 'react'

const PageSection = ({Title,Desc}) => {
  return (
    <>
    <div className='h-[10rem] w-full flex items-center justify-center particle-bg-x'>
        <div className='h-3/6 w-2/4 flex flex-col items-center justify-center bg-white shadow-lg rounded-md bg-clip-padding bg-opacity-60 border border-gray-200'>
                <h1 className='text-orange-500 font-bold'>
                    {Title}
                </h1>
                <p className=' font-semibold'>
                    {Desc}
                </p>
        </div>
    </div>
    </>
  )
}

export default PageSection