import { useContext } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../context/AuthProvider'

const TaskList = ({data}) => {
  const authData = useContext(AuthContext)

  const updateTaskStatus = (taskIndex, status) => {
    const employees = JSON.parse(localStorage.getItem('employees')) || []
    const employee = employees.find((item) => item.id === data.id)

    if (!employee || !employee.tasks[taskIndex]) return

    const task = employee.tasks[taskIndex]
    const previousStatus = task.completed ? 'completed' : task.failed ? 'failed' : task.newTask ? 'newTask' : 'active'

    if (previousStatus === status) return

    task.active = status === 'active'
    task.newTask = status === 'newTask'
    task.completed = status === 'completed'
    task.failed = status === 'failed'
    employee.newTaskL1 = employee.tasks.filter((item) => item.newTask).length
    employee.activeL1 = employee.tasks.filter((item) => item.active && !item.newTask).length
    employee.completedL1 = employee.tasks.filter((item) => item.completed).length
    employee.failedL1 = employee.tasks.filter((item) => item.failed).length

    localStorage.setItem('employees', JSON.stringify(employees))
    authData?.updateEmployees(employees)
  }

  return (
    <div id='taskList' className='h-[55%] min-h-0 py-5 px-2 w-full mt-10 overflow-x-auto scroll-smooth flex items-stretch justify-start gap-5 flex-nowrap'>
      {data.tasks.map((elem, idx) => {
        if(elem.newTask){
          return <NewTask key={idx} data={elem} onStatusChange={(status) => updateTaskStatus(idx, status)} />
        }
        if(elem.active){
          return <AcceptTask key={idx} data={elem} onStatusChange={(status) => updateTaskStatus(idx, status)} />
        }
        if(elem.completed){
          return <CompleteTask key={idx} data={elem} />
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem} />
        }
      })}
    </div>
  )
}

export default TaskList
