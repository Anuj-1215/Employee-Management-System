import React from 'react'

const AcceptTask = ({data, onStatusChange}) => {
  return (
    <div className='h-full min-h-0 w-[min(20rem,calc(100vw-3rem))] shrink-0 p-5 bg-amber-300 text-slate-950 rounded-xl shadow-lg shadow-black/20 flex flex-col'>
        <div className="flex justify-between items-start gap-3">
          <h3 className='max-w-[65%] truncate bg-amber-500 px-3 py-1 font-semibold rounded-full text-xs uppercase tracking-wide'>{data.category}</h3>
          <h4 className='text-xs font-semibold whitespace-nowrap'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-xl font-bold leading-tight line-clamp-2'>{data.taskTitle}</h2>
        <p className='text-sm mt-2 leading-5 line-clamp-5 text-slate-800'>
         {data.taskDescription}
        </p>

        <div className='flex gap-2 mt-auto pt-5'>
            <button type='button' onClick={() => onStatusChange('completed')} className='flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-2 rounded-lg text-xs font-semibold transition-colors'>Mark as Completed</button>
            <button type='button' onClick={() => onStatusChange('failed')} className='flex-1 bg-rose-600 hover:bg-rose-700 text-white py-2 px-2 rounded-lg text-xs font-semibold transition-colors'>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
