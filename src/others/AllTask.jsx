import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {

  const authData = useContext(AuthContext)
  return (
    <div id='taskList' className='bg-[#1c1c1c] p-3 rounded mt-5'>
       <div className='bg-[#1c1c1c] mb-2 py-2 px-4 items-center flex justify-around rounded'>
        <h2 className='w-1/5 font-bold text-xl'>Employee Name</h2>
        <h3 className='w-1/5 font-bold text-xl'>New Tasks</h3>
        <h5 className='w-1/5 font-bold text-xl'>Active Task</h5>
        <h5 className='w-1/5 font-bold text-xl'>Completed</h5>
        <h5 className='w-1/5 font-bold text-xl'>Failed</h5>
      </div>

      <div id='taskList' className='h-[80%]'>
        {authData.employees.map((e, idx) => {
        return <div key={idx} className=' border-2 border-emerald-300 mb-2 py-2 px-4 flex items-center justify-around rounded'>
        <h2 className='w-1/5 font-semibold text-xl'>{e.name}</h2>
        <h3 className='w-1/5 font-semibold text-xl text-blue-400'>{e.newTaskL1}</h3>
        <h5 className='w-1/5 font-semibold text-xl text-yellow-200'>{e.activeL1}</h5>
        <h5 className='w-1/5 font-semibold text-xl text-green-600'>{e.completedL1}</h5>
        <h5 className='w-1/5 font-semibold text-xl text-red-600'>{e.failedL1}</h5>
      </div>
      })}
      </div>
    </div>
  )
}

export default AllTask
