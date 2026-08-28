import React from 'react'

const FailedTask = () => {
  return (
    <div className='h-full w-80 flex-shrink-0 p-5 bg-red-400 rounded-2xl'>
        <div className="flex justify-between items-center">
          <h3 className='bg-red-600 px-3 py-1 font-semibold rounded text-sm'>High</h3>
          <h4 className='text-sm font-semibold'>26 aug 2026</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione optio ad illo temporibus in rem!
        </p>

        <div className='mt-4'>
            <button className='w-full'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask
