import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full w-80 flex-shrink-0 p-5 bg-red-400 rounded-2xl'>
        <div className="flex justify-between items-center">
          <h3 className='bg-red-600 px-3 py-1 font-semibold rounded text-sm'>{data.category}</h3>
          <h4 className='text-sm font-semibold'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>
          {data.taskDescription}
        </p>

        <div className='mt-4'>
            <button className='w-full'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask
