import React from 'react'

const TaskListNumbers = ({data}) => {
  const newTaskCount = data.tasks.filter((task) => task.newTask).length
  const activeTaskCount = data.tasks.filter((task) => task.active && !task.newTask).length
  const completedTaskCount = data.tasks.filter((task) => task.completed).length
  const failedTaskCount = data.tasks.filter((task) => task.failed).length

  return (
    <div className='flex mt-10 w-full justify-between gap-5'>
        <div className='rounded-2xl py-6 px-9 w-[45%] bg-blue-400'>
            <h2 className='font-semibold text-3xl'>{newTaskCount}</h2>
            <h3 className='font-medium text-xl'>New Task</h3>
        </div>

         <div className='rounded-2xl py-6 px-9 w-[45%] bg-green-400'>
            <h2 className='font-semibold text-3xl'>{completedTaskCount}</h2>
            <h3 className='font-medium text-xl'>Completed</h3>
        </div>

         <div className='rounded-2xl py-6 px-9 w-[45%] bg-yellow-400'>
            <h2 className='font-semibold text-3xl'>{activeTaskCount}</h2>
            <h3 className='font-medium text-xl'>Accepted</h3>
        </div>

         <div className='rounded-2xl py-6 px-9 w-[45%] bg-red-400'>
            <h2 className='font-semibold text-3xl'>{failedTaskCount}</h2>
            <h3 className='font-medium text-xl'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers
